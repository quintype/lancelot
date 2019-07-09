import { get } from "lodash";

export function getType(collection = {}, config = {}) {
  if (!collection) {
    return null;
  }

  const section = getAssociatedSection(collection, config);
  if (section) {
    return "section";
  }

  const isMagazine = !!get(collection, ["metadata", "entities", "collectionEntities", "magazine", 0]);
  if (isMagazine) {
    return "magazine";
  }

  const collectionTypeFromMetadata = get(collection, ["metadata", "type", 0, "key"]);
  return collectionTypeFromMetadata || "default";
}

function getIssuePagePath(issue, magazineConfig) {
  return `${magazineConfig.url}/${getMagazineIssueDateFromSlug(issue.slug)}`;
}

export function getAssociatedSection(collection = {}, config = {}) {
  const associatedSection = get(collection, ["metadata", "section", 0], {});
  const sections = get(config, ["sections"], []);
  return sections.find(item => item.id === associatedSection.id);
}

export function getPagePath(collection = {}, config = {}) {
  const slug = get(collection, ["slug"], "#");
  const type = getType(collection, config);
  const urls = {
    bundle: () => `/bundle/${slug}`,
    section: () => {
      const section = getAssociatedSection(collection, config) || {};
      return section["section-url"] || "/";
    },
    magazine: getIssuePagePath,
    default: () => `/collection/${slug}`
  };
  return (urls[type] || urls.default)(collection, config);
}

function getMagazineIssueDateFromSlug(slug) {
  const strParts = slug.split("-");
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const [year, month, day] = strParts.slice(strParts.length - 3, strParts.length);
  return `${day}-${monthNames[month - 1]}-${year}`;
}
