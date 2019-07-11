import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import Icon from "../../atoms/Icon";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";

import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import "./storyCardFeaturedSmall.m.css";

export default function StoryCardFeaturedSmall({
  story,
  className = "",
  cardWithImageZoom = true,
  hasTruncatedHeadline = true
}) {
  const storyData = getStoryData(story);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const section = get(story, ["sections", 0]);
  const sectionColor = get(story, ["sections", 0, "data", "color"]);
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      styleName={`base ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="image-container">
        <ResponsiveImageWithFallback
          styleName="figure"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [4, 3], screenWidthCoverage: 0.25 },
            { aspectRatio: [4, 3], screenWidthCoverage: 0.17 }
          )}
        />
        {/* {section && (
          <span
            styleName={`badge ${!isPremium(story) ? "hidden-mobile" : ""}`}
            style={sectionColor && { "--accent-color": sectionColor }}
          >
            {isPremium(story) && <Icon type="premium" className={"badge-icon"} />}
            <span styleName={"badge-text"}>{section["display-name"]}</span>
          </span>
        )} */}
        {section && (
          <span styleName="badge" style={sectionColor && { "--accent-color": sectionColor }}>
            <Icon type="premium" className={"badge-icon"} />
            <span styleName={"badge-text"}>{section["display-name"]}</span>
          </span>
        )}
      </div>
      <div styleName={"content"}>
        {contributor && <Contributor name={contributor["name"]} type={contributorRole} className={"contributor"} />}
        <h3 styleName={`headline ${hasTruncatedHeadline ? "truncated" : ""} `}>{storyData.headline}</h3>
      </div>
    </Link>
  );
}

StoryCardFeaturedSmall.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
  story: PropTypes.shape({
    section: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string
      })
    ),
    "access-type": PropTypes.string,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        "contributor-role": PropTypes.shape({
          name: PropTypes.string
        }),
        name: PropTypes.string
      })
    ),
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
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string
  })
};
