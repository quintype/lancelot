function createUUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export const generateConfig = () => {
  return {
    "stripe-publishable-key": null,
    "sketches-host": "https://vikatan-web.qtstage.io",
    "public-integrations": {
      facebook: {
        "app-id": "4"
      },
      linkedin: {
        "app-id": "8"
      },
      twitter: {
        "app-id": "10"
      },
      google: {
        "app-id": "568104192219-fo3pplg00om7824fshreh5e3rafpevfl.apps.googleusercontent.com"
      }
    },
    "theme-attributes": {},
    facebook: {
      "app-id": "4"
    },
    sections: [
      {
        slug: "politics",
        name: "Politics",
        id: 20819,
        "parent-id": null,
        "display-name": "Politics",
        collection: {
          slug: "politics",
          name: "Fourth Collectionஅரசியல்",
          id: 26748
        },
        data: null
      },
      {
        slug: "government",
        name: "Government",
        id: 20820,
        "parent-id": null,
        "display-name": "Government",
        collection: {
          slug: "government",
          name: "Sixth Collection அரசு",
          id: 26749
        },
        data: {
          color: "#26936b"
        }
      },
      {
        slug: "india",
        name: "India",
        id: 20821,
        "parent-id": null,
        "display-name": "India",
        collection: {
          slug: "india",
          name: "India",
          id: 26750
        },
        data: {
          color: "#589ead"
        }
      },
      {
        slug: "news",
        name: "News",
        id: 20822,
        "parent-id": null,
        "display-name": "news",
        collection: {
          slug: "news",
          name: "செய்திகள்- news",
          id: 26751
        },
        data: null
      },
      {
        slug: "woman",
        name: "women",
        id: 22368,
        "parent-id": null,
        "display-name": "women",
        collection: {
          slug: "woman",
          name: "Sixteen story four collection",
          id: 28694
        },
        data: null
      },
      {
        slug: "sports",
        name: "Sports",
        id: 22373,
        "parent-id": null,
        "display-name": "Sports",
        collection: null,
        data: null
      },
      {
        slug: "explore",
        name: "Explore",
        id: 22378,
        "parent-id": null,
        "display-name": "Explore",
        collection: {
          slug: "explore",
          name: "Explore",
          id: 28719
        },
        data: {
          color: "#d6d6d6"
        }
      },
      {
        slug: "cinema",
        name: "Cinema",
        id: 22384,
        "parent-id": null,
        "display-name": "Cinema",
        collection: null,
        data: {
          color: "#dd6f51"
        }
      },
      {
        slug: "entertainment",
        name: "Entertainment",
        id: 22385,
        "parent-id": null,
        "display-name": "Entertainment",
        collection: {
          slug: "entertainment",
          name: "Entertainment",
          id: 28739
        },
        data: {
          color: "#be4142"
        }
      },
      {
        slug: "gurupeyarchi",
        name: "Gurupeyarchi",
        id: 22564,
        "parent-id": 22703,
        "display-name": "Gurupeyarchi",
        collection: {
          slug: "gurupeyarchi",
          name: "குருப்பெயர்ச்சி",
          id: 29285
        },
        data: null
      },
      {
        slug: "spiritual",
        name: "spiritual",
        id: 22703,
        "parent-id": null,
        "display-name": "spiritual ",
        collection: {
          slug: "spiritual",
          name: "spiritual  ",
          id: 29578
        },
        data: {
          color: "#e3b252"
        }
      },
      {
        slug: "dummy",
        name: "dummy",
        id: 22816,
        "parent-id": null,
        "display-name": "dummy",
        collection: {
          slug: "dummy",
          name: "Ninteen stories 1ad",
          id: 32053
        },
        data: {
          color: "#5d9a19"
        }
      },
      {
        slug: "agriculture",
        name: "Agriculture",
        id: 22818,
        "parent-id": null,
        "display-name": "Agriculture",
        collection: {
          slug: "agriculture",
          name: "Inverted 4story half featured",
          id: 32063
        },
        data: {
          color: "#208e51"
        }
      },
      {
        slug: "smstesting",
        name: "smsTesting",
        id: 23010,
        "parent-id": null,
        "display-name": "testing",
        collection: {
          slug: "smstesting",
          name: "smsTesting",
          id: 32815
        },
        data: null
      },
      {
        slug: "dry6feb2019",
        name: "dry6feb2019",
        id: 23089,
        "parent-id": null,
        "display-name": "dry6feb2019",
        collection: {
          slug: "dry6feb2019",
          name: "dry6feb2019",
          id: 33118
        },
        data: {
          color: "#d6d6d6"
        }
      },
      {
        slug: "tamil-nadu",
        name: "Tamil Nadu",
        id: 24648,
        "parent-id": null,
        "display-name": "Tamil Nadu",
        collection: {
          slug: "tamil-nadu",
          name: "Tamil Nadu",
          id: 36123
        },
        data: {
          color: "#5d9a19"
        }
      },
      {
        slug: "technology",
        name: "Technology",
        id: 24819,
        "parent-id": null,
        "display-name": "Technology",
        collection: {
          slug: "technology",
          name: "Technology",
          id: 36644
        },
        data: {
          color: "#2f81cd"
        }
      },
      {
        slug: "science",
        name: "Science",
        id: 24820,
        "parent-id": null,
        "display-name": "Science",
        collection: {
          slug: "science",
          name: "Science",
          id: 36645
        },
        data: null
      },
      {
        slug: "lifestyle",
        name: "Lifestyle",
        id: 24821,
        "parent-id": null,
        "display-name": "Lifestyle",
        collection: {
          slug: "lifestyle",
          name: "Lifestyle",
          id: 36646
        },
        data: null
      },
      {
        slug: "fashion",
        name: "Fashion",
        id: 24822,
        "parent-id": 24821,
        "display-name": "Fashion",
        collection: {
          slug: "fashion-lifestyle",
          name: "Fashion (Lifestyle)",
          id: 36647
        },
        data: null
      },
      {
        slug: "vikatantype",
        name: "vikatantype",
        id: 25253,
        "parent-id": 22378,
        "display-name": "vikatantype",
        collection: {
          slug: "vikatantype-explore",
          name: "vikatantype (Explore)",
          id: 42148
        },
        data: null
      },
      {
        slug: "premiumname",
        name: "premium_name",
        id: 25261,
        "parent-id": null,
        "display-name": "premium_name",
        collection: {
          slug: "premiumname",
          name: "premium_name",
          id: 42161
        },
        data: null
      },
      {
        slug: "sports-kerala",
        name: "Sports Kerala",
        id: 25262,
        "parent-id": null,
        "display-name": "Sports Kerala",
        collection: {
          slug: "sports-kerala",
          name: "Sports Kerala",
          id: 42162
        },
        data: null
      }
    ],
    "social-links": {
      "facebook-url": "https://www.facebook.com/vikatan",
      "google-plus-url": "https://plus.google.com/+vikatan",
      "twitter-url": "https://twitter.com/vikatan"
    },
    layout: {
      "stories-between-stacks": 4,
      menu: [
        {
          "updated-at": 1548926315449,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 20819,
          rank: 4904,
          title: "Sports",
          "item-type": "section",
          "section-slug": "politics",
          "tag-slug": null,
          id: 4904,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/politics",
          "created-at": 1546604744066,
          "section-name": "Politics",
          "menu-group-id": 4,
          data: {
            color: "#000000"
          }
        },
        {
          "updated-at": 1551686383927,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "gurupeyarchi",
          "item-id": 22564,
          rank: 5493,
          title: "Link 1",
          "item-type": "section",
          "section-slug": "gurupeyarchi",
          "tag-slug": null,
          id: 5493,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/gurupeyarchi",
          "created-at": 1551686383927,
          "section-name": "Gurupeyarchi",
          "menu-group-id": 270,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551690510756,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "gurupeyarchi",
          "item-id": 22384,
          rank: 5494,
          title: "Link 2",
          "item-type": "section",
          "section-slug": "cinema",
          "tag-slug": null,
          id: 5494,
          "parent-id": 5493,
          url: "https://vikatan-web.qtstage.io/section/cinema",
          "created-at": 1551686404598,
          "section-name": "Cinema",
          "menu-group-id": 270,
          data: {
            color: "#f7f7f7"
          }
        },
        {
          "updated-at": 1551687908817,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22384,
          rank: 5501,
          title: "sub menu",
          "item-type": "section",
          "section-slug": "cinema",
          "tag-slug": null,
          id: 5501,
          "parent-id": 4904,
          url: "https://vikatan-web.qtstage.io/section/cinema",
          "created-at": 1551687908817,
          "section-name": "Cinema",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551689609981,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5502,
          title: "Explore",
          "item-type": "placeholder",
          "section-slug": null,
          "tag-slug": null,
          id: 5502,
          "parent-id": null,
          url: null,
          "created-at": 1551689609981,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551689669820,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5503,
          title: "Books",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 5503,
          "parent-id": 5502,
          url: "https://google.com",
          "created-at": 1551689669820,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#c7c7c7",
            link: "https://google.com"
          }
        },
        {
          "updated-at": 1551690495670,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "gurupeyarchi",
          "item-id": 23089,
          rank: 5504,
          title: "Child 1",
          "item-type": "section",
          "section-slug": "dry6feb2019",
          "tag-slug": null,
          id: 5504,
          "parent-id": 5493,
          url: "https://vikatan-web.qtstage.io/section/dry6feb2019",
          "created-at": 1551690495670,
          "section-name": "dry6feb2019",
          "menu-group-id": 270,
          data: {
            color: "#000000"
          }
        },
        {
          "updated-at": 1551690569432,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "gurupeyarchi",
          "item-id": 22384,
          rank: 5505,
          title: "Parent 2",
          "item-type": "section",
          "section-slug": "cinema",
          "tag-slug": null,
          id: 5505,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/cinema",
          "created-at": 1551690569432,
          "section-name": "Cinema",
          "menu-group-id": 270,
          data: {
            color: "#ffffff"
          }
        },
        {
          "updated-at": 1551779181265,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22818,
          rank: 5548,
          title: "Agriculture",
          "item-type": "section",
          "section-slug": "agriculture",
          "tag-slug": null,
          id: 5548,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/agriculture",
          "created-at": 1551779181265,
          "section-name": "Agriculture",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779199892,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22384,
          rank: 5549,
          title: "Cinema",
          "item-type": "section",
          "section-slug": "cinema",
          "tag-slug": null,
          id: 5549,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/cinema",
          "created-at": 1551779199892,
          "section-name": "Cinema",
          "menu-group-id": 4,
          data: {
            color: "#208e51"
          }
        },
        {
          "updated-at": 1551779227042,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22385,
          rank: 5551,
          title: "Entertainment",
          "item-type": "section",
          "section-slug": "entertainment",
          "tag-slug": null,
          id: 5551,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/entertainment",
          "created-at": 1551779227042,
          "section-name": "Entertainment",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779241388,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22378,
          rank: 5552,
          title: "Explore",
          "item-type": "section",
          "section-slug": "explore",
          "tag-slug": null,
          id: 5552,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/explore",
          "created-at": 1551779241388,
          "section-name": "Explore",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779366853,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 24822,
          rank: 5553,
          title: "Fashion",
          "item-type": "section",
          "section-slug": "fashion",
          "tag-slug": null,
          id: 5553,
          "parent-id": 5558,
          url: "https://vikatan-web.qtstage.io/section/fashion",
          "created-at": 1551779252170,
          "section-name": "Fashion",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779272365,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 20820,
          rank: 5554,
          title: "Government",
          "item-type": "section",
          "section-slug": "government",
          "tag-slug": null,
          id: 5554,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/government",
          "created-at": 1551779272365,
          "section-name": "Government",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779293486,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 22564,
          rank: 5555,
          title: "Gurupeyarchi",
          "item-type": "section",
          "section-slug": "gurupeyarchi",
          "tag-slug": null,
          id: 5555,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/gurupeyarchi",
          "created-at": 1551779293486,
          "section-name": "Gurupeyarchi",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779306406,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 20821,
          rank: 5556,
          title: "India",
          "item-type": "section",
          "section-slug": "india",
          "tag-slug": null,
          id: 5556,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/india",
          "created-at": 1551779306406,
          "section-name": "India",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779329553,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 24819,
          rank: 5557,
          title: "Technology",
          "item-type": "section",
          "section-slug": "technology",
          "tag-slug": null,
          id: 5557,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/technology",
          "created-at": 1551779329553,
          "section-name": "Technology",
          "menu-group-id": 4,
          data: {
            color: "#eeeeee"
          }
        },
        {
          "updated-at": 1551779357112,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "header-menu",
          "item-id": 24821,
          rank: 5558,
          title: "lifestyle",
          "item-type": "section",
          "section-slug": "lifestyle",
          "tag-slug": null,
          id: 5558,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/lifestyle",
          "created-at": 1551779357112,
          "section-name": "Lifestyle",
          "menu-group-id": 4,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779456236,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5559,
          title: "Subscription",
          "item-type": "placeholder",
          "section-slug": null,
          "tag-slug": null,
          id: 5559,
          "parent-id": null,
          url: null,
          "created-at": 1551779456236,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#c7c7c7"
          }
        },
        {
          "updated-at": 1551779517647,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5560,
          title: "Print",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 5560,
          "parent-id": 5559,
          url: "http://subscriptions.vikatan.com/",
          "created-at": 1551779517647,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#c7c7c7",
            link: "http://subscriptions.vikatan.com/"
          }
        },
        {
          "updated-at": 1551779598811,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5561,
          title: "Newsletter",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 5561,
          "parent-id": 5559,
          url: "https://www.vikatan.com/newsletter",
          "created-at": 1551779598811,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#eeeeee",
            link: "https://www.vikatan.com/newsletter"
          }
        },
        {
          "updated-at": 1551779598815,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5562,
          title: "Newsletter",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 5562,
          "parent-id": 5559,
          url: "https://www.vikatan.com/newsletter",
          "created-at": 1551779598815,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#eeeeee",
            link: "https://www.vikatan.com/newsletter"
          }
        },
        {
          "updated-at": 1551779649320,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": null,
          rank: 5563,
          title: "Coins",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 5563,
          "parent-id": 5559,
          url: "https://www.vikatan.com/coins",
          "created-at": 1551779635283,
          "section-name": null,
          "menu-group-id": 97,
          data: {
            color: "#c7c7c7",
            link: "https://www.vikatan.com/coins"
          }
        },
        {
          "updated-at": 1551785825630,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24820,
          rank: 5574,
          title: "Science",
          "item-type": "section",
          "section-slug": "science",
          "tag-slug": null,
          id: 5574,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/science",
          "created-at": 1551784901679,
          "section-name": "Science",
          "menu-group-id": 278,
          data: {
            color: "#2f81cd"
          }
        },
        {
          "updated-at": 1551784978966,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 22378,
          rank: 5575,
          title: "Experiments",
          "item-type": "section",
          "section-slug": "explore",
          "tag-slug": null,
          id: 5575,
          "parent-id": 5574,
          url: "https://vikatan-web.qtstage.io/section/explore",
          "created-at": 1551784958410,
          "section-name": "Explore",
          "menu-group-id": 278,
          data: {
            color: "#e92227"
          }
        },
        {
          "updated-at": 1551940644613,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24821,
          rank: 5576,
          title: "Hardware",
          "item-type": "section",
          "section-slug": "lifestyle",
          "tag-slug": null,
          id: 5576,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/lifestyle",
          "created-at": 1551785014892,
          "section-name": "Lifestyle",
          "menu-group-id": 278,
          data: {
            color: "#e92227"
          }
        },
        {
          "updated-at": 1551785039806,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24819,
          rank: 5577,
          title: "Mobile",
          "item-type": "section",
          "section-slug": "technology",
          "tag-slug": null,
          id: 5577,
          "parent-id": 5576,
          url: "https://vikatan-web.qtstage.io/section/technology",
          "created-at": 1551785039806,
          "section-name": "Technology",
          "menu-group-id": 278,
          data: {
            color: "#e92227"
          }
        },
        {
          "updated-at": 1551868260978,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "footer-menu",
          "item-id": 22378,
          rank: 5589,
          title: "explore",
          "item-type": "section",
          "section-slug": "explore",
          "tag-slug": null,
          id: 5589,
          "parent-id": null,
          url: "https://vikatan-web.qtstage.io/section/explore",
          "created-at": 1551868260978,
          "section-name": "Explore",
          "menu-group-id": 97,
          data: {
            color: "#ffffff"
          }
        },
        {
          "updated-at": 1551940501119,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24819,
          rank: 5592,
          title: "Tablet",
          "item-type": "section",
          "section-slug": "technology",
          "tag-slug": null,
          id: 5592,
          "parent-id": 5576,
          url: "https://vikatan-web.qtstage.io/section/technology",
          "created-at": 1551940501119,
          "section-name": "Technology",
          "menu-group-id": 278,
          data: {
            color: "#2f81cd"
          }
        },
        {
          "updated-at": 1551940894542,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24821,
          rank: 5593,
          title: "PC",
          "item-type": "section",
          "section-slug": "lifestyle",
          "tag-slug": null,
          id: 5593,
          "parent-id": 5576,
          url: "https://vikatan-web.qtstage.io/section/lifestyle",
          "created-at": 1551940894542,
          "section-name": "Lifestyle",
          "menu-group-id": 278,
          data: {
            color: "#2f81cd"
          }
        },
        {
          "updated-at": 1551940913692,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24821,
          rank: 5594,
          title: "Laptop",
          "item-type": "section",
          "section-slug": "lifestyle",
          "tag-slug": null,
          id: 5594,
          "parent-id": 5576,
          url: "https://vikatan-web.qtstage.io/section/lifestyle",
          "created-at": 1551940913692,
          "section-name": "Lifestyle",
          "menu-group-id": 278,
          data: {
            color: "#e92227"
          }
        },
        {
          "updated-at": 1551940937489,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 20820,
          rank: 5595,
          title: "Education",
          "item-type": "section",
          "section-slug": "government",
          "tag-slug": null,
          id: 5595,
          "parent-id": 5574,
          url: "https://vikatan-web.qtstage.io/section/government",
          "created-at": 1551940937489,
          "section-name": "Government",
          "menu-group-id": 278,
          data: {
            color: "#2f81cd"
          }
        },
        {
          "updated-at": 1551940972924,
          "tag-name": null,
          "publisher-id": 662,
          "menu-group-slug": "technology",
          "item-id": 24820,
          rank: 5596,
          title: "Explore",
          "item-type": "section",
          "section-slug": "science",
          "tag-slug": null,
          id: 5596,
          "parent-id": 5574,
          url: "https://vikatan-web.qtstage.io/section/science",
          "created-at": 1551940972924,
          "section-name": "Science",
          "menu-group-id": 278,
          data: {
            color: "#2f81cd"
          }
        }
      ],
      stacks: []
    },
    "cdn-name": "https://thumbor-stg.assettype.com/",
    "publisher-id": 662,
    "publisher-settings": {
      copyright: "© vikatan 2019"
    },
    "num-headlines": 5,
    "publisher-name": "vikatan",
    env: "staging",
    "initial-stories-per-page": 40,
    "seo-metadata": [],
    "typekit-id": "ntm3kec",
    "cdn-image": "thumbor-stg.assettype.com",
    "story-slug-format": "{{section}}/{{first-published-at|YYYY/MM/dd}}",
    android: {
      "notification-style": "roll-up"
    },
    "shrubbery-host": "https://stg-analytics.qlitics.com",
    "static-page-urls": [
      "https://vikatan-web.qtstage.io/terms-and-conditions",
      "https://vikatan-web.qtstage.io/privacy-policy"
    ],
    "nudge-host": "https://vikatan.qtstage.io",
    "num-more-stories": 20,
    "polltype-host": "https://stg-api.polltype.com",
    "apps-data": {},
    "razorpay-gateway-key": null,
    "story-attributes": [
      {
        type: "card",
        name: "imagealignment",
        values: ["align-left", "align-right"],
        "display-name": "image-alignment",
        "attribute-level": "single",
        "data-type": "multi-valued-strings"
      },
      {
        type: "story",
        name: "articletype",
        values: [
          "Opinion",
          "Review",
          "Interview",
          "Series",
          "Story",
          "Infographics",
          "DIY",
          "Case Study",
          "Analysis",
          "Report",
          "Human Story",
          "Evergreen",
          "Topical",
          "Survey",
          "Interactive",
          "Translation",
          "Cartoon",
          "Album",
          "Video",
          "Vikatan Breaks",
          "Vikatan Exclusive",
          "Flash News"
        ],
        "display-name": "Article Type",
        "attribute-level": "single",
        "data-type": "multi-valued-strings"
      },
      {
        type: "story",
        name: "displayauthor",
        values: ["Yes", "No"],
        "display-name": "Display Author",
        "attribute-level": "single",
        "data-type": "multi-valued-strings"
      },
      {
        type: "story",
        name: "series",
        values: [
          "விகடன் வரவேற்பறை",
          "ஆறாம் திணை",
          "வட்டியும் முதலும்",
          "யட்சன்",
          "அறிவிழி",
          "எனது இந்தியா!",
          "புகுந்த வீடு....",
          "என் டைரி",
          "பிஸினஸ் வெற்றிக் கதைகள்",
          "ராசி பலன்கள்",
          "பிஸினஸ் கேள்வி - பதில்",
          "கதை கேளு... கதை கேளு..!",
          "யாதுமாகி நின்றாள்!",
          "கேபிள் கலாட்டா !",
          "அவள் சினிமாஸ்",
          "புக் கிளப்!",
          "அவதார்",
          "சத்து நம் சொத்து",
          "உங்களைத் தெரியுமா உங்களுக்கு?",
          "முத்தான கையெழுத்து!",
          "குட் ஸ்டூடன்ட் டியர் டீச்சர்",
          "சுட்டி நாயகன்!",
          "மாயா டீச்சரின் மந்திரக் கம்பளம்!",
          "புத்தக விமரிசனம்",
          "கேரள திவ்ய தேசங்கள்",
          "குருவே சரணம்... திருவே சரணம்!",
          "முருகனின் தொண்டர்கள்",
          "ராசி பலன்",
          "ஞானப் பொக்கிஷம்",
          "தசாவதார திருத்தலங்கள்!",
          "தெரிந்த புராணம்... தெரியாத கதை!",
          "ஊர் ஜாதகம்",
          "MBA -மூன்றெழுத்து மந்திரம்",
          "செக்டார் அனாலிசிஸ்",
          "பட்ஜெட் 2013",
          "முக்கிய புத்தகம்",
          "நாணயம் ஜாப்",
          "மோட்டார் நியூஸ்",
          "ரகசிய கேமரா",
          "ஆட்டோ ஃபோகஸ்!",
          "நெட்டகாசம்!",
          "பயணங்களும் பாடங்களும்!",
          "மோட்டார் கிளினிக்",
          "நீங்கள் கேட்டவை",
          "நான் நம்மாழ்வார் பேசுகிறேன்",
          "மரத்தடி மாநாடு!",
          "எண்களில் மருத்துவம்",
          "நம்பிக்கை வார்க்கும் நல்ல புத்தகம்!",
          "கருவாய்... உருவாய்... அருள்வாய்...",
          '"வைத்திய" அம்மணியும் "சொலவடை" வாசம்பாவும்!',
          "குட் நைட்",
          "இப்படிக்கு வயிறு!",
          "புனலூர் தாத்தா",
          "கேள்வி - பதில்",
          "வரம் கொடுக்கும் வழிபாடுகள்!",
          "பஞ்சாங்கக் குறிப்புகள்",
          "புலித்தடம் தேடி...",
          "மதிப்புக்கூட்டும் மந்திரம்",
          "சந்தைக்குப் போகலாம் வாங்க !",
          "உங்கள் தட்டில் உணவா..விஷமா ?",
          "விமர்சனம்",
          "சித்த மருத்துவம் சிறப்பான தீர்வு",
          "கேள்வி பதில்",
          "முன்னோடிகள்",
          "சித்தம் அறிவோம்...",
          "கண்ணன் நாமம் சொல்லும் கதைகள்!",
          "இது உங்களின் கதை - துர்கா",
          "ரொமான்ஸ் ரகசியங்கள்!",
          "இங்கு பஞ்சர் போடப்படும்!",
          "ஒரு கதை... ஒரு தீர்வு!",
          "நாரதர் கதைகள்",
          "பாஸ்வேர்டு",
          "மறக்கவே நினைக்கிறேன்",
          "பியூட்டி பிளவுஸ்கள்",
          "குடும்பமா... வேலையா?",
          "சட்டத்தால் யுத்தம் செய்!",
          "நம்ம ஊரு வைத்தியம்! ",
          "சேதி சொல்லும் சிற்பங்கள்",
          "இதோ.. எந்தன் தெய்வம்!",
          "மகா பெரியவா சொன்ன கதைகள்!",
          "மனமே நலமா?",
          "எதிர்கொள் !",
          "பணவளக்கலை",
          "ஸ்ட்ராடஜி",
          "காஸ்ட் மேனேஜ்மெண்ட்",
          "இனிதாகக் கற்போம் தமிழ் !",
          "அழகாக அறிவோம் ஆங்கிலம் !",
          "தவிக்குதே... தவிக்குதே...",
          "நெடுஞ்சாலை வாழ்க்கை!",
          "கனவு ஆசிரியர்",
          "சறுக்கலை சரிசெயத சவாலான நிதித் திட்டமிடல்",
          "சொந்த வீடு",
          "தொழில் ஆத்திசூடி !",
          "சிறுதானிய சமையல்",
          "வேடிக்கை பார்ப்பவன்",
          "ஆபரேஷன் நோவா",
          "மகாத்மா முதல் மன்மோகன் வரை!",
          "ஆ... சாமியோவ்!",
          "பாரம்பரியம் Vs பார்லர்",
          "அனுபவங்கள் பேசுகின்றன",
          "அ முதல் ஃ வரை",
          "கை கொடுக்கும் கிராஃப்ட்",
          "அலைபாயும் நெஞ்சினிலே",
          "பிஸினஸ் திலகங்கள்",
          "பணம் கொட்டும் தொழில்கள் !",
          "உனக்கும் மேலே நீ !",
          "யோக",
          "ஆனந்தம் விளையாடும் வீடு",
          "மலர் சிந்தும் மனசு",
          "விதைக்குள் விருட்சம்",
          "குருவருள் திருவருள்",
          "நட்சத்திர பலன்கள்",
          "ஆறு சுவையும்... அஞ்சறைப் பெட்டியும்...",
          "தண்ணீர்...தண்ணீர்..",
          "இமயமலையில் ஒரு பயணம்!",
          "மூலிகை வளம்",
          "மீத்தேன் எமன்",
          "உணவு யுத்தம்!",
          "நிதியை மதியால் வெல்வோம்!",
          "தொழில் முனைவோர்களின் வெற்றிக்கு",
          "ஃபேமிலி ஃபைனான்ஷியல் பிளானிங்",
          "போட்டித் தேர்வுகள்",
          "ஹோம் பட்ஜெட்",
          "கற்க கசடற விற்க அதற்குத் தக",
          "அம்மா ரெசிப்பி",
          "நலம் 360",
          "பேசாத பேச்செல்லாம்",
          "கடவுள் தொடங்கிய இடம்",
          "தடுப்பூசி ரகசியங்கள்",
          "மனிதன் மாறி விட்டான்!",
          "சத்தியப் பாதையில்...",
          "என் இனிய கதைநாயகிகள்..",
          "அந்த நாள்",
          "துங்கா நதி தீரத்தில்...",
          "ஒருநாள்... ஓரிடம்... ஓர் அனுபவம்",
          "பாடல் சொல்லும் பாடம்",
          "அருட்களஞ்சியம்",
          '"கண்மணி அன்போடு...’ கௌதமி!',
          "ஸ்ரீமஹாலக்ஷ்மி கடாக்ஷம்!",
          "ஆல் இஸ் வெல்!",
          "ஃபேஷன் ஸ்டுடியோ! ",
          "ஃபேஷன் ஸ்டுடியோ! ",
          "இன்டீரியர்..!",
          "இதோ எந்தன் தெய்வம்",
          "இனியெல்லாம் ருசியே!",
          "குற்றம் புரிந்தவர்",
          "கதை மழை",
          "ஸ்ரீசாயி பிரசாதம்",
          "மனிதனும் தெய்வமாகலாம்",
          "கடவுள் அறிவோம்! ",
          "இனி எல்லாம் லாபமே !",
          "ஏற்றுமதி தொழில்கள்!",
          "செக்டார் ரிசர்ச்",
          "மனதுக்கு மருந்து போடும் தொடர்",
          "நாட்டு மருந்து கடை",
          "அலைபாயுதே...",
          "வீட்டு சாப்பாடு",
          "அந்தப்புரம்",
          "ஏற்றம் தரும் ஏற்றுமதி தொழில்கள்! ",
          "க்ரைம் தொடர்",
          "ஒரு நாள் விவசாயி",
          "வீட்டுக்குள் விவசாயம்",
          "மண்ணுக்கு மரியாதை",
          "அனுபவங்கள் பேசுகின்றன",
          "ராசிபலன்",
          "ஆல் இஸ் வெல்! ",
          "ஸ்ரீமஹாலக்ஷ்மி கடாக்ஷம்",
          "கைகொடுக்கும் கிராஃப்ட்!",
          "கேபிள் கலாட்டா!",
          "அவசரத் தொடர்",
          "ஹார்மோன் கெமிஸ்ட்ரி",
          "ஜூ.வி.ஸ்பெஷல் ஸ்டோரி",
          "கதை எழுதலாம் வாங்க !",
          "குடும்ப நிதி மேலாண்மை",
          "முதலீட்டின் மூன்று முக்கிய பந்திரங்கள்!",
          "பிசினஸ் சீக்ரெட்ஸ்!",
          "பிசினஸ் சீக்ரெட்ஸ்",
          "நள்ளிரவு வானவில்",
          "நெருக்கடிநிலை",
          "நம்பர் 1",
          "கலகல கடைசி பக்கம் !",
          "பெரியோர்களே... தாய்மார்களே !",
          "நிழல் படம் நிஜப் படம் !",
          "RTI அலசல்",
          "ஊழல் நாற்றத்தில் மரணப் பிரதேசம் !~",
          "புண்ணிய பூமி",
          "சித்தமெல்லாம் சித்தமல்லி!",
          "முன்னோர்கள் சொன்னார்கள் !",
          "கார்ப்பரேட் ‘கோடரி’",
          "வைகைநதி நாகரிகம் !",
          "# Ban Tasmac",
          "கலைடாஸ்கோப்",
          "10 செகண்ட் கதைகள்",
          "உயிர் பிழை",
          "இந்திய வானம்",
          "திருக்கோளூர் பெண்பிள்ளாய் ரகசியம்",
          "புண்ணிய பூமி !",
          "மண்புழு மன்னாரு",
          "உணவின்றி அமையாது உலகு",
          "பணம், உங்கள் பலம்!",
          "என் டைரி",
          "சிவமகுடம்",
          "சுட்டி கிச்சன்! ",
          "மைடியர் ஜீபா!",
          "சுட்டி ஸ்டார் நியூஸ்!",
          "ஹாபி...ஹாபி!",
          "உறுதிமொழி ",
          "ஒரு தேதி...ஒரு சேதி! ",
          "தினமும் கேளுங்கள்... சுட்டித் தமிழ்! ",
          "க்வில்லிங் கிளாஸ்...!",
          "உடலினை உறுதி செய்",
          "உச்சி முதல் உள்ளங்கால் வரை... - வெர்ஷன் 2.0",
          "வைட்டமின் சீக்ரெட்ஸ்",
          "இன்ஷூரன்ஸ் இப்போ ஈஸி!",
          "வைத்தியம்",
          "ஆட்டோகிராஃப்!",
          "மர்மபுரி ",
          "சென்றதும் வென்றதும்!",
          "மந்திரி தந்திரி",
          "ஜோதிட சிந்தனைகள்",
          "ஃபண்ட் ஹவுஸ்!",
          "என்ன செய்தார் எம்.எல்.ஏ.?",
          "நீரின் வேர் தேடும் பயணம்!",
          "ஸ்வீட் எஸ்கேப்",
          "மனமே நீ மாறிவிடு",
          "அலர்ஜியை அறிவோம்!",
          "இனி எல்லாம் சுகமே",
          "மருந்தில்லா மருத்துவம்",
          "மைல்ஸ் டு கோ...",
          "சங்கடம் தீர்க்கும் சன்னதிகள்",
          "ஒரு டஜன் யோசனைகள்",
          "செலிப்ரிட்டி செலக்‌ஷன்",
          "அடுக்களையிலேயே அழகாகலாம்!",
          "திரைத்தொண்டர்",
          "மனசெல்லாம் மந்திரம்!",
          "கயிலை... காலடி... காஞ்சி!",
          "ஊர்வலம்!",
          "அறம் பொருள் இன்பம்",
          "நூல் வெளி",
          "அரசியல் / பண்பாடு",
          "அனுபவம்",
          "திரைவெளி",
          "ஆளுமைகள்",
          "கவிதை",
          "கதைகளின் கதை",
          "மனச்சிறையில் சில மர்மங்கள்",
          "தோற்றவர்களின் கதை",
          "ஆயிரம் சூரியன் ஆயிரம் சந்திரன் ஒரே ஒரு பூமி ",
          "பேரறிவாளன் டைரி",
          "எதிர்வினை",
          "இலக்கியம்",
          "கலை",
          "இன்னும் சில சொற்கள்",
          "எழுத்துக்கு அப்பால்",
          "அடுத்து என்ன?",
          "பஞ்சகவ்யா",
          "லாபம் தரும் தொழில்கள்!",
          "டிரேடர்களே உஷார்",
          "எந்திரன்",
          "நெடுஞ்சாலை வாழ்க்கை",
          "குறும்புக்காரன் டைரி",
          "மாயமில்லே... மந்திரமில்லே...",
          "நாரதர் உலா",
          "சிறுகதை",
          "ஆண்பால் பெண்பால் அன்பால்",
          "மனுஷி",
          "பேஸிக் மேக்கப் முதல் பிரைடல் மேக்கப் வரை",
          "வீரயுக நாயகன் வேள் பாரி ",
          "ஆசை",
          "மோடியின் அச்சா தின்... சாத்தியமாக்கும் வழிகள்",
          "நவீன ஓவியம்",
          "வெள்ளி நிலம்",
          "பெண் Money",
          "சிட்லிங்கி",
          "நல்மருந்து - தெரிந்த செடிகள்... தெரியாத பயன்கள்",
          "ஃபைனான்ஷியல் தவறுகள்... பளிச் தீர்வுகள்!",
          "பாரம்பர்ய உணவுப் பயணம்",
          "நீங்களும் ஆகலாம் பிசினஸ்மேன்!",
          "மணி மேனேஜ்மென்ட்! ",
          "நாணயம்   எம்ப்ளாய்மென்ட்!",
          "சொட்டுச் சொட்டாக நீர்... கட்டுக் கட்டாக லாபம்!",
          "மயக்கமும்... மர்மமும்",
          "சித்திர ராமாயணம்",
          "மன்னார்குடி ரீவைண்ட் ஜாதகம்",
          "ஜெ.ஜெயலலிதா என்னும் நான்... - அம்மாவின் கதை! ",
          "சகலகலா சருமம்",
          "வீடு Vs வேலை",
          "உன்னத வாழ்வு தரும் ஊட்டத்தூர்!",
          "மரம் செய விரும்பு",
          "விளையும் விலையும்",
          "உதவிக்கு வரும் உயிரியல் ",
          "கட்டுரைகள்",
          "நம் ஊர்... நம் கதைகள்",
          "மருத்துவம் நலமா? - நிஜமும் நிழலும்",
          "ஒரு வரி ஒரு நெறி",
          "கடல் தொடாத நதி",
          "கொஞ்சம் சரித்திரம் கொஞ்சம் தரிசனம்!",
          "சனங்களின் சாமிகள்",
          "உயிர் மெய்",
          "புதிய புராணம்!",
          "குறை தீர்க்கும் கோயில்கள்",
          "சொல் அல்ல செயல்",
          "ப்ளஸ் மைனஸ் ப்ளீஸ்",
          "மாடர்ன் மெடிசின்.காம்",
          "நத்தையின் பாதை",
          "நிம்மதி தரும் நிதித் திட்டம்",
          "மாத்தி யோசி  மை டியர் ப்ரோ",
          "போட்டித் தேர்வுகளில் பொருளாதாரம்",
          "ஷேர் மார்க்கெட் ஏபிசி",
          "அணிலாடும் முன்றில்!",
          "கிறுக்கு ராஜாக்களின் கதை",
          "என்னுள் மையம் கொண்ட புயல்",
          "அடல்ட்ஸ் ஒன்லி",
          "நான் அகதி - பயணம் ஆரம்பம்",
          "Simmering storm within me",
          "இனி உன் காலம்!",
          "கொஞ்சம் ப்ளஸ்... நிறைய லாபம்! - மதிப்புக் கூட்டும் தொழில்கள்!",
          "டெக்ஜாம்பவான்கள்!",
          "ஃபண்ட் டேட்டா! ",
          "அங்காடித் தெரு! ",
          "நாம் பிடிக்கவேண்டிய கடைசி பஸ்",
          "கார் வாங்குவது எப்படி?",
          "சரக்குப் பெயர்ச்சி பலன்கள்",
          "நான் ரம்யாவாக இருக்கிறேன்",
          "அன்பும் அறமும்",
          "சர்வைவா",
          "சோறு முக்கியம் பாஸ்! ",
          "பணம் பழகலாம்!",
          "வின்னிங் இன்னிங்ஸ்",
          "விகடன் பிரஸ்மீட்",
          "கலாய் கவிதைகள்",
          "பிட்காயின் பித்தலாட்டம்",
          "பசுமைச் செயலிகள்... உள்ளங்கையில் உழவு!",
          "மண், மக்கள், மகசூல்!",
          "தண்ணீர் - அறிவியல்+அரசியல்+அழிவியல்",
          "மெய்ப்பொருள் காண்...",
          "தெய்வத்தான் ஆகாதெனினும்",
          "மகா பெரியவா",
          "திருவருள் செல்வர்கள்",
          "ரங்க ராஜ்ஜியம்",
          "மண்... மக்கள்... தெய்வங்கள்!",
          "அதாவது கண்ணுங்களா!",
          "சிரிக்க சிரிக்க சரித்திரம்",
          "ஆனந்தம் விளையாடும் வீடு",
          "கவிதையின் கையசைப்பு",
          "கடுகு டப்பா To கரன்ட் அக்கவுன்ட்",
          "கடன்... கஷ்டம்... தீர்வுகள்!",
          "ஆண் குழந்தைகளை வளர்ப்பது எப்படி?",
          "டீ கிளட்டரிங்",
          "தெய்வ மனுஷிகள்",
          "சட்டம் பெண் கையில்!",
          "சினிமா வெறியின் 40 ஆண்டுகள்",
          "முதன்முதலாக...",
          "நான்காம் சுவர்",
          "கேம் சேஞ்சர்ஸ்",
          "என்னஞ்சல்",
          "என்ன செய்தார் எம்.பி?",
          "மாண்புமிகு மருத்துவர்கள்!",
          "முதலீட்டு ரகசியங்கள்",
          "காபி கேன் இன்வெஸ்டிங் ",
          "பிசினஸ்... உங்கள் பிரச்னை, எங்கள் தீர்வு!",
          "நான் ஏன் எழுதுகிறேன்",
          "தன்மானம் அவமானம் வெகுமானம்",
          "அன்பே தவம்",
          "வெளிநாட்டு வெள்ளாமை",
          "அள்ளித்தரும் அக்கரைச் சீமை",
          "நானும்தான்",
          "தமிழகம் இன்ஃபோ ஸ்பெஷல்",
          "சத்யசாயி பொற்பதம் சரணம்",
          "இறையுதிர் காடு",
          "சொல்லித் தெரிவதே மன்மதக் கலை!",
          "நில்... கவனி... சர்வீஸ்! ",
          "80’ஸ் எவர்கிரீன் நாயகிகள்",
          "தொழிலாளி to முதலாளி"
        ],
        "display-name": "Series",
        "attribute-level": "single",
        "data-type": "multi-valued-strings"
      },
      {
        type: "collection",
        name: "label",
        values: [
          "poem",
          "interview",
          "story",
          "cinema",
          "politics",
          "தலையங்கம்",
          "அரசியல்",
          "சினிமா",
          "பேட்டி - கட்டுரைகள்",
          "தொடர்கள்",
          "கதைகள்",
          "கவிதைகள்",
          "ஹ்யூமர்"
        ],
        "display-name": "Label",
        "data-type": "multi-valued-strings"
      }
    ],
    "mins-between-refreshes": 25
  };
};

