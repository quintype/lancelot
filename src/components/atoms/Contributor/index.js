import React from "react";
import PropTypes from "prop-types";
import { Link, WithHostUrl } from "@quintype/components";

import "./contributor.m.css";

const Contributor = ({ path, type, name, imgUrl, className = "", contributorType = 1, config = {} }) => {
  if (!name) {
    return null;
  }
  type = type && type.replace(" ", "-").toLowerCase();
  return path && !config.cinemaMode ? (
    <WithHostUrl>
      {({ primaryHostUrl }) => (
        <Link aria-label="Author" href={`${primaryHostUrl}${path}`} className={className} styleName="base">
          {imgUrl && <img src={imgUrl} />}
          <span styleName="contributor-name">{name}</span>
        </Link>
      )}
    </WithHostUrl>
  ) : (
    <div
      styleName={` base contributor-type-${contributorType}`}
      className={`${className} contributor-type-${contributorType}`}
    >
      <span styleName="contributor-name" className="contributor-name">
        {name}
      </span>
    </div>
  );
};

Contributor.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  imgUrl: PropTypes.string,
  className: PropTypes.string,
  contributorType: PropTypes.number,
  type: PropTypes.string,
  config: PropTypes.shape({
    cinemaMode: PropTypes.bool
  })
};

export default Contributor;
