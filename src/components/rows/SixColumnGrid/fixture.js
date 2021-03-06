import { generateCollection } from "../../fixture";
import get from "lodash/get";

const items = generateCollection({
  stories: 7,
  itemMeta: {
    "associated-metadata": {
      label: "Sports",
      "page-no": "5"
    }
  }
})
  .items.concat(
    generateCollection({
      stories: 3,
      itemMeta: {
        "associated-metadata": {
          label: "Politics",
          "page-no": "5"
        }
      }
    }).items
  )
  .concat(
    generateCollection({
      stories: 2,
      itemMeta: {
        "associated-metadata": {
          label: "News",
          "page-no": "5"
        }
      }
    }).items
  )
  .concat(
    generateCollection({
      stories: 3,
      itemMeta: {
        "associated-metadata": {
          label: "Entertainment",
          "page-no": "5"
        }
      }
    }).items
  )
  .concat(
    generateCollection({
      stories: 4,
      itemMeta: {
        "associated-metadata": {
          label: "Story Label",
          "page-no": "5"
        }
      }
    }).items
  );

const getStoriesByLabel = collection => {
  return collection.items
    .filter(({ story = {} }) => story.headline && story.url)
    .reduce((storyMap, item) => {
      const label = get(item, ["associated-metadata", "label"], null);
      if (storyMap[label]) {
        storyMap[label].push(item.story);
      } else {
        storyMap[label] = [item.story];
      }
      return storyMap;
    }, {});
};

const getStoriesWithLabelOnFirst = storyMap => {
  let stories = [];
  Object.keys(storyMap).forEach(key => {
    const tempStories = storyMap[key];
    if (tempStories.length) {
      tempStories[0].label = key;
    }
    stories = stories.concat(tempStories);
  });
  return stories;
};
export default {
  stories: getStoriesWithLabelOnFirst(getStoriesByLabel(Object.assign({}, generateCollection(), { items: items })))
};
