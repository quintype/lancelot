import React from "react";
import PropTypes from "prop-types";

import BigStoryCard from "../../atoms/big-story-card/index";
import SmallStoryCard from "../../atoms/small-story-card/index";

import styles from "./story-stack.m.css";

const StoryStack = ({ bigStory, mobileStoryCount, stories, className }) => {
  if (stories.length < 1) {
    return null;
  }
  const stack = [
    bigStory ? (
      <BigStoryCard story={stories[0]} key={stories[0].id} />
    ) : (
      <SmallStoryCard story={stories[0]} className={`${styles["line-separater"]}`} key={stories[0].id} />
    )
  ].concat(
    stories.slice(1).map((story, index) => (
      <SmallStoryCard
        story={story}
        className={`
          ${styles[index + 1 >= mobileStoryCount ? "mobile-hide" : ""]}
          ${styles["line-separater"]}
          ${styles[index + 2 === mobileStoryCount ? "skip-line" : ""]}
        `}
        key={story.id}
      />
    ))
  );
  return <div className={`${styles["base"]} ${className}`}>{stack}</div>;
};

StoryStack.propTypes = {
  bigStory: PropTypes.bool,
  mobileStoryCount: PropTypes.number,
  stories: PropTypes.arrayOf(BigStoryCard.propTypes.story),
  className: PropTypes.string
};

export default StoryStack;
