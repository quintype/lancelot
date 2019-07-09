import { generateCollection } from "../../fixture";

export default {
  collection: generateCollection({
    subCollections: [
      generateCollection({ stories: 5 }),
      generateCollection({ stories: 6 }),
      generateCollection({ stories: 5 }),
      generateCollection({ stories: 6 }),
      generateCollection({ stories: 4 })
    ]
  }),
  metadata: {
    read_more_text: "மேலும் படிக்க"
  }
};