export const generateStory = (data = {}) => {
  return Object.assign(
    {
      url: "http://some-url.com",
      "story-template": "listicle",
      "acces-level-value": 100,
      id: createUUID(),
      "author-name": "சுரேஷ் கண்ணன்",
      sections: [
        {
          "display-name": "ஆனந்த விகடன்",
          color: "#e92227"
        }
      ],
      access: "login",
      authors: [
        {
          id: 287213,
          name: "Sooraj Balasubramanian",
          slug: "sooraj-balasubramanian",
          "avatar-url":
            "https://lh4.googleusercontent.com/-ktRiE1o9BIM/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZynoAnoQdy2YXqd7IeLvKCKdZ1wA/mo/photo.jpg?sz=50",
          "avatar-s3-key": null,
          "twitter-handle": null,
          bio:
            "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p><p>with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
          "contributor-role": { id: 1385, name: "author" }
        },
        {
          id: 283616,
          name: "Sriram",
          slug: "sriram",
          "avatar-url": null,
          "avatar-s3-key": null,
          "twitter-handle": null,
          bio: null,
          "contributor-role": null
        }
      ],
      cards: [
        {
          "card-type": "introduction",
          "story-elements": [
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/785a75db-831d-4e0e-ad4d-af81c29a34ec",
              type: "text",
              "family-id": "9d3c32b3-d0e8-4e2a-8b64-ee9198b34b83",
              title: "",
              id: "785a75db-831d-4e0e-ad4d-af81c29a34ec",
              metadata: {},
              subtype: null,
              text:
                "<p><strong>அமெரிக்காவில், சான்ஃபிரான்சிஸ்கோ மாகாணத்தின் கொடியிலும் ஃபீனிக்ஸ் பறவை இடம் பெற்றுள்ளதைக் காண முடியும். இதுதவிர, லண்டனிலும், சீனாவிலும் ஃபீனிக்ஸ் பறவைக்காக சிலைகள் நிறுவப்பட்டுள்ளன.</strong></p>"
            },
            {
              description: "",
              "image-metadata": {
                width: 1032,
                height: 774
              },
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/c7230d45-1846-4301-9b7a-538d7898956f",
              type: "image",
              "family-id": "ab9b52f7-b55f-4b0d-8532-687b4e47a308",
              "image-attribution": "",
              title: "",
              id: "c7230d45-1846-4301-9b7a-538d7898956f",
              "image-s3-key":
                "vikatan/2019-01/79991ef8-7714-4f7e-8f71-cd7ffcb61fa5/5086da36_e99b_4204_8138_b9a9f092b499_20267.jpg",
              metadata: {},
              subtype: null
            }
          ],
          "card-updated-at": 1548846457370,
          "content-version-id": "ff668287-d5b8-432c-8061-718713fc8d3c",
          "card-added-at": 1547532779906,
          status: "draft",
          id: "c1b735d1-c542-47a4-b0f4-7829f6b06fd5",
          "content-id": "c1b735d1-c542-47a4-b0f4-7829f6b06fd5",
          version: 5,
          metadata: {
            "social-share": {
              shareable: false,
              title:
                "அமெரிக்காவில், சான்ஃ மாகாணத்தின் கொடியிலும் ஃபீனிக்ஸ் பறவை இடம் பெற்றுள்ளதைக் காண முடியும். பெற்றுள்ளதைக் காண முடியும் - Listicle story",
              message: "ssm",
              image: {
                key:
                  "vikatan/2019-01/79991ef8-7714-4f7e-8f71-cd7ffcb61fa5/5086da36_e99b_4204_8138_b9a9f092b499_20267.jpg",
                url: null,
                attribution: "",
                caption: null,
                metadata: {
                  width: 1032,
                  height: 774
                }
              }
            }
          }
        },
        {
          "story-elements": [
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/8a2e8b42-0051-4276-9127-98d5afac9d6f",
              type: "text",
              "family-id": "61d13030-989f-49b6-bc39-3df0391553ec",
              title: "",
              id: "8a2e8b42-0051-4276-9127-98d5afac9d6f",
              metadata: {},
              subtype: null,
              text:
                "<p>வர்ணிக்கப்படுகிறது. புராணக் கதைகளின்படி, கற்பனை பறவையான இதன் தோற்றம், கடும் சிவப்பு நிற உடலையும், தங்க நிறத்திலான வால் பகுதியையும் கொண்டு காணப்பட்டதாக சித்திரிக்கப்பட்டுள்ளது. மேலும், ஃபீனிக்ஸ் பறவையின் அலகு சேவலுடையது போல இருக்கும். அதன் முகம், தைலான் குருவியினுடையது போலிருக்கும். பாம்பின் கழுத்து, வாத்தின் மார்பு, ஆமையின் முதுகு, கலைமானின் கால்கள், மீனின் வாலைக் கொண்டிருக்கும் அழகான பறவையாக அது உருவகப்படுத்தப்படுகிறது.</p>"
            },
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/e5dd98d7-3ea1-4bd9-8141-f6706f03ebe2",
              type: "title",
              "family-id": "4db93564-ee87-43c4-b64a-f4c047127bed",
              title: "",
              id: "e5dd98d7-3ea1-4bd9-8141-f6706f03ebe2",
              metadata: {},
              subtype: null,
              text:
                "ஃபீனிக்ஸ் பறவை, நமது புராணங்களில் மட்டுமே குறிப்பிடப்பட்டு வந்திருக்கிறது. இந்தப் பறவை பாரசீகம், கிரேக்கம், எகிப்து மற்றும் சீனா ஆகிய நாடுகளின் புராணக் கதைகளில் இடம்பெற்ற கற்பனையான ஒரு நெருப்புப் பறவை. ஃபீனிக்ஸ் "
            },
            {
              description: "",
              "image-metadata": {
                "mime-type": "image/jpeg",
                width: 600,
                height: 600,
                "focus-point": [334, 91]
              },
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/fbdec162-da95-492a-be73-62ae43fb71bb",
              type: "image",
              "family-id": "0ebe7494-6687-4d7a-ac52-2ea0386e8dae",
              "image-attribution": "",
              title: "Politics",
              id: "fbdec162-da95-492a-be73-62ae43fb71bb",
              "image-s3-key": "vikatan/2019-01/92684d38-b786-44d6-96e0-510781716d75/143244_thumb.jpg",
              metadata: {},
              subtype: null
            }
          ],
          "card-updated-at": 1548825691430,
          "content-version-id": "a33f34d8-7e3c-4050-9e72-5c8c152a5665",
          "card-added-at": 1547532779906,
          status: "draft",
          id: "8a72c47d-5063-445f-90f4-02b9649a0c9a",
          "content-id": "8a72c47d-5063-445f-90f4-02b9649a0c9a",
          version: 5,
          metadata: {
            "social-share": {
              shareable: false,
              title:
                "அமெரிக்காவில், சான்ஃ மாகாணத்தின் கொடியிலும் ஃபீனிக்ஸ் பறவை இடம் பெற்றுள்ளதைக் காண முடியும். பெற்றுள்ளதைக் காண முடியும் - Listicle story",
              message: "ssm",
              image: {
                key: "vikatan/2019-01/92684d38-b786-44d6-96e0-510781716d75/143244_thumb.jpg",
                url: null,
                attribution: "",
                caption: null,
                metadata: {
                  "mime-type": "image/jpeg",
                  width: 600,
                  height: 600,
                  "focus-point": [334, 91]
                }
              }
            }
          }
        },
        {
          "story-elements": [
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/3f46f06e-f69d-4b22-9125-df277091b806",
              type: "title",
              "family-id": "c1a07670-a495-41aa-9ba0-91ecf5895409",
              title: "",
              id: "3f46f06e-f69d-4b22-9125-df277091b806",
              metadata: {},
              subtype: null,
              text:
                "ஃபீனிக்ஸ் பறவை, தனது ஆயுள் முடிந்துவிட்டது என்று உணரும் நேரத்தில், தாமாகவே ஒரு மரத்தின் சிறு கிளைகளை ஒடித்துக் கூடு ஒன்றை அமைத்து, அதில் "
            },
            {
              description: "",
              "image-metadata": {
                "mime-type": "image/jpeg",
                width: 600,
                height: 600,
                "focus-point": [330, 120]
              },
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/8aa3d46e-33f2-42ef-b564-341e3c465034",
              type: "image",
              "family-id": "a7fe59d2-59b0-43d7-9d96-a412eb10b1ad",
              "image-attribution": "",
              title: "",
              id: "8aa3d46e-33f2-42ef-b564-341e3c465034",
              "image-s3-key": "vikatan/2019-01/1ec35b12-4d07-4b13-9201-a1dc167bdba2/143264_thumb.jpg",
              metadata: {},
              subtype: null
            },
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/f8cf502e-565e-4a09-ab56-6aae93a143b2",
              type: "text",
              "family-id": "3870b59c-dfdb-4162-b9c9-1d488412f3fd",
              title: "",
              id: "f8cf502e-565e-4a09-ab56-6aae93a143b2",
              metadata: {},
              subtype: null,
              text:
                "<p>தனக்குதானே தீ வைத்துக்கொள்ளும். தீ வைத்துக்கொண்ட ஃபீனிக்ஸ் பறவையும் அதன் கூடும் முற்றாக எரிந்து தீர்ந்ததும், அதில் எஞ்சிய சாம்பலில் இருந்து புதிய ஃபீனிக்ஸ் பறவை அல்லது புதிய ஃபீனிக்ஸ் பறவையின் முட்டை தோன்றுவதாகவும், அதிலிருந்து அழகான சிறிய ஃபீனிக்ஸ் பறவை ஒன்று வெளியே வரும் எனவும் சொல்லப்படுகிறது. இவ்வாறு மீண்டும் பிறக்கும் ஃபீனிக்ஸ் பறவைதான் வாழ்நாளைத் தானே நிர்ணயித்துக்கொண்டு வாழத் தொடங்கும் எனப் புராணத்தில் குறிப்பிடப்பட்டுள்ளது.</p>"
            }
          ],
          "card-updated-at": 1547533438541,
          "content-version-id": "ede35e38-93bf-4bf9-bb78-58b871936126",
          "card-added-at": 1547532779906,
          status: "draft",
          id: "cf44f29c-3a75-450a-8756-e46dbbb4f18f",
          "content-id": "cf44f29c-3a75-450a-8756-e46dbbb4f18f",
          version: 4,
          metadata: {
            "social-share": {
              shareable: false,
              title:
                "அமெரிக்காவில், சான்ஃ மாகாணத்தின் கொடியிலும் ஃபீனிக்ஸ் பறவை இடம் பெற்றுள்ளதைக் காண முடியும். பெற்றுள்ளதைக் காண முடியும் - Listicle story",
              message: "ssm",
              image: {
                key: "vikatan/2019-01/1ec35b12-4d07-4b13-9201-a1dc167bdba2/143264_thumb.jpg",
                url: null,
                attribution: "",
                caption: null,
                metadata: {
                  "mime-type": "image/jpeg",
                  width: 600,
                  height: 600,
                  "focus-point": [330, 120]
                }
              }
            }
          }
        },
        {
          "story-elements": [
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/f0e11f69-4bbe-4c31-b7eb-75e66a3d2cc3",
              type: "title",
              "family-id": "6793652e-d255-4178-948d-30f42abe4318",
              title: "",
              id: "f0e11f69-4bbe-4c31-b7eb-75e66a3d2cc3",
              metadata: {},
              subtype: null,
              text:
                "ஃபீனிக்ஸ் பறவையின் நிறம் பற்றி ஒவ்வொரு புராணக்கதைகளிலும் ஒவ்வொரு விதமாகச் சொல்லப்பட்டிருக்கிறது. இது, 500 முதல் 1,000 வருடங்கள் வரை வாழ்ந்ததாகவும் "
            },
            {
              description: "",
              "image-metadata": {
                "mime-type": "image/jpeg",
                width: 600,
                height: 600,
                "focus-point": [509, 233]
              },
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/7d5f9d50-9940-4a23-b0e0-d482b4922314",
              type: "image",
              "family-id": "ff5089aa-603a-4a2a-a68a-284f9afc7f44",
              "image-attribution": "",
              title: "",
              id: "7d5f9d50-9940-4a23-b0e0-d482b4922314",
              "image-s3-key": "vikatan/2019-01/251858fb-0ab5-4f46-950d-8b2d99ad5fd2/143240_thumb.jpg",
              metadata: {},
              subtype: null
            },
            {
              description: "",
              "page-url": "/story/9ef3a1ff-18a4-4c28-99dc-d0a9bfe9ef9d/element/56a40050-ca29-4114-97da-4ae96b576d30",
              type: "text",
              "family-id": "9f5dd84e-5871-4f26-9493-014b629ab40d",
              title: "",
              id: "56a40050-ca29-4114-97da-4ae96b576d30",
              metadata: {},
              subtype: null,
              text:
                "<p>குறிப்பிடப்பட்டுள்ளது. கிறிஸ்தவ புராணக் கதைகளிலும், சீன ஓவியங்களில் உள்ள குறிப்புகளிலும் சில அரேபியக் கதைகளிலும் ஃபீனிக்ஸ் பறவை குறிப்பிடப்படுகிறது. சில வர்ணனைகளில் வேறுபாடுகள் இருந்தாலும், ஃபீனிக்ஸ் பறவை குணங்களில் சொல்லப்படும் கருத்துகள் பொதுவாக ஒத்துப்போகிறது.</p>"
            }
          ],
          "card-updated-at": 1547533359010,
          "content-version-id": "62cc1ab7-8195-4a48-844a-1a09286b2a21",
          "card-added-at": 1547532779906,
          status: "draft",
          id: "66dd045e-1f90-4852-8627-e14681be3aaf",
          "content-id": "66dd045e-1f90-4852-8627-e14681be3aaf",
          version: 3,
          metadata: {
            "social-share": {
              shareable: false,
              title:
                "அமெரிக்காவில், சான்ஃ மாகாணத்தின் கொடியிலும் ஃபீனிக்ஸ் பறவை இடம் பெற்றுள்ளதைக் காண முடியும். பெற்றுள்ளதைக் காண முடியும் - Listicle story",
              message: "ssm",
              image: {
                key: "vikatan/2019-01/251858fb-0ab5-4f46-950d-8b2d99ad5fd2/143240_thumb.jpg",
                url: null,
                attribution: "",
                caption: null,
                metadata: {
                  "mime-type": "image/jpeg",
                  width: 600,
                  height: 600,
                  "focus-point": [509, 233]
                }
              }
            }
          }
        }
      ],
      contributors: [
        {
          "role-name": "author",
          authors: [
            {
              name: "சுரேஷ் கண்ணன்"
            },
            {
              name: "சுரேஷ் ஆனந்த"
            }
          ]
        },
        {
          "role-name": "photographer",
          authors: [
            {
              name: "சுரேஷ் கண்ணன்"
            }
          ]
        }
      ],
      headline: "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா பிக் பாஸ் கலாசாரம்?!",
      subheadline:
        "`கல்லூரி’, `பரதேசி’, `ஜோக்கர்’ போன்ற திரைப்படங்களுக்கு ஒளிப்பதிவு செய்ததன் மூலம் தமிழ் சினிமாவில் கவித்துவமான, தனக்கென தனி அடையாளத்தைப் பெற்றவர் ",
      alternative: {
        home: {
          default: {
            headline: "தஞ்சை: கல்லூரி விழாவில் புதுச்சேரி முதல்வர்",
            "hero-image": {
              "hero-image-metadata": {
                width: 1088,
                height: 550,
                "mime-type": "image/jpeg",
                "focus-point": [300, 300]
              },

              "hero-image-s3-key": "vikatan/2019-01/da562430-208f-4cc0-a09a-16077ec60edb/143210_thumb.jpg",
              "hero-image-caption": "மொழிகள் வேறுபட்டாலும், alt caption",
              "hero-image-attribution": "மொழிகள் வேறுபட்டாலும்,&nbsp; alt attribution"
            }
          }
        }
      },
      engagement: {
        total: 100,
        shares: 27,
        comments: 73
      },
      slug: "story-slug",
      "hero-image-metadata": {
        width: 636,
        height: 464,
        "mime-type": "image/jpeg",
        "focus-point": [300, 200]
      },
      "hero-image-s3-key": "vikatan/2019-01/0bad1960-9f5d-42f2-80d9-fcc49ead2b0a/Ilayaraja_Wallpaper_17318_22449.jpg",
      "hero-image-caption": "some caption",
      "published-date": "ஜூலை 14"
    },
    data
  );
};

