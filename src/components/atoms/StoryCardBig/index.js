import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import Contributor from "../Contributor";
import Headline from "../Headline";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardBig.m.css";

const StoryCardBig = ({ story, className = "", cardWithImageZoom = true }) => {
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
      <ResponsiveImageWithFallback
        styleName="image-wrapper"
        className="image-wrapper"
        slug={storyData.imageS3Key}
        metadata={storyData.imageMetadata}
        alt={storyData.imageCaption}
        imgParams={{ auto: ["format", "compress"] }}
        sources={generateImageSources(
          { aspectRatio: [16, 9], screenWidthCoverage: 1 },
          { aspectRatio: [16, 9], screenWidthCoverage: 0.7 }
        )}
      />
      <div className="text-wrapper">
        <Headline className="headline" headerLevel={3} headlineType={2} text={storyData.headline} />
        {contributor && (
          <Contributor name={contributor["name"]} type={contributorRole} contributorType={3} className="contributor" />
        )}
      </div>
    </Link>
  );
};

StoryCardBig.propTypes = {
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

export default StoryCardBig;
