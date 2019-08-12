import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import Contributor from "../../atoms/Contributor";
import "./mainSliderCard.m.css";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import { getStoryData, generateImageSources } from "../../utils/utils";
import Icon from "../../atoms/Icon";
import Headline from "../Headline";

export default function MainsliderCard({ story, className = "", cardWithImageZoom = true }) {
  const storyData = getStoryData(story);

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  if (!storyData.headline || !story["url"]) {
    return null;
  }

  return (
    <div className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`} styleName="base">
      <Link
        aria-label={`${"Read full story: "} ${storyData.headline}`}
        className="link"
        href={externalLink || story.url}
        externalLink={externalLink}
      >
        <div className="image-container">
          <ResponsiveImageWithFallback
            className="image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            imgParams={{ auto: ["format", "compress"] }}
            sources={generateImageSources(
              { aspectRatio: [5, 3], screenWidthCoverage: 1 },
              { aspectRatio: [5, 3], screenWidthCoverage: 0.42 }
            )}
          >
            {story.engagement && story.engagement.total && (
              <span styleName="engagement-total">
                <Icon type={"speaker"} styleName="speaker-icon" />
                {story.engagement.total}
              </span>
            )}
          </ResponsiveImageWithFallback>
        </div>
        <div styleName="content">
          <Headline text={storyData.headline} headerLevel={3} headlineType={2} className="headline" />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className="contributor"
              contributorType={3}
            />
          )}
          {story.engagement && (
            <div styleName="engagement">
              {story.engagement.comments && (
                <span styleName="engagement-item">
                  <Icon type={"comment"} styleName="engagement-icon" />
                  {story.engagement.comments}
                </span>
              )}
              {story.engagement.shares && (
                <span styleName="engagement-item">
                  <Icon type={"share"} styleName="engagement-icon" />
                  {story.engagement.shares}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

MainsliderCard.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
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
    url: PropTypes.string,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string,
    engagement: PropTypes.shape({
      total: PropTypes.number,
      comments: PropTypes.string,
      shares: PropTypes.string
    })
  })
};
