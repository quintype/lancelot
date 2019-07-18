import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor/index";
import { getStoryData, generateImageSources } from "../../utils/utils";
import Headline from "../Headline";
import "./slideBigStoryCard.m.css";

const SlideBigStoryCard = ({ story, className = "", cardWithImageZoom = true, hasTruncatedHeadline = true }) => {
  const storyData = getStoryData(story);

  if (!(storyData.headline && story.url)) {
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
      <div styleName="base">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [3, 2], screenWidthCoverage: 1 },
            { aspectRatio: [3, 2], screenWidthCoverage: 0.67 }
          )}
        />
        <div styleName="text-wrapper">
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className="contributor"
            />
          )}
          <Headline
            text={storyData.headline}
            headerType={1}
            headerLevel={3}
            styleName="headline"
            className={`${hasTruncatedHeadline ? "truncated" : ""}`}
          />
        </div>
      </div>
    </Link>
  );
};

SlideBigStoryCard.propTypes = {
  className: PropTypes.string,
  hasTruncatedHeadline: PropTypes.bool,
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
    "hero-image-caption": PropTypes.string,
    url: PropTypes.string
  })
};

export default SlideBigStoryCard;