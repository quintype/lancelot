import React from "react";
import PropTypes from "prop-types";
import { wrapCollectionLayout } from "@quintype/components";
// import { DfpAd } from "../../atoms/dfp-ad";
import { getType } from "../../utils/collection";
import SliderMain from "../../atoms/SliderMain";
import SmallStoryCard from "../../atoms/SmallStoryCard";
import SmallStoryCardDesktopMedium from "../../atoms/SmallStoryCardDesktopMedium";
import SmallStoryCardDesktopVertical from "../../atoms/SmallStoryCardDesktopVertical";
import CollectionBundleItem from "../../atoms/CollectionBundleItem";
import TrendingStories from "../../atoms/TrendingStories";

import "./mainRow.m.css";

const WrappedTrendingStories = wrapCollectionLayout(TrendingStories);

const SliderCollectionStoriesBundle = ({ stories, collections }) => {
  return (
    <div styleName="slider-collection-stories-bundle">
      <div styleName="slider-stories-wrap">
        <SliderMain stories={stories.slice(0, 5)} />
      </div>
      <div styleName="two-stories-wrap">
        {stories &&
          stories
            .slice(5, 7)
            .map(story => story && <SmallStoryCard key={story.id} story={story} styleName="story-card" />)}
      </div>
      {collections && (
        <div styleName="collections-wrap">
          {collections
            .slice(0, 3)
            .map(
              collection =>
                collection && (
                  <CollectionBundleItem key={collection.id} collection={collection} styleName="collection-item" />
                )
            )}
        </div>
      )}
    </div>
  );
};

SliderCollectionStoriesBundle.propTypes = {
  stories: SliderMain.propTypes.stories,
  collections: PropTypes.arrayOf(CollectionBundleItem.propTypes.collection)
};

const FiveStories = ({ stories }) => {
  return (
    <div styleName="five-story-container">
      {stories &&
        stories
          .slice(0, 1)
          .map(
            story =>
              story && (
                <SmallStoryCardDesktopMedium
                  key={story.id}
                  story={story}
                  styleName="five-cards-item story-card-medium"
                />
              )
          )}
      {stories &&
        stories
          .slice(1, 5)
          .map(
            story =>
              story && (
                <SmallStoryCardDesktopVertical
                  key={story.id}
                  story={story}
                  styleName="five-cards-item story-card-small"
                />
              )
          )}
    </div>
  );
};

FiveStories.propTypes = {
  stories: SliderMain.propTypes.stories
};

const MainRow = ({ collection, accentColor, pagetype = "" }) => {
  if (!collection.items) {
    return null;
  }
  const stories = collection.items.filter(item => item && item.type === "story").map(item => item.story);
  const collections = collection.items.filter(item => item && item.type === "collection");

  const collectionBundle = collections.filter(collection => getType(collection) === "bundle").slice(0, 3);
  const trendingCollection =
    collections.filter(collection => getType(collection) === "trending").slice(0, 1)[0] || null;

  return (
    <div styleName="main-row" style={accentColor && { "--accent-color": accentColor }}>
      <div>
        <div className="row">
          {stories && stories.length > 0 && (
            <SliderCollectionStoriesBundle stories={stories.slice(0, 7)} collections={collectionBundle} />
          )}
          <div className="widget300xauto">
            <div>DFPAD</div>
          </div>
          <WrappedTrendingStories collection={trendingCollection} styleName="trending-stories" />
          {stories && stories.length > 7 && <FiveStories stories={stories.slice(7, 12)} />}
          <div className="widget300xauto-targetted">
            <div>DFPAD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainRow.propTypes = {
  accentColor: PropTypes.string,
  collection: CollectionBundleItem.propTypes.collection,
  pagetype: PropTypes.string
};

export default MainRow;
