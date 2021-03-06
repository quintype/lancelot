import React from "react";
import PropTypes from "prop-types";
import produce from "immer";

import { getPagePath } from "../../utils/collection";
import CollectionLink from "../../utils/generate-collection-link";
import BigStoryCard from "../../atoms/BigStoryCard";
import StoryStack from "../../atoms/StoryStack";
import ReadMoreLink from "../../atoms/ReadMoreLink";
import Headline from "../../atoms/Headline";

import "./twentyStory4c.m.css";

import { wrapCollectionLayout } from "@quintype/components";
import { getStoryHeadline } from "../../utils/utils";

const WrappedStoryStack = wrapCollectionLayout(StoryStack);

const mobileStoryCount = 3;
const desktopOddStoryCount = 5;
const desktopEvenStoryCount = 5;

const TwentyStory4C = ({ collection, metadata, accentColor }) => {
  const { name, items } = collection;
  let stacks = items
    .filter(item => item.type === "collection")
    .slice(0, 4)
    .map((collection, index) => {
      // const isReadMoreRequired =
      //   (index % 2 === 0 && collection.items.length > desktopOddStoryCount) ||
      //   (index % 2 === 1 && collection.items.length > desktopEvenStoryCount);

      collection = produce(collection, draft => {
        draft.items = draft.items
          .filter(({ story = {} }) => getStoryHeadline(story) != null && story.url != null)
          .slice(0, index % 2 === 0 ? desktopOddStoryCount : desktopEvenStoryCount);
      });
      return (
        <React.Fragment key={collection.id}>
          <CollectionLink collection={collection}>
            <Headline text={collection.name} headerType={2} headerLevel={2} className={"sub-collection-headline"} />
          </CollectionLink>
          <WrappedStoryStack mobileStoryCount={mobileStoryCount} collection={collection} />
          <div styleName="read-more-wrapper">
            {<ReadMoreLink href={collection.pagePath || getPagePath(collection)} text={metadata["read_more_text"]} />}
          </div>
        </React.Fragment>
      );
    });

  if (!stacks || !stacks.length) {
    return null;
  }

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container">
        {name && (
          <CollectionLink collection={collection}>
            <Headline
              text={name}
              headerType={1}
              headerLevel={2}
              headlineDesign={"crossline"}
              className={"collection-title"}
            />
          </CollectionLink>
        )}
        <div styleName="stack-grid">{stacks}</div>
      </div>
    </div>
  );
};

const Collection = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
  slug: PropTypes.string,
  readMoreText: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(BigStoryCard.propTypes))
});

TwentyStory4C.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    items: PropTypes.arrayOf(Collection)
  }),
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  })
};

export default TwentyStory4C;
