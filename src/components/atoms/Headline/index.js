import React from "react";
import get from "lodash/get";
import isNull from "lodash/isNull";
import isEmpty from "lodash/isEmpty";
import cx from "classnames";
import { string, number, func, object } from "prop-types";

import "./headline.m.css";

const Headline = ({ text, story, headerType = 1, headerLevel = 1, onClick, active = "", headlineLimit = 140 }) => {
  const HeaderTag = "h" + headerLevel;
  const isClosed = get(story, ["metadata", "is-closed"], false);
  const template = get(story, ["story-template"], null);
  const getLiveIcon = cx("", { "live-icon": template === "live-blog" && !isClosed });
  const storyHeadline = story && story.headline;
  const altHeadline = get(story, ["alternative", "home", "default", "headline"], null);
  const alternativeHeadline = isNull(altHeadline) || isEmpty(altHeadline) ? storyHeadline : altHeadline;

  return (
    <React.Fragment>
      <HeaderTag
        onClick={onClick}
        styleName={`headline headline-type-${headerType}`}
        className={`headline headline-type-${headerType} ${active}`}
      >
        {template === "live-blog" && !isClosed && <span styleName={`${getLiveIcon}`}>LIVE</span>}
        {alternativeHeadline || text}
      </HeaderTag>
    </React.Fragment>
  );
};

export default Headline;

Headline.propTypes = {
  text: string,
  headerType: number,
  headerLevel: number,
  onClick: func,
  active: string,
  headlineLimit: number,
  story: object
};
