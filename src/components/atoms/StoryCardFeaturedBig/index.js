import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../../atoms/Contributor";
import Badge from "../Badge";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardFeaturedBig.m.css";

export default function StoryCardFeaturedBig({ story, className = "", cardWithImageZoom = true }) {
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
          styleName="image-wrapper"
          className="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [4, 3], screenWidthCoverage: 0.5 },
            { aspectRatio: [2, 1], screenWidthCoverage: 0.5 }
          )}
        />
        {section && (
          <Badge
            text={section["display-name"]}
            className="hidden-mobile badge"
            style={sectionColor && { "--accent-color": sectionColor }}
          />
        )}
      </div>
      <div styleName="text-wrapper" className="text-wrapper">
        <Headline text={storyData.headline} headlineType={3} headerLevel={3} className="headline" />
        {contributor && (
          <Contributor
            name={contributor["name"]}
            contributorType={3}
            type={contributorRole}
            iconColor="#404040"
            className="contributor"
          />
        )}
        {section && (
          <Badge
            text={section["display-name"]}
            className="hidden-mobile badge"
            style={sectionColor && { "--accent-color": sectionColor }}
          />
        )}
      </div>
    </Link>
  );
}

StoryCardFeaturedBig.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
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
