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
// import { DfpAd } from "../../atoms/dfp-ad";

import "./nineteenStoriesOneAd.m.css";
import { getStoryHeadline } from "../../utils/utils";

const NineteenStoriesOneAd = ({ collection, accentColor, pagetype = "" }) => {
  let stories = get(collection, ["items"], [])
    .filter(item => item.type === "story")
    .map(item => item.story)
    .filter(story => getStoryHeadline(story) && story.url);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div styleName="row" className="container row">
        <div styleName="desktop-col-3">
          {stories.splice(0, 1).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"bottom-gap-2"}
              story={story}
              desktop={Object.assign({}, desktop9by5VerticalH5, { textWrapperPadding: "var(--space1_5) 0 0" })}
              mobile={Object.assign({}, mobile9by5VerticalMobileh3, { textWrapperPadding: "var(--space1) 0 0" })}
            />
          ))}
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktop4by3HorizontalH5}
              mobile={mobile4by3HorizontalMobileh4}
            />
          ))}
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktop4by3HorizontalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
        </div>
        <div styleName="desktop-col-2">
          {/* <DfpAd className={`${styles.ad} hidden-desktop`} adtype="Rectangle" placement={pagetype} /> */}
          {stories.splice(0, 2).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktop2by1VerticalH5}
              mobile={mobile4by3HorizontalMobileh4}
            />
          ))}
          {stories.splice(0, 1).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktop2by1VerticalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
        </div>
        <div styleName="desktop-col-3">
          {stories.splice(0, 4).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktopNoimgVerticalH5}
              mobile={mobileNoimgVerticalMobileh4}
            />
          ))}
          {stories.splice(0, 3).map(story => (
            <CustomizableStoryCard
              key={story.id}
              className={"line-separator"}
              story={story}
              desktop={desktopNoimgVerticalH5}
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
            {stories.splice(0, 4).map(story => (
              <CustomizableStoryCard
                key={story.id}
                className={"bottom-gap"}
                style={{ "--background-color": "var(--white)" }}
                story={Object.assign({}, story, { contributors: null })}
                desktop={Object.assign({}, desktop1by1HorizontalH5, { imageToHeadlineRatio: [4, 13] })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

NineteenStoriesOneAd.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.object,
  pagetype: PropTypes.string
};

export default NineteenStoriesOneAd;
