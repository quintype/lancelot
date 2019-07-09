import { generateCollection } from "../../fixture";

export default {
  bigStory: true,
  mobileStoryCount: 3,
  stories: generateCollection({ stories: 7 }).items.map(item => item.story)
};
