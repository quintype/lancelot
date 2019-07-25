import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import "./collectionBundleItem.m.css";
import { getPagePath } from "../../utils/collection";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import { generateImageSources } from "../../utils/utils";
import Headline from "../Headline";

const CollectionBundleItem = ({ collection, cardWithImageZoom = true, className = "" }) => {
  const headline = get(collection, ["name"], "");
  const imageCaption = get(collection, ["metadata", "cover-image", "caption"]) || headline;
  const slug = get(collection, ["slug"], "");
  const coverImageS3Key = get(collection, ["metadata", "cover-image", "cover-image-s3-key"], "");
  const coverImageMetaData = get(collection, ["metadata", "cover-image", "cover-image-metadata"], "");

  if (!(headline && slug)) {
    return null;
  }
  return (
    <Link
      aria-label="Magazine"
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
      styleName="read-more-link"
      href={getPagePath(collection)}
    >
      <ResponsiveImageWithFallback
        className="image-wrapper"
        slug={coverImageS3Key}
        metadata={coverImageMetaData}
        alt={imageCaption}
        imgParams={{ auto: ["format", "compress"] }}
        sources={generateImageSources(
          { aspectRatio: [27, 8], screenWidthCoverage: 0.6 },
          { aspectRatio: [27, 8], screenWidthCoverage: 0.3 }
        )}
      />
      <div styleName="content-wrap">
        <Headline text={headline} headerLevel={3} headerType={7} className="headline" />
        {collection.summary && <p styleName="summary">{collection.summary}</p>}
      </div>
    </Link>
  );
};

CollectionBundleItem.propTypes = {
  cardWithImageZoom: PropTypes.bool,
  className: PropTypes.string,
  collection: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      "cover-image-metadata": PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number
      }),
      "cover-image-s3-key": PropTypes.string,
      caption: PropTypes.string
    })
  })
};

export default CollectionBundleItem;
