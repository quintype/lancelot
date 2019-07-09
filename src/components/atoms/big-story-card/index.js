import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../responsive-image-with-fallback";
import Contributor from "../contributor/index";
// import { isPremium } from "../../../../isomorphic/data/story";

import styles from "./big-story-card.m.css";
import { getStoryData, generateImageSources } from "../../utils/utils";

const BigStoryCard = ({ story, cardWithImageZoom = true, className = "", hasTruncatedHeadline = true }) => {
  const storyData = getStoryData(story, false);

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      className={`${styles["read-more-link"]} ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div className={styles["base"]}>
        <ResponsiveImageWithFallback
          className={styles["image-wrapper"]}
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          // isPremium={isPremium(story)}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [9, 6], screenWidthCoverage: 0.5 },
            { aspectRatio: [9, 6], screenWidthCoverage: 0.25 }
          )}
        />
        <div className={styles["text-wrapper"]}>
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className={styles["contributor"]}
            />
          )}
          <h3 className={`${styles["headline"]} ${hasTruncatedHeadline ? styles["truncated"] : ""} `}>
            {storyData.headline}
          </h3>
        </div>
      </div>
    </Link>
  );
};

BigStoryCard.propTypes = {
  cardWithImageZoom: PropTypes.bool,
  className: PropTypes.string,
  hasTruncatedHeadline: PropTypes.bool,
  story: PropTypes.shape({
    id: PropTypes.string,
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
    alternative: PropTypes.shape({
      home: PropTypes.shape({
        default: PropTypes.shape({
          headline: PropTypes.string
        })
      })
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

export default BigStoryCard;
