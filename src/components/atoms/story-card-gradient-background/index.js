import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";

import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import styles from "./styles.m.css";

export default function StoryCardGradientBackground({
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
  const sectionColor = get(story, ["sections", 0, "data", "color"]);
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <div className={`${styles["base"]} ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}>
      <Link
        aria-label={`${"Read full story: "} ${storyData.headline}`}
        className={styles["link"]}
        href={externalLink || story.url}
        externalLink={externalLink}
      >
        <ResponsiveImageWithFallback
          className={styles["image-container"]}
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          // isPremium={isPremium(story)}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [9, 8], screenWidthCoverage: 0.75 },
            { aspectRatio: [9, 8], screenWidthCoverage: 0.25 }
          )}
        />
        <div className={styles["content"]} style={sectionColor && { "--accent-color": sectionColor }}>
          <h3 className={`${styles["headline"]} ${hasTruncatedHeadline ? styles["truncated"] : ""} `}>
            {storyData.headline}
          </h3>
          {contributor && (
            <Contributor name={contributor["name"]} type={contributorRole} className={styles["contributor"]} />
          )}
        </div>
      </Link>
    </div>
  );
}

StoryCardGradientBackground.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
  story: PropTypes.shape({
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
    "section-color": PropTypes.string,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string
  })
};
