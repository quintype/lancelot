import { generateCollection } from "../../fixture";

export default generateCollection({
  stories: 12,
  subCollections: [
    generateCollection({ type: "bundle" }),
    generateCollection({ type: "trending", stories: 5 }),
    generateCollection({ type: "bundle" }),
    generateCollection({ type: "bundle" }),
    generateCollection({ type: "widget", stories: 2 }),
    generateCollection({ type: "bundle" })
  ]
});
