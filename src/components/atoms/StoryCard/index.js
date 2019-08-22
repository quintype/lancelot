import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCard.m.css";

export default function StoryCard({ story, className = "", cardWithImageZoom = true }) {
  const storyData = getStoryData(story);

  if (!storyData.headline || !story["url"]) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      styleName="base"
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <ResponsiveImageWithFallback
        styleName="image-container"
        className="image-container"
        slug={storyData.imageS3Key}
        metadata={storyData.imageMetadata}
        alt={storyData.imageCaption}
        imgParams={{ auto: ["format", "compress"] }}
        sources={generateImageSources(
          { aspectRatio: [3, 2], screenWidthCoverage: 0.5 },
          { aspectRatio: [3, 2], screenWidthCoverage: 0.17 }
        )}
      />
      <div>
        <Headline className="headline" headerLevel={3} headlineType={6} text={storyData.headline} />
        {contributor && (
          <Contributor contributorType={3} name={contributor["name"]} type={contributorRole} className="contributor" />
        )}
      </div>
    </Link>
  );
}

StoryCard.propTypes = {
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
    engagement: PropTypes.shape({
      total: PropTypes.number
    })
  })
};
