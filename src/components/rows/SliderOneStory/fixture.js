import { generateCollection } from "../../fixture";

export default {
  stories: generateCollection({ stories: 6 }).items.map(item => item.story)
};
