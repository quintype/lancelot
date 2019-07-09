import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import Contributor from "../Contributor/index";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import "./smallStoryCard.m.css";

const SmallStoryCard = ({ story, className = "", cardWithImageZoom = true, hasTruncatedHeadline = true }) => {
  const storyData = getStoryData(story);
  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      className={`read-more-link" ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="base">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          // isPremium={isPremium(story)}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [4, 3], screenWidthCoverage: 0.34 },
            { aspectRatio: [4, 3], screenWidthCoverage: 0.12 }
          )}
        />
        <div styleName="text-wrapper">
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              styleName="contributor"
            />
          )}
          <h3 styleName={`headline ${hasTruncatedHeadline ? "truncated" : ""} `}>{storyData.headline}</h3>
        </div>
      </div>
    </Link>
  );
};

SmallStoryCard.propTypes = {
  hasTruncatedHeadline: PropTypes.bool,
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
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

export default SmallStoryCard;
