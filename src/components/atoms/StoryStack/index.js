import React from "react";
import PropTypes from "prop-types";

import BigStoryCard from "../BigStoryCard/index";
import SmallStoryCard from "../SmallStoryCard";

import "./storyStack.m.css";

const StoryStack = ({ bigStory, mobileStoryCount, stories, className = "" }) => {
  if (stories.length < 1) {
    return null;
  }
  const stack = [
    bigStory ? (
      <BigStoryCard story={stories[0]} className={"line-separater"} key={stories[0].id} />
    ) : (
      <SmallStoryCard story={stories[0]} className={"line-separater"} key={stories[0].id} />
    )
  ].concat(
    stories
      .slice(1)
      .map((story, index) => (
        <SmallStoryCard
          story={story}
          className={`${[index + 1 >= mobileStoryCount ? "mobile-hide" : ""]} ${[
            index + 2 === mobileStoryCount ? "skip-line " : ""
          ]} line-separater`}
          key={story.id}
        />
      ))
  );
  return <div styleName={`base ${className}`}>{stack}</div>;
};

StoryStack.propTypes = {
  bigStory: PropTypes.bool,
  mobileStoryCount: PropTypes.number,
  stories: PropTypes.arrayOf(BigStoryCard.propTypes.story),
  className: PropTypes.string
};

export default StoryStack;
