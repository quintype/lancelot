import React from "react";
import PropTypes from "prop-types";
import Media from "react-media";
import { get } from "lodash";
import { Link } from "@quintype/components";
import ResponsiveImageWithFallback from "../../atoms/ResponsiveImageWithFallback";
import Contributor from "../../atoms/Contributor";

import { getStoryData, getStoryHeadline } from "../../utils/utils";

import "./customizedStoryCard.m.css";
import Headline from "../../atoms/Headline/index";

const CustomizableStoryCard = ({ story, mobile, desktop, className = "", style, hasTruncatedHeadline = true }) => {
  const headline = getStoryHeadline(story);

  if (!(headline && story.url)) {
    return null;
  }

  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          mobile ? (
            <StoryCard
              hasTruncatedHeadline={hasTruncatedHeadline}
              story={story}
              cardStyle={mobile}
              className={className}
              style={style}
              minMax={[360, 768]}
            />
          ) : null
        ) : desktop ? (
          <div className={className}>
            {/* this div is used to properly render story cards when the component is rendered server side */}
            <StoryCard story={story} hasTruncatedHeadline={hasTruncatedHeadline} cardStyle={desktop} style={style} />
          </div>
        ) : null
      }
    </Media>
  );
};

const StoryCard = ({
  story,
  cardStyle,
  className = "",
  cardWithImageZoom = true,
  style,
  minMax = [768, 1140],
  hasTruncatedHeadline = true
}) => {
  const storyData = getStoryData(story);
  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  const derivedParams = derivedProps(cardStyle);

  return (
    <Link
      className={`story-card-link ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      style={style}
      href={externalLink || story.url}
      externalLink={externalLink}
      aria-label={`${"Read full story: "} ${storyData.headline}`}
    >
      <div
        styleName={`base ${cardStyle.direction}`}
        style={{ display: "grid", gridTemplateColumns: derivedParams.gridTemplateColumns }}
      >
        {cardStyle.image.isVisible && (
          <div styleName="responsive-image-wrapper">
            <ResponsiveImageWithFallback
              className="image-wrapper"
              style={{ paddingTop: derivedParams.aspectRatio + "%" }}
              slug={storyData.imageS3Key}
              metadata={storyData.imageMetadata}
              alt={storyData.imageCaption}
              imgParams={{ auto: ["format", "compress"] }}
              sources={[generateSource(cardStyle, minMax[0], minMax[1], 3)]}
            />
          </div>
        )}
        <div
          styleName="text-wrapper"
          style={{ padding: cardStyle.textWrapperPadding || 0, borderBottom: cardStyle.borderBottom || "none" }}
        >
          {/* <h3
            styleName={` headline ${hasTruncatedHeadline ? "truncated" : ""} `}
            style={{
              fontFamily: "var(--" + cardStyle.headline.fontStyle + "-font-family)",
              fontSize: "var(--" + cardStyle.headline.fontStyle + "-font-size)",
              fontWeight: "var(--" + cardStyle.headline.fontStyle + "-font-weight)",
              lineHeight: "var(--" + cardStyle.headline.fontStyle + "-line-height)",
              letterSpacing: "var(--" + cardStyle.headline.fontStyle + "-letter-spacing)",
              maxHeight: `calc(2 * var(--${cardStyle.headline.fontStyle}-line-height) * 1em)`
            }}
          >
            {storyData.headline || ""}
          </h3> */}
          <Headline text={storyData.headline} className="headline" headlineType={5} headerLevel={3} />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor={cardStyle.contributor.iconColor || "#4a4a4a"}
              className={"contributor"}
              contributorType={3}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

const derivedProps = cardStyle => {
  let aspectRatio = 100;
  let gridTemplateColumns;
  if (cardStyle && cardStyle.image.isVisible) {
    aspectRatio *= cardStyle.image.aspectRatio[1] / cardStyle.image.aspectRatio[0];
    if (cardStyle.direction === "horizontal") {
      gridTemplateColumns = cardStyle.imageToHeadlineRatio[0] + "fr " + cardStyle.imageToHeadlineRatio[1] + "fr ";
    } else {
      gridTemplateColumns = "1fr";
    }
  }
  return {
    aspectRatio: aspectRatio,
    gridTemplateColumns: gridTemplateColumns
  };
};

const generateSource = (obj, min, max, srcSetCount) => {
  if (srcSetCount < 1) srcSetCount = 1;
  if (!obj.containerWidthCoverage) obj.containerWidthCoverage = 1;
  let imageToHeadlineRatio = 1;
  if (obj.direction === "horizontal") {
    imageToHeadlineRatio = obj.imageToHeadlineRatio[0] / (obj.imageToHeadlineRatio[0] + obj.imageToHeadlineRatio[1]);
  }
  const minImageSize = min * imageToHeadlineRatio * obj.containerWidthCoverage;
  const maxImageSize = max * imageToHeadlineRatio * obj.containerWidthCoverage;
  const srcSetDiff = (maxImageSize - minImageSize) / srcSetCount;
  const widths = [];
  for (let i = 1; i <= srcSetCount; i++) {
    widths.push(parseInt(minImageSize + srcSetDiff * i));
  }
  const sizes =
    "(max-width: " +
    max +
    "px) " +
    parseInt(imageToHeadlineRatio * obj.containerWidthCoverage * 100) +
    "vw, " +
    widths[widths.length - 1] +
    "px";

  let source = {
    aspectRatio: obj.image.aspectRatio,
    defaultWidth: widths[Math.floor(widths.length / 2)],
    widths: widths,
    sizes: sizes
  };
  return source;
};

const cardStyle = PropTypes.shape({
  image: PropTypes.shape({
    isVisible: PropTypes.bool,
    aspectRatio: PropTypes.arrayOf(PropTypes.number)
  }),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  imageToHeadlineRatio: PropTypes.arrayOf(PropTypes.number),
  containerWidthCoverage: PropTypes.number,
  contributor: PropTypes.shape({
    fontStyle: PropTypes.string,
    iconColor: PropTypes.string,
    position: PropTypes.string
  }),
  headline: PropTypes.shape({
    fontStyle: PropTypes.string
  }),
  textWrapperPadding: PropTypes.string,
  borderBottom: PropTypes.string
});

CustomizableStoryCard.propTypes = {
  hasTruncatedHeadline: PropTypes.bool,
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  style: PropTypes.object,
  mobile: cardStyle,
  desktop: cardStyle,
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

StoryCard.propTypes = {
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
  story: CustomizableStoryCard.propTypes.story,
  cardStyle: cardStyle,
  className: CustomizableStoryCard.propTypes.className,
  style: CustomizableStoryCard.propTypes.style,
  minMax: PropTypes.arrayOf(PropTypes.number)
};

export default CustomizableStoryCard;
