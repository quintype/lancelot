import { get } from "lodash";
import { BREAK_POINT_MIN, BREAK_POINT_TABLET, MEDIA_TABLET, BREAK_POINT_MAX } from "./constant";
import produce from "immer";

export function getSubstring(string, limit) {
  let slicedString = string.substr(0, limit);
  return string.length > limit ? slicedString.substr(0, slicedString.lastIndexOf(" ")) + "..." : string;
}

export function copyToClipboard(text) {
  if (!document) {
    return null;
  }
  let dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  let copiedStatus = document.execCommand("copy");
  document.body.removeChild(dummy);
  return copiedStatus;
}

export const getStoryHeadline = story => {
  return get(story, ["alternative", "home", "default", "headline"]) || story.headline;
};

export const getStoryData = (story, isAlternativeImageFirst = true) => {
  let storyData = {
    imageS3Key: null
  };

  if (!story) {
    return storyData;
  }

  if (isAlternativeImageFirst) {
    storyData = getAlternativeData(story);
    if (!storyData.imageS3Key) {
      storyData = getMainData(story);
    }
  } else {
    storyData = getMainData(story);
    if (!storyData.imageS3Key) {
      storyData = getAlternativeData(story);
    }
  }
  return storyData;
};

const getAlternativeData = story => {
  let storyData = {};
  storyData.headline = getStoryHeadline(story);
  storyData.imageS3Key = get(story, ["alternative", "home", "default", "hero-image", "hero-image-s3-key"], null);
  storyData.imageCaption =
    get(story, ["alternative", "home", "default", "hero-image", "hero-image-caption"]) || storyData.headline;

  storyData.imageAttribution = get(
    story,
    ["alternative", "home", "default", "hero-image", "hero-image-attribution"],
    null
  );

  storyData.imageMetadata = get(story, ["alternative", "home", "default", "hero-image", "hero-image-metadata"], null);
  return storyData;
};

const getMainData = story => {
  let storyData = {};
  storyData.headline = getStoryHeadline(story);
  storyData.imageS3Key = get(story, ["hero-image-s3-key"], null);
  storyData.imageCaption = get(story, ["hero-image-caption"]) || storyData.headline;
  storyData.imageMetadata = story["hero-image-metadata"];
  storyData.imageAttribution = get(story, ["hero-image-attribution"], null);
  return storyData;
};

export const generateImageSources = (
  mobile = { aspectRatio: [1, 1], screenWidthCoverage: 1, srcSetCount: 3 },
  desktop = { aspectRatio: [1, 1], screenWidthCoverage: 1, srcSetCount: 3 }
) => {
  return [
    Object.assign(
      {},
      generateImageSource(desktop.screenWidthCoverage, BREAK_POINT_TABLET, BREAK_POINT_MAX, desktop.srcSetCount),
      {
        aspectRatio: desktop.aspectRatio,
        media: MEDIA_TABLET
      }
    ),
    Object.assign(
      {},
      generateImageSource(mobile.screenWidthCoverage, BREAK_POINT_MIN, BREAK_POINT_TABLET, mobile.srcSetCount),
      {
        aspectRatio: mobile.aspectRatio
      }
    )
  ];
};

const generateImageSource = (
  screenWidthCoverage = 1,
  min = BREAK_POINT_MIN,
  max = BREAK_POINT_MAX,
  srcSetCount = 3
) => {
  const minImageSize = min * screenWidthCoverage;
  const maxImageSize = max * screenWidthCoverage;
  const srcSetDiff = (maxImageSize - minImageSize) / srcSetCount;

  const widths = [];
  for (let i = 1; i <= srcSetCount; i++) {
    widths.push(parseInt(minImageSize + srcSetDiff * i));
  }

  const sizes =
    "(max-width: " + max + "px) " + parseInt(screenWidthCoverage * 100) + "vw, " + widths[widths.length - 1] + "px";

  let source = {
    defaultWidth: widths[Math.floor(widths.length / 2)],
    widths: widths,
    sizes: sizes
  };
  return source;
};

export function getSubscriptionURL(host, collection) {
  if (collection) {
    return `${host}?sid=` + collection.id;
  }

  return host;
}

export function getIssueUrlBySlug(slug) {
  if (!slug) return null;

  let tokens = slug.split("-");

  const date = new Date(tokens.splice(tokens.length - 3, 3).join("-"));
  const magazineUrl = tokens.join("");

  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const dateString = !isNaN(date.getTime())
    ? [date.getFullYear(), monthNames[date.getMonth()], date.getDate()].join("-")
    : "";

  return "/" + magazineUrl.replace("/", "") + "/" + dateString.replace("/", "");
}

const bulletImages = [
  /^dot_15\d+/,
  /^dot\d+(_\d+_)?/,
  /^red_(glossy_)?dot[\d_]*/i,
  /^bullet/,
  /^(rig(ht)?_)?arrow/,
  /^cross[\d_]*.jpg/,
  /^plus[\d_]*.jpg/,
  /^star[\d_]*.jpg/
];

export function removeBulletImagesFromStory(story) {
  return produce(story, draft => {
    if (draft && draft.cards) {
      draft.cards.forEach(updateCard);
    }
    return draft;
  });

  function updateCard(cardDraft) {
    if (!cardDraft["story-elements"]) {
      return;
    }
    cardDraft["story-elements"] = cardDraft["story-elements"].reduce(filterValidElements, []);
  }

  function filterValidElements(acc, element, index, storyElements) {
    if (element.type === "image" && isBulletImage(element["image-s3-key"])) {
      const nextElement = storyElements[index + 1];
      if (nextElement && nextElement.type === "text" && nextElement.text.startsWith("<p>")) {
        nextElement.text = nextElement.text.replace("<p>", "<p>• ");
      }
    } else {
      acc.push(element);
    }

    return acc;
  }

  function isBulletImage(s3Key) {
    const parts = s3Key.split("/");
    const imageName = parts[parts.length - 1];
    return bulletImages.find(regex => regex.test(imageName));
  }
}
