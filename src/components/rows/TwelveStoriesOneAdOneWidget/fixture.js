import { generateCollection } from "../../fixture";

export default {
  collection: generateCollection({
    stories: 6,
    subCollections: [
      generateCollection({ stories: 4 }),
      generateCollection({ stories: 5 }),
      generateCollection({ stories: 3 })
    ]
  })
};
