import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../atoms/Carousel";
import MainSliderCard from "../../atoms/MainSliderCard";
import "./sliderMain.m.css";
import { getStoryHeadline } from "../../utils/utils";

const SliderMain = ({ stories, className = "" }) => {
  stories = stories.filter(story => story.url && getStoryHeadline(story));
  if (stories.length === 0) {
    return null;
  }
  let slides = stories.map(story => <MainSliderCard className="card" key={story.id} story={story} />);

  if (slides.length === 1) {
    return <div>{slides}</div>;
  }

  return (
    <Carousel
      className={`${className}`}
      styleName="slider-main"
      options={{
        autoplay: 3000,
        type: "carousel"
      }}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          title="previous slide"
          aria-label="previous slide"
          role="button"
          onClick={previousSlide}
          styleName="slider-nav-button nav-left"
        >
          ⌃
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          title="next slide"
          aria-label="next slide"
          role="button"
          onClick={nextSlide}
          styleName="slider-nav-button nav-right"
        >
          ⌃
        </button>
      )}
      renderBottomCenterControls={({ currentSlide, goToSlide }) => {
        return (
          <div styleName="dots">
            {stories.map((story, index) => (
              <button
                title="previous slide"
                aria-label="next slide"
                role="button"
                key={story.id}
                styleName={currentSlide === index ? "is-active" : ``}
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
  );
};

SliderMain.propTypes = {
  stories: PropTypes.arrayOf(MainSliderCard.propTypes.story),
  className: PropTypes.string
};

export default SliderMain;
