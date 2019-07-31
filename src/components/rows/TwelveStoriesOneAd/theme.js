import React from "react";

const configForRow = [
  {
    row: {
      theme: "light",
      showCollectionName: false,
      collectionDesign: "foobar"
    }
  },
  // {
  //   row1: {
  //     theme: "light",
  //     showCollectionName: false,
  //     collectionDesign: "foobar"
  //   }
  // },
  // {
  //   row2: {
  //     theme: "light",
  //     showCollectionName: false,
  //     collectionDesign: "foobar"
  //   }
  // },
  // {
  //   row3: {
  //     theme: "light",
  //     showCollectionName: false,
  //     collectionDesign: "foobar"
  //   }
  // },
  // {
  //   row4: {
  //     theme: "light",
  //     showCollectionName: false,
  //     collectionDesign: "foobar"
  //   }
  // },
  // {
  //   row5: {
  //     theme: "light",
  //     showCollectionName: false,
  //     collectionDesign: "foobar"
  //   }
  // },
  {
    CustomizableStoryCard1: {
      showAuthor: true,
      showDate: false,
      border: true,
      theme: "light"
    }
  },
  {
    CustomizableStoryCard2: {
      showAuthor: true,
      showDate: false,
      border: true,
      theme: "light"
    }
  },
  {
    CustomizableStoryCard3: {
      showAuthor: true,
      showDate: false,
      border: true,
      theme: "light"
    }
  },
  {
    CustomizableStoryCard4: {
      showAuthor: true,
      showDate: false,
      border: true,
      theme: "light"
    }
  }
];

const ThemeContext = React.createContext(configForRow);
export default ThemeContext;
