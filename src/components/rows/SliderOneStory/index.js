import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../atoms/Carousel";
import BigSliderSlide from "../../atoms/BigSliderSlide";
import "./sliderOneStory.m.css";
import { getStoryHeadline } from "../../utils/utils";

const SliderOneStory = ({ stories, accentColor }) => {
  stories = stories.filter(story => story.url && (getStoryHeadline(story) || story["alternate-headline"]));
  if (stories.length === 0) {
    return null;
  }

  let slides = stories.map(story => <BigSliderSlide accentColor={accentColor} key={story.id} story={story} />);

  if (slides.length === 1) {
    return (
      <div styleName="base">
        <div className="container">{slides}</div>
      </div>
    );
  }

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container">
        <Carousel
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
          renderBottomCenterControls={({ nextSlide }) => null}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

SliderOneStory.propTypes = {
  accentColor: PropTypes.string,
  stories: PropTypes.arrayOf(BigSliderSlide.propTypes.story)
};

export default SliderOneStory;