export const generateCollection = ({ stories = 0, subCollections = [], type = null, itemMeta = {} } = {}) => {
  let typeArr = [];
  if (type) {
    typeArr.push({ key: type, name: type });
  }
  let items = subCollections;
  Array(stories)
    .fill({ type: "story", ...itemMeta })
    .forEach((item, index) => {
      const story = generateStory();
      let itm = Object.assign({}, item, { id: story.id, story });
      itm.story.headline += index + 1;
      itm.story.alternative.home.default.headline += index + 1;
      items.push(itm);
    });
  return {
    type: "collection",
    name: "விகடன் இதழ்களிலிருந்து",
    id: parseInt(Math.random() * 10 ** 10),
    slug: "/collection-slug",
    pagePath: "/collection/collection-slug",
    metadata: {
      "issue-date": "2015-12-31T18:30:00.000Z",
      "issue-id": parseInt(Math.random() * 10 ** 4),
      "cover-image": {
        "cover-image-url":
          "https://thumbor-stg.assettype.com/vikatan%2F2019-01%2F9f9759b3-1ace-47f2-ba38-c2218d6bf2e9%2F143184_thumb.jpg",
        "cover-image-metadata": {
          width: 600,
          height: 600,
          "mime-type": "image/jpeg",
          "focus-point": [355, 204]
        },
        "cover-image-s3-key": "vikatan/2019-01/f0b702ac-bfd1-4dd6-8e33-52cbb0bb3153/143203_thumb.jpg",
        caption: "கமலே கவலைப்படும"
      },
      magazine: {
        id: 2,
        name: "Junior Vikatan"
      },
      type: typeArr,
      snapshot: {
        body:
          "<p>பற்றி மேலும் தெரிந்து கொள்ளுங்கள் கருணாநிதி</p>" +
          "<p>வெட்கக்கேடு மானக்கேடு! - பழனிசாமி அரசுக்கு எதிராகப் பொங்கிய மாணவர்கள்</p>" +
          "<p>வெட்கக்கேடு மானக்கேடு! - பழனிசாமி அரசுக்கு எதிராகப் பொங்கிய மாணவர்கள்</p>" +
          "<p>வெட்கக்கேடு மானக்கேடு! - பழனிசாமி அரசுக்கு எதிராகப் பொங்கிய மாணவர்கள்</p>" +
          "<p>வெட்கக்கேடு மானக்கேடு! - பழனிசாமி அரசுக்கு எதிராகப் பொங்கிய மாணவர்கள்</p>"
      }
    },
    summary: "வெட்கக்கேடு மானக்கேடு! - பழனிசாமி அரசுக்குം ",
    items: items
  };
};

