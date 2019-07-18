import get from "lodash/get";

export function getParentSection(section) {
  const sections = get(global.qtConfig, ["sections"], []);
  return sections.find(s => section["parent-id"] === s.id);
}
