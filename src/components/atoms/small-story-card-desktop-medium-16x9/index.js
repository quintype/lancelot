import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import Contributor from "../contributor/index";
import "./styles.m.css";
import ResponsiveImageWithFallback from "../responsive-image-with-fallback";
import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

const SmallStoryCardDesktopMedium16x9 = ({
  story,
  className = "",
  cardWithImageZoom = true,
  hasTruncatedHeadline = true,
  eager
}) => {
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
      styleName={`read-more-link ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="base">
        <div styleName="image-container">
          <ResponsiveImageWithFallback
            styleName="image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            // isPremium={isPremium(story)}
            imgParams={{ auto: ["format", "compress"] }}
            eager={eager}
            sources={generateImageSources(
              { aspectRatio: [16, 9], screenWidthCoverage: 0.34 },
              { aspectRatio: [4, 3], screenWidthCoverage: 0.34 }
            )}
          />
        </div>
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

SmallStoryCardDesktopMedium16x9.propTypes = {
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
  }),
  eager: PropTypes.bool
};

export default SmallStoryCardDesktopMedium16x9;
