import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Contributor from "../Contributor/index";
import { getStoryData, generateImageSources } from "../../utils/utils";
import "./bigStoryCardAutoSlider.m.css";
import Headline from "../Headline";

const BigStoryCardAutoSlider = ({ story, cardWithImageZoom = true, className = "" }) => {
  const storyData = getStoryData(story);

  if (!storyData.headline || !story.url) {
    return null;
  }

  const contributorName = get(story, ["authors", 0, "name"], "");
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      className={`${"base"} ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <ResponsiveImageWithFallback
        styleName="slider-image-wrapper"
        slug={storyData.imageS3Key}
        metadata={storyData.imageMetadata}
        alt={storyData.imageCaption}
        imgParams={{ auto: ["format", "compress"] }}
        sources={generateImageSources(
          { aspectRatio: [2, 1], screenWidthCoverage: 1 },
          { aspectRatio: [2, 1], screenWidthCoverage: 1 }
        )}
      >
        <div styleName="text-area">
          <div styleName="text-wrapper">
            {contributorName && <Contributor name={contributorName} type={contributorRole} className="contributor" />}
            <Headline text={storyData.headline} headerType={9} headerLevel={3} className="headline highlight" />
            <div styleName="content mobile-hide">{story.subheadline}</div>
          </div>
        </div>
      </ResponsiveImageWithFallback>
    </Link>
  );
};

BigStoryCardAutoSlider.propTypes = {
  cardWithImageZoom: PropTypes.bool,
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

export default BigStoryCardAutoSlider;
