import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../Contributor/index";
import Headline from "../Headline";

import { getStoryHeadline } from "../../utils/utils";

import "./smallStoryCardNoImageNumber.m.css";

const SmallStoryCardNoImageNumber = ({ story, className = "", index }) => {
  const headline = getStoryHeadline(story);

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  if (!(headline && story.url)) {
    return null;
  }

  return (
    <Link
      aria-label={`${"Read full story: "} ${headline}`}
      className={`${className}`}
      styleName="base"
      href={externalLink || story.url}
      externalLink={externalLink}
    >
      <div styleName="text-wrapper" className="text-wrapper">
        <div styleName="number-frmt" className="number-frmt">
          {index}
        </div>
        <div styleName="card-content" className="card-content">
          <Headline text={headline} headlineType={4} headerLevel={3} className="headline" />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              contributorType={3}
              iconHeight={13}
              iconWidth={13}
              iconColor="#4a4a4a"
              className="contributor"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

SmallStoryCardNoImageNumber.propTypes = {
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
    metadata: PropTypes.shape({
      "reference-url": PropTypes.string
    }),
    alternative: PropTypes.shape({
      home: PropTypes.shape({
        default: PropTypes.shape({
          headline: PropTypes.string
        })
      })
    }),
    slug: PropTypes.string.isRequired,
    url: PropTypes.string
  }),
  className: PropTypes.string,
  index: PropTypes.number
};

export default SmallStoryCardNoImageNumber;
