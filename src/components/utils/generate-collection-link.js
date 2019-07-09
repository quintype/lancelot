import { getPagePath } from "../utils/collection";
import { Link } from "@quintype/components";
import React from "react";
import PropTypes from "prop-types";

const CollectionLink = ({ collection, children, className }) => {
  const pagePath = collection.pagePath || getPagePath(collection);
  return (
    <Link className={className} href={pagePath} aria-label={collection.name}>
      {children}
    </Link>
  );
};

CollectionLink.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      "cover-image-metadata": PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number
      }),
      "cover-image-s3-key": PropTypes.string
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        story: PropTypes.shape({
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
          "hero-image-s3-key": PropTypes.string,
          "hero-image-caption": PropTypes.string
        })
      })
    )
  }),
  children: PropTypes.element,
  className: PropTypes.string
};

export default CollectionLink;
