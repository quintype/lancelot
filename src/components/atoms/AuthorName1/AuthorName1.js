import React from "react";
import PropTypes from "prop-types";

import "./authorName1.m.css";

export const AuthorName1 = ({ story }) => {
  const authorName = story.authors[0].name;
  return <h5 styleName="author-name">By {authorName}</h5>;
};

AuthorName1.propTypes = {
  story: PropTypes.object
};
