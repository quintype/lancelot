import { generateCollection } from "../../fixture";

export default generateCollection({
  subCollections: [
    generateCollection({ type: "trending", stories: 5 }),
    generateCollection({ type: "bundle", stories: 3 })
  ]
});
