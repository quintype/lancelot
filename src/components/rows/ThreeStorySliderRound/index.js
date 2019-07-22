import React, { Component } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import Carousel from "../../atoms/Carousel";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../../atoms/ResponsiveImageWithFallback";
import Headline from "../../atoms/Headline";
import "./threeStorySliderRound.m.css";
import { getStoryData, getStoryHeadline } from "../../utils/utils";

const StoryCard = ({ story, className = "", type = "small", hasTruncatedHeadline = true }) => {
  if (!story) {
    return null;
  }

  const storyData = getStoryData(story);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      href={story.url}
      className={`${className}`}
      styleName="story-card"
    >
      <div className="image-container">
        <ResponsiveImageWithFallback
          styleName="image-container-figure"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          eager
          sources={[
            {
              aspectRatio: [1, 1],
              defaultWidth: 350,
              widths: [350],
              sizes: "30vw"
            }
          ]}
        />
      </div>
      <div styleName="content">
        <Headline styleName="headline" text={storyData.headline} headerLevel={3} headerType={11} />
        {contributor && (
          <Contributor
            name={contributor["name"]}
            type={contributorRole}
            iconColor={type === "big" ? "#404040" : "#fff"}
            styleName="contributor"
          />
        )}
        {type === "big" && <h4 styleName="subheadline">{story["subheadline"]}</h4>}
      </div>
    </Link>
  );
};

StoryCard.propTypes = {
  hasTruncatedHeadline: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  story: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string,
    slug: PropTypes.string.isRequired,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string,
    url: PropTypes.string,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        "contributor-role": PropTypes.shape({
          name: PropTypes.string
        }),
        name: PropTypes.string
      })
    )
  })
};

class ThreeStorySliderRound extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };

    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  handleSlideChange(index) {
    this.setState({ currentSlideIndex: index });
  }

  render() {
    const { collection } = this.props;
    if (!collection) {
      return null;
    }

    const items = ([...collection.items] || [])
      .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
      .slice(0, this.props.storyCount || 5);
    let slides = items.map(({ story }) => (
      <StoryCard styleName="story-card-small" key={story.id} story={story} type="small" />
    ));

    return (
      <div styleName="base" style={this.props.accentColor && { "--accent-color": this.props.accentColor }}>
        <div className={`container`}>
          <StoryCard
            story={items[this.state.currentSlideIndex].story}
            styleName={"story-card-big" + (slides.length === 1 ? ` ${"show-on-mobile"}` : "")}
            type="big"
          />

          {slides.length > 1 && (
            <div styleName="carousel-wrapper">
              <Carousel
                className="carousel"
                afterSlide={this.handleSlideChange}
                options={{
                  type: "carousel",
                  autoplay: 3000,
                  perView: 3,
                  classes: {
                    activeSlide: "is-card-active"
                  },
                  breakpoints: {
                    767: {
                      perView: 1
                    }
                  }
                }}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button aria-label="previous slide" role="button" onClick={previousSlide} styleName="nav-left">
                    ⌃
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button aria-label="next slide" role="button" onClick={nextSlide} styleName="nav-right">
                    ⌃
                  </button>
                )}
                renderBottomCenterControls={({ currentSlide, goToSlide }) => {
                  return (
                    <div styleName="bullets">
                      {items.map(({ story }, index) => (
                        <button
                          aria-label="Slider Navigation"
                          role="button"
                          key={story.id}
                          styleName={currentSlide === index ? `${"bullet"} ${"is-active"}` : `${"bullet"}`}
                          onClick={() => {
                            goToSlide(index);
                          }}
                        />
                      ))}
                    </div>
                  );
                }}
              >
                {slides}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ThreeStorySliderRound.propTypes = {
  storyCount: PropTypes.number,
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(StoryCard.propTypes))
  })
};

export default ThreeStorySliderRound;