export const generateCollections = (count = 0) => {
  let collections = [];
  Array(count)
    .fill(0)
    .forEach(() => {
      collections.push(generateCollection());
    });
  return collections;
};

export const generateSubMenu = () => {
  return {
    items: [
      {
        "tag-name": null,
        "item-id": 22564,
        rank: 5493,
        title: "Link 1",
        "item-type": "section",
        "section-slug": "gurupeyarchi",
        "tag-slug": null,
        id: 5493,
        "parent-id": null,
        url: "https://vikatan-web.qtstage.io/section/gurupeyarchi",
        "section-name": "அமெரிக்காவில்",
        data: {
          color: "#c7c7c7"
        },
        items: [
          {
            "tag-name": null,
            "item-id": 22384,
            rank: 5494,
            title: "Link 2",
            "item-type": "section",
            "section-slug": "cinema",
            "tag-slug": null,
            id: 5494,
            "parent-id": 5493,
            url: "https://vikatan-web.qtstage.io/section/cinema",
            "section-name": "அமெரிக்காவில்",
            data: {
              color: "#f7f7f7"
            }
          },
          {
            "tag-name": null,
            "item-id": 23089,
            rank: 5504,
            title: "Child 1",
            "item-type": "section",
            "section-slug": "dry6feb2019",
            "tag-slug": null,
            id: 5504,
            "parent-id": 5493,
            url: "https://vikatan-web.qtstage.io/section/dry6feb2019",
            "section-name": "அமெரிக்காவில்",
            data: {
              color: "#000000"
            }
          }
        ]
      }
    ]
  };
};

