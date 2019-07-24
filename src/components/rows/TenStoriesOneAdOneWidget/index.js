import React from "react";
import StoryCardHeadlineOverlay from "../../atoms/StoryCardHeadlineOverlay";
import SmallStoryCard from "../../atoms/SmallStoryCard";
import PropTypes from "prop-types";
import StoryCardDesktop16IsTo9, { storyProps } from "../../atoms/StoryCardDesktop16IsTo9";

import "./tenStoriesOneAdOneWidget.m.css";
import CollectionTitleWithCrossLine from "../../atoms/CollectionTitleWithCrossLine";

function TenStoriesOneAdOneWidget({ items, name }) {
  const firstStory = items.slice(0, 1)[0].story;
  return (
    <div styleName="base">
      <CollectionTitleWithCrossLine title={name} placement={"1fr 1fr 5fr"} opacity={0.3} />
      <div styleName="container">
        <div styleName="col-1">
          <StoryCardHeadlineOverlay
            story={firstStory}
            styleName="headline-span2"
            key={firstStory.id}
          ></StoryCardHeadlineOverlay>
          <div styleName="card-holder">
            {items &&
              items instanceof Array > 0 &&
              items.slice(1, 7).map(item => <SmallStoryCard story={item.story} key={item.story.id} />)}
          </div>
        </div>
        <div styleName="col-2">
          {items &&
            items instanceof Array &&
            items.slice(7, 10).map(item => <StoryCardDesktop16IsTo9 story={item.story} key={item.story.id} />)}
        </div>
        <div styleName="col-3">
          <div styleName="ad">Ad Placeholder</div>
          <div styleName="widget"> WidgetPlaceholder</div>
        </div>
      </div>
    </div>
  );
}

TenStoriesOneAdOneWidget.propTypes = {
  items: PropTypes.arrayOf(storyProps),
  name: PropTypes.string
};

export default TenStoriesOneAdOneWidget;
