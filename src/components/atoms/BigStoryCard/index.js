import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor/index";
import Headline from "../Headline";

import "./bigStoryCard.m.css";
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
      className={`read-more-link ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="base">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [9, 6], screenWidthCoverage: 0.5 },
            { aspectRatio: [9, 6], screenWidthCoverage: 0.25 }
          )}
        />
        <div styleName="text-wrapper">
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className={"contributor"}
            />
          )}
          <Headline
            text={storyData.headline}
            headerType={3}
            headerLevel={3}
            className={`${hasTruncatedHeadline ? "truncated" : ""}`}
          />
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
