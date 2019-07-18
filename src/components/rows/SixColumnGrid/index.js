import React from "react";
import PropTypes from "prop-types";

import "./sixColumnGrid.m.css";
import { StoryCardML4x3DP2x1WithLabel } from "../../atoms/StoryCardML4x3DP2x1WithLabel";

const SixColumnGrid = ({ stories }) => {
  return (
    <div styleName="base">
      <div className="container row">
        {stories.map(story => (
          <StoryCardML4x3DP2x1WithLabel defaultLabel="News" key={story.id} story={story} className={"label-story"} />
        ))}
      </div>
    </div>
  );
};

SixColumnGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      contributors: PropTypes.arrayOf(
        PropTypes.shape({
          "role-name": PropTypes.string,
          authors: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string
            })
          )
        })
      ),
      headline: PropTypes.string.isRequired,
      alternative: PropTypes.shape({
        home: PropTypes.shape({
          default: PropTypes.shape({
            headline: PropTypes.string
          })
        })
      }),
      slug: PropTypes.string.isRequired,
      "hero-image-metadata": PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
      }),
      "hero-image-s3-key": PropTypes.string,
      "hero-image-caption": PropTypes.string
    })
  )
};

export default SixColumnGrid;
