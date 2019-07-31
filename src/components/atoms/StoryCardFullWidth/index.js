import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Headline from "../Headline";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import { getStoryData, generateImageSources } from "../../utils/utils";
// import { getMonthDayString } from "../../utils/time-format";

import "./storyCardFullWidth.m.css";

export default function StoryCardFullWidth({ story, className = "", cardWithImageZoom = true }) {
  const storyData = getStoryData(story);
  if (!(storyData.headline && story.url)) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <div styleName="base" className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}>
      <Link
        aria-label={`${"Read full story: "} ${storyData.headline}`}
        styleName="link"
        href={externalLink || story.url}
        externalLink={externalLink}
      >
        <ResponsiveImageWithFallback
          styleName="image-container"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [16, 9], screenWidthCoverage: 1 },
            { aspectRatio: [16, 9], screenWidthCoverage: 0.66 }
          )}
        ></ResponsiveImageWithFallback>

        <div styleName="content">
          <Headline headerLevel={3} headlineType={2} text={storyData.headline} />
          {contributor && (
            <Contributor
              contributorType={3}
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#929292"
              styleName="contributor"
            />
          )}
          {/* <div styleName="story-byline">
            {story.engagement && story.engagement.total && (
              <div styleName="engagement">
                <span styleName="engagement-item">
                  <Icon type={"comment"} styleName="engagement-icon" />
                  {story.engagement.comments}
                </span>
                <span styleName="engagement-item">
                  <Icon type={"share"} styleName="engagement-icon" />
                  {story.engagement.shares}
                </span>
              </div>
            )}
            {story["published-at"] && (
              <time styleName="published-date">{getMonthDayString(story["published-at"])}</time>
            )}
          </div> */}
        </div>
      </Link>
    </div>
  );
}

StoryCardFullWidth.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: PropTypes.shape({
    "author-name": PropTypes.string,
    "contributor-role": PropTypes.shape({
      name: PropTypes.string
    }),
    headline: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      "reference-url": PropTypes.string
    }),
    slug: PropTypes.string.isRequired,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "story-template": PropTypes.string,
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string,
    url: PropTypes.string,
    "published-at": PropTypes.string,
    engagement: PropTypes.shape({
      total: PropTypes.number,
      comments: PropTypes.string,
      shares: PropTypes.string
    })
  })
};
