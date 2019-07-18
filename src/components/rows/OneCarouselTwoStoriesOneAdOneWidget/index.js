import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Carousel from "../../atoms/Carousel";
import SmallStoryCardDesktopBigNoBorder from "../../atoms/SmallStoryDesktopBigNoBorder";
import "./oneCarouselTwoStoriesOneAdOneWidget.m.css";
import SlideBigStoryCard from "../../atoms/SlideBigStoryCard";
import { getStoryHeadline } from "../../utils/utils";

const OneCarouselTwoStoriesOneAdOneWidget = ({ collection, accentColor }) => {
  const items = get(collection, ["items"], []);
  let resizeDone = false;
  const stories = items
    .filter(item => item.type === "story")
    .map(item => item.story)
    .filter(story => getStoryHeadline(story) && story.url)
    .slice(0, 7);

  if (!stories.length) {
    return null;
  }

  const carouselStories = stories.splice(0, 5);

  const slides = carouselStories
    ? carouselStories.map(story => <SlideBigStoryCard key={story.id} story={story} />)
    : [];

  const resize = () => {
    if (resizeDone === false) {
      global.dispatchEvent(new global.Event("resize"));
      resizeDone = true;
    }
  };

  const carousel = !slides.length ? null : slides.length === 1 ? (
    <div styleName="carousel ">{slides}</div>
  ) : (
    <Carousel
      styleName="carousel"
      afterSlide={resize}
      options={{
        autoplay: 3000,
        type: "carousel"
      }}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          aria-label="previous slide"
          role="button"
          onClick={previousSlide}
          styleName="slider-nav-button nav-left"
        >
          ⌃
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button aria-label="next slide" role="button" onClick={nextSlide} styleName="slider-nav-button nav-right">
          ⌃
        </button>
      )}
      renderBottomCenterControls={() => {
        return null;
      }}
    >
      {slides}
    </Carousel>
  );

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container row" styleName="row">
        {carousel}
        {stories[0] && <SmallStoryCardDesktopBigNoBorder story={stories[0]} styleName="story-1" />}
        {stories[1] && <SmallStoryCardDesktopBigNoBorder story={stories[1]} styleName="story-2" />}
      </div>
    </div>
  );
};

OneCarouselTwoStoriesOneAdOneWidget.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    items: PropTypes.array
  }),
  pagetype: PropTypes.string
};

export default OneCarouselTwoStoriesOneAdOneWidget;
