import React from "react";
import { createDfpAdComponent, refreshDfpAds } from "@quintype/components";
import { get } from "lodash";
import PropTypes from "prop-types";
import "./dfpAd.m.css";
import { produce } from "immer";
import { connect } from "react-redux";
import { getParentSection } from "../../utils/section";

const OUT_OF_PAGE_ADS = ["Inarticle_fork_cinema", "Interstitial", "Roadblock"];
const AD_TYPES_TO_EXCLUDE_FROM_INCREMENTAL_NAMES = [...OUT_OF_PAGE_ADS];

export const NEW_CONFIG = {
  Large_Leaderboard: {
    adUnit: "Large_Leaderboard",
    sizes: [[970, 90], [728, 90], [320, 100], [320, 50]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[970, 90], [728, 90]] },
      { viewport: [500, 0], sizes: [[320, 100], [320, 50]] },
      { viewport: [0, 0], sizes: [[320, 100], [320, 50]] }
    ]
  },
  Leaderboard: {
    adUnit: "Leaderboard",
    sizes: [[978, 90], [728, 90], [320, 100], [320, 50]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[978, 90], [728, 90]] },
      { viewport: [800, 0], sizes: [[320, 100], [320, 50]] },
      { viewport: [0, 0], sizes: [[320, 100], [320, 50]] }
    ]
  },
  Small_Leaderboard: {
    adUnit: "Small_Leaderboard",
    sizes: [[468, 60], [320, 50]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[468, 60]] },
      { viewport: [800, 0], sizes: [[320, 50]] },
      { viewport: [0, 0], sizes: [[320, 50]] }
    ]
  },
  Tower_Left: {
    adUnit: "Tower_Left",
    sizes: [[120, 600]]
  },
  Tower_Right: {
    adUnit: "Tower_Right",
    sizes: [[120, 600]]
  },
  Half_Page: {
    adUnit: "Half_Page",
    sizes: [[300, 600], [300, 250]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[300, 600]] },
      { viewport: [320, 0], sizes: [[300, 250]] },
      { viewport: [0, 0], sizes: [[300, 250]] }
    ]
  },
  Strip_Width: {
    adUnit: "Strip_Width",
    sizes: [[728, 50], [320, 50]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[728, 50]] },
      { viewport: [800, 0], sizes: [[320, 50]] },
      { viewport: [0, 0], sizes: [[320, 250]] }
    ]
  },
  Textlink: {
    adUnit: "Textlink",
    sizes: [[670, 80], [320, 80]],
    viewPortSizeMapping: [
      { viewport: [980, 0], sizes: [[670, 80]] },
      { viewport: [800, 0], sizes: [[320, 80]] },
      { viewport: [0, 0], sizes: [[320, 80]] }
    ]
  },
  Rectangle: {
    adUnit: "Rectangle",
    sizes: [[300, 250]]
  },
  Mobile_Leaderboard: {
    adUnit: "Mobile_Leaderboard",
    sizes: [[320, 100]]
  },
  Full_Page: {
    adUnit: "Full_Page",
    sizes: [[300, 900]]
  },
  Vikatan_widget: {
    adUnit: "Vikatan_widget",
    sizes: [[300, 250]]
  },
  Inarticle_fork_cinema: {
    adUnit: "Inarticle_fork_cinema",
    sizes: [[1, 1]]
  },
  Interstitial: {
    adUnit: "Interstitial",
    sizes: [[1, 1]]
  },
  Roadblock: {
    adUnit: "Roadblock",
    sizes: [[1, 1]]
  },
  Inarticle_fork: {
    adUnit: "Inarticle_fork",
    sizes: [[1, 1]]
  },
  Automated: {
    adUnit: "Automated",
    sizes: [[1, 1]]
  },
  Sticker_mcanvas: {
    adUnit: "Sticker_mcanvas",
    sizes: [[1, 1]]
  },
  Subscription_Lightbox: {
    adUnit: "Subscription_Lightbox",
    sizes: [[1, 1]]
  },
  Mobile_lightbox: {
    adUnit: "Mobile_lightbox",
    sizes: [[1, 1]]
  }
};

