import { get } from "lodash";

export function getParentSection(section) {
  const sections = get(global.qtConfig, ["sections"], []);
  return sections.find(s => section["parent-id"] === s.id);
}
