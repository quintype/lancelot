import React from "react";
import PropTypes from "prop-types";

import "./eightStoriesOneAd.m.css";
import CustomizableStoryCard from "../../cards/CustomizableStoryCard/index";
import BigStoryCard from "../../atoms/BigStoryCard/index";
import SmallStoryCard from "../../atoms/SmallStoryCard/index";
import {
  mobileNoimgVerticalMobileh4,
  desktopNoimgVerticalH5
} from "../../cards/CustomizableStoryCard/story-card.config";

const EightStoriesOneAd = ({ collection }) => {
  const subCollections =
    collection && collection.items.length && collection.items.filter(item => item.type === "collection");
  const getItemsOfFirstCollection = subCollections[0] && subCollections[0].items.splice(0, 5);
  const getItemsOfSecondCollection = subCollections[1] && subCollections[1].items.splice(0, 3);
  const bigStory = getItemsOfSecondCollection && getItemsOfSecondCollection[0].story;

  return (
    <div styleName="eight-stories-two-collection" className="eight-stories-two-collection">
      {getItemsOfFirstCollection && (
        <div styleName="col-1" className="col-1">
          {getItemsOfFirstCollection.map(story => (
            <CustomizableStoryCard
              key={story.story.id}
              className={"line-separator"}
              story={story.story}
              desktop={desktopNoimgVerticalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
        </div>
      )}
      {bigStory && (
        <div styleName="col-2" className="col-2">
          <BigStoryCard story={bigStory} />
        </div>
      )}
      {getItemsOfSecondCollection && (
        <div styleName="col-3" className="col-3">
          {getItemsOfSecondCollection.splice(1, 3).map(story => (
            <SmallStoryCard story={story.story} key={story.story.id} />
          ))}
        </div>
      )}
    </div>
  );
};

EightStoriesOneAd.propTypes = {
  collection: PropTypes.object
};

export default EightStoriesOneAd;
