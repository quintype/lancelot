import get from "lodash/get";
import { getParentSection } from "./section";

export function isPremium(story) {
  return get(story, ["access"], "public") === "subscription";
}

export function getAuthors(story) {
  return (get(story, ["authors"], []) || []).map(author => author.name).join();
}

export function getSections(story) {
  const parentSection = getParentSection(get(story, ["sections", 0], {}));
  const sections = [...story.sections] || [];
  if (parentSection) {
    sections.unshift(parentSection);
  }
  return sections.map(section => section["display-name"]).join();
}

export function getTags(story) {
  return (get(story, ["tags"], []) || []).map(tag => tag.name).join();
}

export function getCommentCount(metypeConfig) {
  if (!metypeConfig) {
    return 0;
  }
  const url = window.location.href;
  const pageId = global.btoa(url);
  return global
    .fetch(`${metypeConfig.host}/api/v1/accounts/${metypeConfig.accountId}/pages?page_ids=${pageId}`)
    .then(res => res.json())
    .then(data => get(data, ["0", "comments_count"], 0))
    .catch(() => 0);
}

export function getReaderType(userType) {
  switch (userType) {
    case "P":
      return "subscribed";
    case "F":
      return "registered";
    default:
      return "anonymous";
  }
}
