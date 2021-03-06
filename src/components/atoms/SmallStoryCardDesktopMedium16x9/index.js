import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../Contributor/index";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./smallStoryCardDesktopMedium16x9.m.css";

const SmallStoryCardDesktopMedium16x9 = ({ story, className = "", cardWithImageZoom = true, eager }) => {
  const storyData = getStoryData(story);
  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      styleName="read-more-link"
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="base">
        <div>
          <ResponsiveImageWithFallback
            styleName="image-wrapper"
            className="image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            imgParams={{ auto: ["format", "compress"] }}
            eager={eager}
            sources={generateImageSources(
              { aspectRatio: [16, 9], screenWidthCoverage: 0.34 },
              { aspectRatio: [4, 3], screenWidthCoverage: 0.34 }
            )}
          />
        </div>
        <div>
          <Headline text={storyData.headline} headerLevel={3} headlineType={3} />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              contributorType={3}
              iconColor="#4a4a4a"
              className="contributor"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

SmallStoryCardDesktopMedium16x9.propTypes = {
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
  }),
  eager: PropTypes.bool
};

export default SmallStoryCardDesktopMedium16x9;
