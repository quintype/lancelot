const types = [
  "art-director",
  "author",
  "anchor",
  "cartoonist",
  "illustrator",
  "food-stylist",
  "infographer",
  "photographer",
  "videographer",
  "published-by",
  "producer",
  "script-writer",
  "stylist",
  "video-editor"
];

const contributorArray = types.map(elt => ({
  type: elt,
  name: "John Doe",
  iconColor: "#000000"
}));

export default contributorArray;
