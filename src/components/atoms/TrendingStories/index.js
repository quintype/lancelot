import React from "react";
import PropTypes from "prop-types";
import { Link } from "@quintype/components";

import "./trendingStories.m.css";
import { getStoryHeadline } from "../../utils/utils";

export default function TrendingStories({ collection, className = "", numberOfStories = 4 }) {
  if (!collection || !collection.items) {
    return null;
  }
  const stories = collection.items.map(item => item.story);
  return (
    <div className={`${"numbered-items-wrap"} ${className}`} styleName="numbered-items-wrap">
      {collection.slug && collection.name && (
        <h2 className="numbered-items-title" styleName="numbered-items-title">
          <Link aria-label={`"Read more "${collection.name}`} href={collection.pagePath || collection.slug}>
            {collection.name}
          </Link>
        </h2>
      )}
      <ul className="numbered-items" styleName="numbered-items">
        {stories
          .filter(story => story && story.url && getStoryHeadline(story))
          .slice(0, numberOfStories)
          .map(story => (
            <li key={story.id} className="numbered-item" styleName="numbered-item">
              <Link
                aria-label={`${"Read full story: "} ${getStoryHeadline(story)}`}
                href={story.url}
                className="numbered-item-link"
                styleName="numbered-item-link"
              >
                {getStoryHeadline(story)}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

TrendingStories.propTypes = {
  className: PropTypes.string,
  numberOfStories: PropTypes.number,
  collection: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    pagePath: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        headline: PropTypes.string.number,
        slug: PropTypes.string.number,
        id: PropTypes.string.number
      })
    )
  }),
  story: PropTypes.shape({
    url: PropTypes.string
  })
};