function getDfpAdContent(config) {
  return createDfpAdComponent({
    defaultNetworkID: "3849069",
    config: config,
    collapseEmptyDivs: true,
    targeting: function(state) {
      const params = {
        ...config.targetting,
        pageType: get(state, ["qt", "pageType"]),
        host: get(global, ["location", "hostname"])
      };

      if (
        get(state, ["qt", "pageType"]) === "story-page" &&
        get(state, ["qt", "data", "story", "metadata", "sponsored-by"])
      ) {
        params.sponsor = get(state, ["qt", "data", "story", "metadata", "sponsored-by"]);
        return params.sponsor;
      }

      return params;
    }
  });
}

let counterByAdUnitName = {};

class DfpAdBase extends React.Component {
  constructor(props) {
    super(props);
    this.adUnit = this.getNextAdUnitName();
  }

  getNextAdUnitName() {
    if (AD_TYPES_TO_EXCLUDE_FROM_INCREMENTAL_NAMES.includes(this.props.adtype)) {
      return this.props.adtype;
    }

    const adUnitName = `${this.props.adtype}-${this.props.sectionName ? `${this.props.sectionName}-` : ""}${
      this.props.placement
    }`;

    counterByAdUnitName[`${adUnitName}`] = counterByAdUnitName[`${adUnitName}`]
      ? ++counterByAdUnitName[`${adUnitName}`]
      : 1;
    return `${adUnitName}-${counterByAdUnitName[adUnitName]}`;
  }

  componentWillUnmount() {
    const adUnitName = this.adUnit
      .split("-")
      .slice(0, 2)
      .join("-");
    counterByAdUnitName[adUnitName] && --counterByAdUnitName[adUnitName];
  }

  render() {
    if (this.props.disableAds) {
      return <div className={this.props.className} />;
    }

    const adtype = get(this.props, ["adtype"], null);
    if (!adtype || !NEW_CONFIG[adtype]) {
      return null;
    }

    const newConfig = produce(NEW_CONFIG, draft => {
      draft[adtype]["adUnit"] = `${this.adUnit}`;
      draft[adtype]["slotId"] = this.props.slotId;
      draft["targetting"] =
        this.props.placement === "header"
          ? {
              Magazine_leaderboard: [
                "anandavikatan",
                "avalkitchen",
                "avalmanamagal",
                "chuttivikatan",
                "avalvikatan",
                "diwalimalar",
                "doctorvikatan",
                "juniorvikatan",
                "motorvikatan",
                "nanayamvikatan"
              ]
            }
          : undefined;
    });
    const DfpAdContent = getDfpAdContent(newConfig);

    return (
      <div
        className={`${this.props.className} `}
        styleName={`${"ad"} ${OUT_OF_PAGE_ADS.includes(adtype) ? "out-of-page-ad" : ""}`}
      >
        <DfpAdContent {...this.props} />
      </div>
    );
  }
}

DfpAdBase.propTypes = {
  className: PropTypes.string,
  adUnit: PropTypes.string,
  placement: PropTypes.string,
  slotId: PropTypes.string,
  sectionName: PropTypes.string,
  disableAds: PropTypes.string,
  adtype: PropTypes.string
};

function mapStateToProps(state) {
  const section = get(state, ["qt", "data", "section"]);
  const story = get(state, ["qt", "data", "story"]);
  let sectionName;
  if (section) {
    let parentSection = getParentSection(section);
    if (!parentSection) {
      parentSection = section;
    }
    sectionName = get(parentSection, ["slug"]);
  }
  if (story) {
    let parentSection = getParentSection(story.sections[0]);
    if (!parentSection) {
      parentSection = story.sections[0];
    }
    sectionName = get(parentSection, ["slug"]);
  }
  return {
    disableAds: get(state, ["qt", "config", "disableAds"]),
    sectionName
  };
}

export const DfpAd = connect(mapStateToProps)(DfpAdBase);

export { refreshDfpAds };
