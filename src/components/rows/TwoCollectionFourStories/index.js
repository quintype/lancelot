import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import { get } from "lodash";
import StoryCardHeadlineOverlay from "../../atoms/StoryCardHeadlineOverlay";
import StoryCardAspectRatioOne from "../../atoms/StoryCardAspectRatioOne";
import "./twoCollectionFourStories.m.css";
import { wrapCollectionLayout } from "@quintype/components";

const contentListForMobile = (items, cix) => {
  const orderedItems = cix === 0 ? [...items].reverse() : [...items];
  return orderedItems.map((item, idx) => {
    if (idx === 0) {
      return <StoryCardHeadlineOverlay className={"marginy-2"} key={item.id} story={item.story} />;
    } else if (idx === 1) {
      return <StoryCardAspectRatioOne className={"marginy-2"} key={item.id} story={item.story} />;
    }
  });
};

const contentListForDesktop = (items, cix) => {
  return items.map((item, idx) => {
    if (items.length === 1) {
      return <StoryCardHeadlineOverlay className={"marginy-2"} key={item.id} story={item.story} />;
    } else {
      if ((cix === 0 && idx === 0) || (cix === 1 && idx === 1)) {
        return <StoryCardAspectRatioOne className={"marginy-2"} key={item.id} story={item.story} />;
      } else if ((cix === 0 && idx === 1) || (cix === 1 && idx === 0)) {
        return <StoryCardHeadlineOverlay className={"marginy-2"} key={item.id} story={item.story} />;
      }
    }
  });
};

const TwoCollectionFourStories = ({ collection, accentColor }) => {
  const subCollections = get(collection, ["items"], [])
    .filter(item => item.type === "collection" && item.items.filter(item => item.type === "story").length > 0)
    .slice(0, 2);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container" styleName="two-collection-four-stories">
        {subCollections.map((subCollection, cix) => (
          <WrappedRenderSubCollection key={collection.id} collection={subCollection} cix={cix} />
        ))}
      </div>
    </div>
  );
};

const RenderSubCollection = ({ collection, cix }) => {
  const { name, items } = collection;
  const displayItems = items.slice(0, 2);
  return (
    <div styleName={`${"story-collection-" + cix}`} key={"ctn-" + cix}>
      <div styleName="wrap">
        {displayItems && displayItems.length ? (
          <React.Fragment>
            <div className="hidden-desktop">
              <CollectionLink collection={collection}>
                <span styleName="collection-name" key="col-name">
                  {name}
                </span>
              </CollectionLink>
              {contentListForMobile(displayItems, cix)}
            </div>
            <div className="show-tablet-and-desktop">
              {cix === 0 ? (
                <CollectionLink collection={collection}>
                  <span styleName="collection-name collection-name-top" key="col-name">
                    {name}
                  </span>
                </CollectionLink>
              ) : null}
              {contentListForDesktop(displayItems, cix)}
              {cix === 1 ? (
                <CollectionLink collection={collection}>
                  <span styleName="collection-name collection-name-bottom" key="col-name">
                    {name}
                  </span>
                </CollectionLink>
              ) : null}
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

const WrappedRenderSubCollection = wrapCollectionLayout(RenderSubCollection);

let collection = PropTypes.shape({
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  slug: PropTypes.string
});

collection.items = PropTypes.arrayOf(collection);

RenderSubCollection.propTypes = {
  collection: collection,
  cix: PropTypes.number
};

TwoCollectionFourStories.propTypes = {
  accentColor: PropTypes.string,
  collection: collection
};

export default TwoCollectionFourStories;
