function createUUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export const generateStory = () => {
  return {
    id: createUUID(),
    "associated-metadata": null,
    type: "story",
    story: {
      "author-name": " Deepti Chaudhary ",
      headline: "Australia thrash Pakistan by 80 runs in 3rd ODI, claim unassailable 3-0 lead",
      slug: "enterprise/nomura-india-the-deal-makers/102971",
      "last-published-at": 1550215257177,
      subheadline:
        "Yet, it has grown to be one of the top investment bankers in the country. Here's how the firm did it. Conservative— that's how Nomura India describes its approach to doing business.",
      alternative: {},
      sections: [
        {
          slug: "enterprise",
          name: "Enterprise",
          id: 3125,
          "parent-id": null,
          "display-name": "Enterprise",
          collection: {
            slug: "enterprise",
            name: "Enterprise",
            id: 7856
          },
          data: null
        }
      ],
      "hero-image-metadata": {
        width: 8122,
        height: 5415,
        "mime-type": "image/jpeg",
        "focus-point": [4222, 1764]
      },
      "published-at": 1550215257177,
      id: "2db54a0f-690e-4e95-9201-317ecfdc9fd3",
      "hero-image-s3-key": "freepressjournal/2019-05/d0781bc0-520b-4685-b8b2-d42048456727/World_Cup_2019.jpg",
      "author-id": 457012,
      "first-published-at": 1550212036948,
      "hero-image-caption":
        "from right: Prabhat Awasthi, head of Nomura India and Utpal Oza, head of investment banking at Nomura India.",
      "story-template": null,
      authors: [
        {
          id: 457012,
          name: " Deepti Chaudhary ",
          slug: "deepti-chaudhary",
          "avatar-url":
            "https://images.assettype.com/nationalherald/2016-12/6e91d901-a7fd-4b2d-9827-8198b00d1ec1/vishwa.jpg",
          "avatar-s3-key": "fortune_local/2017-06/15d9065f-e81f-4c35-9ce0-b8de73cb5a02/image.jpg",
          "twitter-handle": "@foobar",
          bio:
            'Head Marketing, Passenger Vehicle Business, Tata Motors, Srivatsa expects "even better results" this year when it displays its newly launched Tata Harrier on the cricket field.',
          "contributor-role": null
        }
      ],
      metadata: {
        "story-attributes": {
          storytemplatetype: ["Big Picture Story Template"]
        },
        "card-share": {
          shareable: true
        }
      }
    }
  };
};
