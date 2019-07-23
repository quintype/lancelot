import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor";

import { getStoryData, generateImageSources } from "../../utils/utils";
import Headline from "../Headline";
import "./focusedCard.m.css";

export const FocusedCard = ({ story, className = "", cardWithImageZoom = true }) => {
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
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      styleName="read-more-link"
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
            { aspectRatio: [4, 3], screenWidthCoverage: 0.75 },
            { aspectRatio: [4, 3], screenWidthCoverage: 0.3 }
          )}
        />
        <div styleName="text-wrapper">
          <Headline
            text={storyData.headline}
            headerLevel={3}
            headerType={8}
            className="headline highlight"
            headlineDesign={"withbackground"}
          />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className="contributor"
            />
          )}
          {/* <PremiumBadge isPremium={isPremium(story)} positionClass="bottomLeft" /> */}
        </div>
      </div>
    </Link>
  );
};

FocusedCard.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
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

export default FocusedCard;
