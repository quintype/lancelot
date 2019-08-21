import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import CustomizableStoryCard from "../../cards/CustomizableStoryCard";
import {
  desktop9by5VerticalH5,
  mobile9by5VerticalMobileh3,
  desktop4by3HorizontalH5,
  mobile4by3HorizontalMobileh4,
  mobileNoimgVerticalMobileh4,
  desktop2by1VerticalH5,
  desktopNoimgVerticalH5,
  desktop1by1HorizontalH5
} from "../../cards/CustomizableStoryCard/story-card.config";

import "./twelveStoriesOneAd.m.css";
import { getStoryHeadline } from "../../utils/utils";

const TwelveStoriesOneAd = ({ collection, accentColor, pagetype = "" }) => {
  let stories = get(collection, ["items"], [])
    .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
    .map(item => item.story);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div styleName="row" className="row">
        <div styleName="desktop-col-3">
          {stories.splice(0, 1).map(story => (
            <CustomizableStoryCard
              key={story.id}
              styleName="line-separator-desktop"
              story={story}
              desktop={Object.assign({}, desktop9by5VerticalH5, { textWrapperPadding: "var(--space1_5) 0 0" })}
              mobile={Object.assign({}, mobile9by5VerticalMobileh3, { textWrapperPadding: "var(--space1) 0 0" })}
            />
          ))}
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              styleName="line-separator"
              story={story}
              desktop={desktop4by3HorizontalH5}
              mobile={mobile4by3HorizontalMobileh4}
            />
          ))}
        </div>
        <div styleName="desktop-col-2">
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              styleName="line-separator"
              story={story}
              desktop={desktop2by1VerticalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
        </div>
        <div styleName="desktop-col-3">
          {/* <DfpAd className={`${styles.ad} hidden-desktop`} adtype="Rectangle" placement={pagetype} /> */}
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              styleName="line-separator"
              story={story}
              desktop={desktopNoimgVerticalH5}
              mobile={mobile4by3HorizontalMobileh4}
            />
          ))}
          {stories.splice(0, 3).map(story => (
            <CustomizableStoryCard
              key={story.id}
              styleName="line-separator"
              story={story}
              desktop={desktopNoimgVerticalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
        </div>
        <div styleName="desktop-col-4">
          {/* <DfpAd
            className={`${styles.ad} ${styles["ad-row-3"]} hidden-mobile`}
            adtype="Rectangle"
            placement={pagetype}
          /> */}
          <div>
            {stories.splice(0, 2).map(story => (
              <CustomizableStoryCard
                key={story.id}
                styleName="story-1x1"
                story={story}
                desktop={Object.assign({}, desktop1by1HorizontalH5, { imageToHeadlineRatio: [4, 13] })}
                mobile={mobileNoimgVerticalMobileh4}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TwelveStoriesOneAd.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.object,
  pagetype: PropTypes.string
};

export default TwelveStoriesOneAd;