export const generateZodiac = () => [
  {
    type: "aries",
    display_name: "1மேஷம்"
  },
  {
    type: "taurus",
    display_name: "2மேஷம்"
  },
  {
    type: "gemini",
    display_name: "3மேஷம்"
  },
  {
    type: "cancer",
    display_name: "4மேஷம்"
  },
  {
    type: "leo",
    display_name: "5மேஷம்"
  },
  {
    type: "virgo",
    display_name: "6மேஷம்"
  },
  {
    type: "libra",
    display_name: "7மேஷம்"
  },
  {
    type: "scorpio",
    display_name: "8மேஷம்"
  },
  {
    type: "sagitarius",
    display_name: "9மேஷம்"
  },
  {
    type: "capricorn",
    display_name: "10மேஷம்"
  },
  {
    type: "aquarius",
    display_name: "11மேஷம்"
  },
  {
    type: "pisces",
    display_name: "12மேஷம்"
  }
];

export const generateMagazineIssues = () => {
  const collections = generateCollections(8);
  for (let i = 0; i < collections.length; i++) {
    collections[i].metadata["entities"] = {
      collectionEntities: {
        magazine: [
          {
            id: 115649,
            name: "Sakthi சக்தி விகடன்P",
            type: "magazine",
            "entity-type-id": 72
          }
        ]
      }
    };
  }
  const magazine = {
    properties: {
      code: "sakthi",
      description:
        "சக்தி விகடன் விகடன் குழுமத்தில் இருந்து, மாதம் இருமுறை வெளியாகும் ஆன்மிக இதழ். புராண- இதிகாசங்கள், ஆலயங்கள் பற்றிய கட்டுரைகள், மகான்களின் வரலாறு, திருவிழாக்கள் பற்றிய தகவல்கள் என ஆன்மிகம் மற்றும் அதுசார்ந்த அற விஷயங்களைத் தாங்கி வரும் சக்திவிகடனின் முதல் இதழ், தாரண வருடப் பிறப்பன்று, (இதழ் தேதி: 19.4.2004) வெளியானது. முதியவர்கள் மட்டுமல்லாது இளைஞர்களும் ஆன்மிகத்தை அறிந்து, நாட்டம் கொள்ளும் வகையில் ஆன்மிகம் சார்ந்த தன்னம்பிக்கைக் கட்டுரைகளை வெளியிட்டு, அவர்களுக்கு ஒழுக்க நெறிகளை ஊட்டி அற வழியில் செலுத்தி வருகிறது. ஆன்மிகம் தொடர்பான ஐயங்களைத் தகுந்த பதில்கள், விளக்கங்கள் மூலம் போக்கி வாசகர்களுக்கு ஒரு தெளிவை ஏற்படுத்துகிறது",
      "actual-price": "650",
      "discounted-price": "399"
    },
    "updated-at": 1552470441360,
    slug: null,
    "publisher-id": 662,
    name: "Sakthi சக்தி விகடன்P",
    type: "magazine",
    "entity-type-id": 72,
    "deleted-at": null,
    collections: collections,
    "created-by": 283645,
    id: 115649,
    "last-updated-by": 287624,
    "created-at": 1549610993633
  };
  return magazine;
};
