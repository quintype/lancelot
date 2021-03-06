import React from "react";
import PropTypes from "prop-types";
import { ResponsiveImage, ResponsiveSource } from "@quintype/components";
import VikatanStoryFallback from "../../shared/icons/fallbackImage";
import omit from "lodash/omit";

const ResponsiveImageWithFallback = ({ className, children, sources, zoom = true, style, ...props }) => {
  let responsiveSources = [];
  let image = null;
  let originalSources = [...sources];
  if (sources && sources.length) {
    responsiveSources = originalSources
      .slice(0, -1)
      .map((source, index) => <ResponsiveSource key={index} {...omit(props, ["alt"])} {...source} />);
    image = originalSources[originalSources.length - 1];
  }
  return (
    <figure className={`${className} qt-figure`} style={style}>
      {props.slug ? (
        <picture className={`qt-image ${zoom ? "zoom-desktop" : ""}`}>
          {responsiveSources.length ? responsiveSources : null}
          <ResponsiveImage {...props} {...image} />
        </picture>
      ) : (
        <picture className={`qt-image ${zoom ? "zoom-desktop" : ""}`}>
          <VikatanStoryFallback />
        </picture>
      )}
      {children}
    </figure>
  );
};

ResponsiveImageWithFallback.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  zoom: PropTypes.bool,
  sources: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string,
  children: PropTypes.object
};

export default ResponsiveImageWithFallback;
