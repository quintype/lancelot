import React, { Component } from "react";
import PropTypes from "prop-types";
import SmallStoryCardNoImageNumber from "../../atoms/SmallStoryCardNoImageNumber";
import StoryCard from "../../atoms/StoryCard";
import BigStoryCardAutoSlider from "../../atoms/BigStoryCardAutoSlider";
import "./threeStoryAutoSlider.m.css";
import Media from "react-media";
import Carousel from "../../atoms/Carousel";
import { getStoryHeadline } from "../../utils/utils";

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.intervalUpdate = null;
  }

  componentDidMount() {
    this.intervalUpdate = setInterval(this.props.slideChange, this.props.interval || 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalUpdate);
  }

  render() {
    const { index, slides } = this.props;
    const slidesWithClasses = slides.map((slide, idx) => {
      const className = idx === index ? "card-active" : "";
      return (
        <div styleName={`${className} ${"flex-element"}`} key={"slide-" + idx}>
          {slide}
        </div>
      );
    });
    return <div styleName="carousal-holder">{slidesWithClasses}</div>;
  }
}

SliderComponent.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(SmallStoryCardNoImageNumber.propTypes)).isRequired,
  index: PropTypes.number.isRequired,
  slideChange: PropTypes.func.isRequired,
  interval: PropTypes.number
};

class ThreeStoryAutoSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
    this.slideCount = 3;
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.handleSlideChangeMobile = this.handleSlideChangeMobile.bind(this);
    this.init = this.init.bind(this);
  }

  handleSlideChange() {
    if (this.state.currentSlideIndex != null && this.state.currentSlideIndex + 1 < this.slideCount) {
      this.setState({ currentSlideIndex: this.state.currentSlideIndex + 1 });
    } else {
      this.init();
    }
  }

  handleSlideChangeMobile(index) {
    this.setState({ currentSlideIndex: index });
  }

  init() {
    this.setState({ currentSlideIndex: 0 });
  }

  render() {
    let { collection, interval } = this.props;

    if (!collection) {
      return null;
    }
    if (!interval) {
      interval = 2000;
    }

    const items = (collection.items || [])
      .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
      .splice(0, this.slideCount);

    const slides = items.map(({ story }, idx) => {
      return <SmallStoryCardNoImageNumber styleName="story-card-small" key={story.id} story={story} index={idx + 1} />;
    });

    const carousal = slides => (
      <Carousel
        styleName="carousel"
        afterSlide={this.handleSlideChangeMobile}
        options={{
          type: "carousel",
          autoplay: interval,
          breakpoints: {
            768: {
              perView: 2
            },
            576: {
              perView: 1.5
            }
          },
          animationTimingFunc: "ease-in-out",
          startAt: 0,
          classes: {
            activeSlide: "card-active"
          }
        }}
        renderCenterLeftControls={() => false}
        renderCenterRightControls={() => false}
      >
        {slides}
      </Carousel>
    );

    return (
      <div styleName="base" style={this.props.accentColor && { "--accent-color": this.props.accentColor }}>
        <div styleName="container">
          <BigStoryCardAutoSlider
            story={items[this.state.currentSlideIndex].story}
            className={"story-card-big" + (slides.length === 1 ? ` ${"show-on-mobile"}` : "")}
            type="big"
          />
          {slides.length > 1 && (
            <Media query="(max-width: 767px)">
              {matches =>
                matches ? (
                  <div styleName="carousal-holder">{carousal(slides)}</div>
                ) : (
                  <SliderComponent
                    slideChange={this.handleSlideChange}
                    slides={slides}
                    interval={interval}
                    index={this.state.currentSlideIndex}
                  />
                )
              }
            </Media>
          )}
        </div>
      </div>
    );
  }
}

ThreeStoryAutoSlider.propTypes = {
  accentColor: PropTypes.string,
  interval: PropTypes.number,
  slideCount: PropTypes.number,
  collection: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(StoryCard.propTypes))
  })
};

export default ThreeStoryAutoSlider;
