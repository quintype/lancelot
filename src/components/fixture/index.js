import configJSON from "./config.json";
import { dummyStory } from "./dummyStory";

export const generateConfig = () => configJSON;

export const generateStory = (data = {}) => {
  return Object.assign(dummyStory, data);
};

export const generateCollection = ({ stories = 0, subCollections = [], type = null, itemMeta = {} } = {}) => {
  let typeArr = [];
  if (type) {
    typeArr.push({ key: type, name: type });
  }
  let items = subCollections;
  Array(stories)
    .fill({ type: "story", ...itemMeta })
    .forEach((item, index) => {
      const story = generateStory();
      let itm = Object.assign({}, item, { id: story.id, story });
      items.push(itm);
    });
  return {
    type: "collection",
    name: "বিনোদন",
    id: parseInt(Math.random() * 10 ** 10),
    slug: "/collection-slug",
    pagePath: "/collection/collection-slug",
    metadata: {
      "issue-date": "2015-12-31T18:30:00.000Z",
      "issue-id": parseInt(Math.random() * 10 ** 4),
      "cover-image": {
        "cover-image-url":
          "https://thumbor-stg.assettype.com/vikatan%2F2019-01%2F9f9759b3-1ace-47f2-ba38-c2218d6bf2e9%2F143184_thumb.jpg",
        "cover-image-metadata": {
          width: 600,
          height: 600,
          "mime-type": "image/jpeg",
          "focus-point": [355, 204]
        },
        "cover-image-s3-key": "vikatan/2019-01/f0b702ac-bfd1-4dd6-8e33-52cbb0bb3153/143203_thumb.jpg",
        caption: "Some Politician"
      },
      magazine: {
        id: 2,
        name: "Junior Vikatan"
      },
      type: typeArr,
      snapshot: {
        body:
          "<p>This is the snapshot body</p>" +
          "<p>This is the snapshot body - This is the snapshot body description1</p>" +
          "<p>This is the snapshot body - This is the snapshot body description2</p>" +
          "<p>This is the snapshot body - This is the snapshot body description3</p>" +
          "<p>This is the snapshot body - This is the snapshot body description4</p>"
      }
    },
    summary: "This is a collection concerned with politics",
    items: items
  };
};

export const generateCollections = (count = 0) => {
  let collections = [];
  Array(count)
    .fill(0)
    .forEach(() => {
      collections.push(generateCollection());
    });
  return collections;
};

export const generateSubMenu = () => {
  return {
    items: [
      {
        "tag-name": null,
        "item-id": 22564,
        rank: 5493,
        title: "Link 1",
        "item-type": "section",
        "section-slug": "gurupeyarchi",
        "tag-slug": null,
        id: 5493,
        "parent-id": null,
        url: "https://vikatan-web.qtstage.io/section/gurupeyarchi",
        "section-name": "அமெரிக்காவில்",
        data: {
          color: "#c7c7c7"
        },
        items: [
          {
            "tag-name": null,
            "item-id": 22384,
            rank: 5494,
            title: "Link 2",
            "item-type": "section",
            "section-slug": "cinema",
            "tag-slug": null,
            id: 5494,
            "parent-id": 5493,
            url: "https://vikatan-web.qtstage.io/section/cinema",
            "section-name": "அமெரிக்காவில்",
            data: {
              color: "#f7f7f7"
            }
          },
          {
            "tag-name": null,
            "item-id": 23089,
            rank: 5504,
            title: "Child 1",
            "item-type": "section",
            "section-slug": "dry6feb2019",
            "tag-slug": null,
            id: 5504,
            "parent-id": 5493,
            url: "https://vikatan-web.qtstage.io/section/dry6feb2019",
            "section-name": "அமெரிக்காவில்",
            data: {
              color: "#000000"
            }
          }
        ]
      }
    ]
  };
};
