import React from "react";
import PropTypes from "prop-types";
import assetify from "@quintype/framework/assetify";

function VikatanStoryFallback() {
  return (
    <img
      alt="Vikatan"
      className="qt-image fallback-image"
      width="100px"
      height="100px"
      src={assetify(require("./fallback-image.png"))}
    />
  );
}

VikatanStoryFallback.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default VikatanStoryFallback;
