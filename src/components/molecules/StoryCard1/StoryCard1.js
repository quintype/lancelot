import React from "react";
import { ResponsiveHeroImage } from "@quintype/components";
import { Headline } from "../../atoms/headline/index";
import { SectionTitle1 } from "../../atoms/SectionTitle1/SectionTitle1";
import { AuthorName1 } from "../../atoms/AuthorName1/AuthorName1";
import PropTypes from "prop-types";

import "./storyCard1.m.css";

export const StoryCard1 = ({ story }) => (
  <div styleName="story-card">
    <figure styleName="story-grid-item-image">
      <ResponsiveHeroImage
        story={story}
        aspectRatio={[16, 9]}
        defaultWidth={480}
        widths={[250, 480, 640]}
        sizes="(max-width: 500px) 98vw, (max-width: 768px) 48vw, 23vw"
        imgParams={{ auto: ["format", "compress"] }}
      />
    </figure>
    <div styleName="story-content">
      <SectionTitle1 story={story} />
      <Headline text={story.headline} />
      <AuthorName1 story={story} />
    </div>
  </div>
);

StoryCard1.propTypes = {
  story: PropTypes.object
};
