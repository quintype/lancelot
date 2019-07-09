import React from "react";
import PropTypes from "prop-types";
import { Link, WithHostUrl } from "@quintype/components";
import { Icon } from "../Icon";

import styles from "./contributor.m.css";

const Contributor = ({ path, type, name, imgUrl, className = "", config = {} }) => {
  if (!name) {
    return null;
  }
  const ContributorRoles = {
    // Mapping for the contributor roles and the icons is done here.
    // Comma separated key value pairs
    // "art-director": "art-director"
  };
  type = type && type.replace(" ", "-").toLowerCase();
  const iconType = type && ContributorRoles[type] ? ContributorRoles[type] : "author";
  return path && !config.cinemaMode ? (
    <WithHostUrl>
      {({ primaryHostUrl }) => (
        <Link aria-label="Author" href={`${primaryHostUrl}${path}`} className={`${styles["base"]} ${className}`}>
          {imgUrl && <img src={imgUrl} />}
          {iconType && <Icon type={iconType} className={styles["icon"]} />}
          <span className={styles["contributor-name"]}>{name}</span>
        </Link>
      )}
    </WithHostUrl>
  ) : (
    <div className={`${styles["base"]} ${className}`}>
      {imgUrl && <img src={imgUrl} />}
      {iconType && <Icon type={iconType} className={styles["icon"]} />}
      <span className={styles["contributor-name"]}>{name}</span>
    </div>
  );
};

Contributor.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  imgUrl: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  config: PropTypes.shape({
    cinemaMode: PropTypes.bool
  })
};

export default Contributor;
