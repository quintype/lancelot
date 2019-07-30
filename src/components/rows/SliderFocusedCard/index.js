import React from "react";
import PropTypes from "prop-types";

import CollectionLink from "../../utils/generate-collection-link";
import Carousel from "../../atoms/Carousel";
import CollectionTitleWithCrossLine from "../../atoms/CollectionTitleWithCrossLine";
import FocusedCard from "../../atoms/FocusedCard";
import { getStoryHeadline } from "../../utils/utils";

import "./sliderFocusedCard.m.css";

const SliderFocusedCard = ({
  collection,
  numberOfCardsInViewDesktop = 3,
  numberOfCardsInViewTablet = 2,
  numberOfCardsInViewMobile = 1,
  accentColor
}) => {
  const desktopGap = 24;
  const mobileGap = 0;
  const slides = collection.items
    .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
    .map(({ story }) => <FocusedCard key={story.id} story={story} styleName="card" />);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container" styleName="carousel-wrapper">
        {collection.name && (
          <CollectionLink collection={collection}>
            <CollectionTitleWithCrossLine styleName="title" title={collection.name} />
          </CollectionLink>
        )}
        <Carousel
          styleName="carousel"
          options={{
            type: "carousel",
            perView: numberOfCardsInViewDesktop,
            gap: desktopGap,
            rewind: false,
            peek: {
              before: 0,
              after: 244
            },
            breakpoints: {
              767: {
                perView: numberOfCardsInViewMobile,
                gap: mobileGap,
                peek: {
                  before: mobileGap,
                  after: 144
                }
              },
              991: {
                perView: numberOfCardsInViewTablet,
                gap: desktopGap,
                peek: {
                  before: desktopGap,
                  after: 244
                }
              }
            }
          }}
          renderCenterLeftControls={({ previousSlide, currentSlide }) =>
            currentSlide > 0 ? (
              <button
                aria-label="previous slide"
                role="button"
                onClick={previousSlide}
                styleName="slider-nav-button nav-left"
              >
                ⌃
              </button>
            ) : null
          }
          renderCenterRightControls={({ nextSlide }) => (
            <button aria-label="next slide" role="button" onClick={nextSlide} styleName="slider-nav-button nav-right">
              ⌃
            </button>
          )}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

SliderFocusedCard.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    items: PropTypes.array
  }),
  numberOfCardsInViewDesktop: PropTypes.number,
  numberOfCardsInViewTablet: PropTypes.number,
  numberOfCardsInViewMobile: PropTypes.number
};

export default SliderFocusedCard;
