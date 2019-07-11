import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardGradientBackground.m.css";

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
    <div styleName="base" className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}>
      <Link
        aria-label={`${"Read full story: "} ${storyData.headline}`}
        className={"link"}
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
            { aspectRatio: [9, 8], screenWidthCoverage: 0.75 },
            { aspectRatio: [9, 8], screenWidthCoverage: 0.25 }
          )}
        />
        <div styleName="content" style={sectionColor && { "--accent-color": sectionColor }}>
          <Headline
            text={storyData.headline}
            headerType={6}
            headerLevel={3}
            className={`${hasTruncatedHeadline ? "truncated" : ""}`}
          />
          {contributor && <Contributor name={contributor["name"]} type={contributorRole} className={"contributor"} />}
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
