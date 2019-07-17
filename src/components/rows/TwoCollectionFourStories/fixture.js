import { generateCollection } from "../../fixture";

export default {
  collection: generateCollection({
    subCollections: [
      generateCollection({ stories: 2 }),
      generateCollection({ stories: 3 }),
      generateCollection({ stories: 1 })
    ]
  }),
  metadata: {
    read_more_text: "மேலும் படிக்க"
  }
};
