import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./bigStoryCardDifferentAspect.m.css";

const BigStoryCardDifferentAspect = ({
  story,
  className = "",
  cardWithImageZoom = true,
  hasTruncatedHeadline = true
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
      className={`read-more-link ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
      aria-label={`${"Read full story: "} ${storyData.headline}`}
    >
      <div styleName="base">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [3, 2], screenWidthCoverage: 1 },
            { aspectRatio: [2, 1], screenWidthCoverage: 0.34 }
          )}
        />
        <div styleName="text-wrapper">
          <Headline
            text={storyData.headline}
            headlineType={3}
            headerLevel={3}
            className={`headline ${hasTruncatedHeadline ? "truncated" : ""} `}
          />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              contributorType={3}
              className={"contributor"}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

BigStoryCardDifferentAspect.propTypes = {
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
  className: PropTypes.string,
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

export default BigStoryCardDifferentAspect;
