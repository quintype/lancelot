import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import StoryStack from "../../atoms/StoryStack";
import BigStoryCardDifferentAspect from "../../atoms/BigStoryCardDifferentAspect";
import SmallStoryCardDesktopBig from "../../atoms/SmallStoryDesktopBig";
import SmallStoryCardDesktopSmallVertical from "../../atoms/SmallStoryDesktopSmallVertical";
// import { DfpAd } from "../../atoms/dfp-ad";
import Headline from "../../atoms/Headline";

import "./twelveStoriesOneAdOneWidget.m.css";
import { getStoryHeadline } from "../../utils/utils";

const TwelveStoriesOneAdOneWidget = ({ collection, accentColor, pagetype = "" }) => {
  const items = get(collection, ["items"], []);

  const stories = items
    .filter(item => item.type === "story")
    .slice(0, 4)
    .map(item => item.story);
  const subCollections = items
    .filter(item => item.type === "collection")
    .slice(0, 2)
    .map((subCollection, index) => (
      <div key={subCollection.id} styleName={`story-stack-${index + 1}`}>
        <Headline text={subCollection.name} headerType={7} headerLevel={2} className={`sub-collection-headline`} />
        <StoryStack
          bigStory={false}
          mobileStoryCount={4}
          stories={subCollection.items
            .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
            .slice(0, 4)
            .map(item => item.story)}
        />
      </div>
    ));

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div styleName="row" className="container row">
        {stories[0] && <BigStoryCardDifferentAspect story={stories[0]} className={"story-1"} />}
        {stories[1] && <SmallStoryCardDesktopBig story={stories[1]} className={"story-2"} />}
        {stories[2] && <SmallStoryCardDesktopSmallVertical story={stories[2]} className={"story-3"} />}
        {stories[3] && <SmallStoryCardDesktopSmallVertical story={stories[3]} className={"story-4"} />}
        <div styleName="sidebar">
          {/* <div className={styles["ad"]}>
            <DfpAd className="hidden-mobile" adtype="Rectangle" placement={pagetype} />
          </div> */}
          {/* <div className="widget hidden-mobile">
            <DfpAd className="hidden-mobile" adtype="Rectangle" placement={pagetype} />
          </div> */}
        </div>
        {subCollections}
      </div>
    </div>
  );
};

TwelveStoriesOneAdOneWidget.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    items: PropTypes.array
  }),
  pagetype: PropTypes.string
};

export default TwelveStoriesOneAdOneWidget;
