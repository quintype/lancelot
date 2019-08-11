import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";
// import { isPremium } from "../../../../isomorphic/data/story";

import "./storyCardResponsiveSame.m.css";

const StoryCardResponsiveSame = ({
  story,
  className = "",
  cardWithImageZoom = true,
  hasTruncatedHeadline = true,
  eager
}) => {
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
        styleName={"image-wrapper"}
        slug={storyData.imageS3Key}
        metadata={storyData.imageMetadata}
        alt={storyData.imageCaption}
        // isPremium={isPremium(story)}
        imgParams={{ auto: ["format", "compress"] }}
        eager={eager}
        sources={generateImageSources(
          { aspectRatio: [8, 5], screenWidthCoverage: 1 },
          { aspectRatio: [2, 1], screenWidthCoverage: 0.5 }
        )}
      />
      <div styleName="text-wrapper">
        {contributor && <Contributor name={contributor["name"]} type={contributorRole} className={"contributor"} />}
        <Headline
          text={storyData.headline}
          headlineType={4}
          headerLevel={3}
          className={`${hasTruncatedHeadline ? "truncated" : ""}`}
        />
      </div>
    </Link>
  );
};

StoryCardResponsiveSame.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
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
    slug: PropTypes.string.isRequired,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "hero-image-s3-key": PropTypes.string
  }),
  eager: PropTypes.bool
};

export default StoryCardResponsiveSame;
