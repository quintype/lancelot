import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

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
      styleName="base"
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
        {section && (
          <span styleName="badge" style={sectionColor && { "--accent-color": sectionColor }} className="hidden-mobile">
            <span styleName={"badge-text"}>{section["display-name"]}</span>
          </span>
        )}
      </div>
      <div styleName={"content"}>
        <Headline
          text={storyData.headline}
          headlineType={5}
          headerLevel={3}
          className={`${hasTruncatedHeadline ? "truncated" : ""}`}
        />
        {contributor && (
          <Contributor
            name={contributor["name"]}
            contributorType={3}
            type={contributorRole}
            className={"contributor"}
          />
        )}
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
