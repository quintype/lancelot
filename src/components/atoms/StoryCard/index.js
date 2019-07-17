import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Icon from "../Icon";

import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import "./styles.m.css";

export default function StoryCard({ story, className = "", cardWithImageZoom = true, hasTruncatedHeadline = true }) {
  const storyData = getStoryData(story);

  if (!storyData.headline || !story["url"]) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);
  const icons = {
    "photo-album": "gallery",
    photo: "photostory",
    video: "video"
  };

  const iconType = get(icons, [story["story-template"]], null);
  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      className={`base ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
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
          { aspectRatio: [3, 2], screenWidthCoverage: 0.5 },
          { aspectRatio: [3, 2], screenWidthCoverage: 0.17 }
        )}
      >
        {iconType && (
          <span styleName="story-template-icon">
            <Icon type={iconType} styleName="template-icon" />
          </span>
        )}
        {story.engagement && story.engagement.total && (
          <span styleName="engagement">
            <Icon type="speaker" styleName="speaker-icon" />
            {story.engagement.total}
          </span>
        )}
      </ResponsiveImageWithFallback>
      <div styleName="content">
        {contributor && <Contributor name={contributor["name"]} type={contributorRole} styleName="contributor" />}
        <h3 styleName={`headline ${hasTruncatedHeadline ? "truncated" : ""} `}>{storyData.headline}</h3>
      </div>
    </Link>
  );
}

StoryCard.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
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
    engagement: PropTypes.shape({
      total: PropTypes.number
    })
  })
};