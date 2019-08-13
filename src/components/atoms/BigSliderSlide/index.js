import React from "react";
import PropTypes from "prop-types";
import { Link } from "@quintype/components";
import get from "lodash/get";
import hexToRgba from "hex-to-rgba";

import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./bigSliderSlide.m.css";

const BigSliderSlide = ({ story, className = "", cardWithImageZoom = true, accentColor }) => {
  const storyData = getStoryData(story);
  if (!storyData.headline || !story.url) {
    return null;
  }

  let rgba = "";
  if (accentColor) {
    rgba = hexToRgba(accentColor, 0.8);
  }
  const sectionColor = rgba
    ? {
        backgroundColor: rgba,
        boxShadow: "10px 0 0 " + rgba + ", -10px 0 0 " + rgba
      }
    : {};

  const contributorName = get(story, ["authors", 0, "name"], "");
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);
  return (
    <div className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`} styleName="base">
      <div styleName="story-wrapper" className="story-wrapper">
        <Link
          aria-label={`${"Read full story: "} ${storyData.headline}`}
          href={externalLink || story.url}
          externalLink={externalLink}
        >
          <ResponsiveImageWithFallback
            styleName="slider-image-wrapper"
            className="slider-image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            imgParams={{ auto: ["format", "compress"] }}
            sources={generateImageSources(
              { aspectRatio: [1, 1], screenWidthCoverage: 0.7 },
              { aspectRatio: [1, 1], screenWidthCoverage: 0.6 }
            )}
          />
        </Link>
        <div styleName="text-wrapper" className="text-wrapper">
          <Link
            aria-label={`${"Read full story: "} ${storyData.headline}`}
            href={externalLink || story.url}
            externalLink={externalLink}
            styleName="flex-headline"
            className="flex-headline"
          >
            <Headline
              text={storyData.headline}
              className="headline highlight"
              style={sectionColor}
              headlineDesign={"withbackground"}
            />
          </Link>
          {contributorName && (
            <Contributor name={contributorName} type={contributorRole} contributorType={3} className="contributor" />
          )}
          <p styleName="mobile-hide content" className="mobile-hide content">
            {story.subheadline}
          </p>
        </div>
      </div>
    </div>
  );
};

BigSliderSlide.propTypes = {
  cardWithImageZoom: PropTypes.bool,
  className: PropTypes.string,
  accentColor: PropTypes.string,
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
    subheadline: PropTypes.string,
    alternative: PropTypes.shape({
      home: PropTypes.shape({
        default: PropTypes.shape({
          headline: PropTypes.string
        })
      })
    }),
    slug: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        "display-name": PropTypes.string,
        color: PropTypes.string
      })
    ),
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

export default BigSliderSlide;
