import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardAspectRatioOne.m.css";

const StoryCardAspectRatioOne = ({ story, className = "", cardWithImageZoom = true }) => {
  const storyData = getStoryData(story);

  if (!storyData.headline || !story.url) {
    return null;
  }
  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      href={externalLink || story.url}
      externalLink={externalLink}
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
    >
      <div styleName="base">
        <div className="image-container">
          <ResponsiveImageWithFallback
            styleName="image-wrapper"
            className="image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            imgParams={{ auto: ["format", "compress"] }}
            sources={generateImageSources(
              { aspectRatio: [1, 1], screenWidthCoverage: 0.34 },
              { aspectRatio: [1, 1], screenWidthCoverage: 0.15 }
            )}
          />
        </div>
        <div>
          <Headline text={storyData.headline} headlineType={5} headerLevel={5} className="headline" />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              contributorType={3}
              type={contributorRole}
              iconColor="#4a4a4a"
              className={"contributor"}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

StoryCardAspectRatioOne.propTypes = {
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

export default StoryCardAspectRatioOne;
