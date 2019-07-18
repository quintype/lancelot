import { generateCollection } from "../../fixture";
import { get } from "lodash";

const items = generateCollection({
  stories: 7,
  itemMeta: {
    "associated-metadata": {
      label: "டெக்னோ",
      "page-no": "5"
    }
  }
})
  .items.concat(
    generateCollection({
      stories: 3,
      itemMeta: {
        "associated-metadata": {
          label: "க்ரைம்",
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
          label: "டெக்னோ2",
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
          label: "க்ரைம்1",
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
