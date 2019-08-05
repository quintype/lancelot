import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Headline from "../Headline";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";

import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import "./storyCard.m.css";

export default function StoryCardDesktop16IsTo9({ story, className = "", cardWithImageZoom = true }) {
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
          { aspectRatio: [16, 9], screenWidthCoverage: 0.5 },
          { aspectRatio: [16, 9], screenWidthCoverage: 0.17 }
        )}
      ></ResponsiveImageWithFallback>
      <div styleName="content">
        {contributor && (
          <Contributor name={contributor["name"]} type={contributorRole} contributorType={3} styleName="contributor" />
        )}
        <Headline headerLevel={3} headlineType={6} text={storyData.headline} />
      </div>
    </Link>
  );
}

export const storyProps = PropTypes.shape({
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
});

StoryCardDesktop16IsTo9.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: storyProps
};
