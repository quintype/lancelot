import React from "react";
import { withStore } from "../../../../storybook/index";
import { Icon, ZodiacIcon } from "./index";
import menuIcons from "./fixture";

withStore("Atoms/Icon", {
  qt: {
    config: {
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => (
    <div style={{ fontSize: "50px", backgroundColor: "var(--off-white)" }}>
      <style>{".icon {color: #4a4a4a}"}</style>
      {story()}
    </div>
  ))
  .add("aries", () => {
    return <ZodiacIcon className="icon" type="aries" />;
  })
  .add("taurus", () => {
    return <ZodiacIcon className="icon" type="taurus" />;
  })
  .add("gemini", () => {
    return <ZodiacIcon className="icon" type="gemini" />;
  })
  .add("cancer", () => {
    return <ZodiacIcon className="icon" type="cancer" />;
  })
  .add("leo", () => {
    return <ZodiacIcon className="icon" type="leo" />;
  })
  .add("virgo", () => {
    return <ZodiacIcon className="icon" type="virgo" />;
  })
  .add("libra", () => {
    return <ZodiacIcon className="icon" type="libra" />;
  })
  .add("scorpio", () => {
    return <ZodiacIcon className="icon" type="scorpio" />;
  })
  .add("sagitarius", () => {
    return <ZodiacIcon className="icon" type="sagitarius" />;
  })
  .add("capricorn", () => {
    return <ZodiacIcon className="icon" type="capricorn" />;
  })
  .add("aquarius", () => {
    return <ZodiacIcon className="icon" type="aquarius" />;
  })
  .add("pisces", () => {
    return <ZodiacIcon className="icon" type="pisces" />;
  })
  .add("android", () => {
    return <Icon className="icon" type="android" />;
  })
  .add("androidSmall", () => {
    return <Icon className="icon" type="android-small" />;
  })
  .add("angleLeft", () => {
    return <Icon className="icon" type="angle-left" />;
  })
  .add("angleRight", () => {
    return <Icon className="icon" type="angle-right" />;
  })
  .add("arrowRight", () => {
    return <Icon className="icon" type="arrow-right" />;
  })
  .add("breakingNews", () => {
    return <Icon className="icon" type="breaking-news" />;
  })
  .add("canvas", () => {
    return <Icon className="icon" type="canvas" />;
  })
  .add("clapboard", () => {
    return <Icon className="icon" type="clapboard" />;
  })
  .add("clipboard", () => {
    return <Icon className="icon" type="clipboard" />;
  })
  .add("comment", () => {
    return <Icon className="icon" type="comment" />;
  })
  .add("email", () => {
    return <Icon className="icon" type="email" />;
  })
  .add("facebook", () => {
    return <Icon className="icon" type="facebook" />;
  })
  .add("facebookBg", () => {
    return <Icon className="icon" type="facebook-bg" />;
  })
  .add("fallbackImage", () => {
    return <Icon className="icon" type="fallback-image" />;
  })
  .add("gallery", () => {
    return <Icon className="icon" type="gallery" />;
  })
  .add("gplus", () => {
    return <Icon className="icon" type="gplus" />;
  })
  .add("group", () => {
    return <Icon className="icon" type="group" />;
  })
  .add("instagram", () => {
    return <Icon className="icon" type="instagram" />;
  })
  .add("ios", () => {
    return <Icon className="icon" type="ios" />;
  })
  .add("iosSmall", () => {
    return <Icon className="icon" type="ios-small" />;
  })
  .add("lineArrowNext", () => {
    return <Icon className="icon" type="line-arrow-next" />;
  })
  .add("lineArrowPrev", () => {
    return <Icon className="icon" type="line-arrow-prev" />;
  })
  .add("linkedin", () => {
    return <Icon className="icon" type="linkedin" />;
  })
  .add("minus", () => {
    return <Icon className="icon" type="minus" />;
  })
  .add("pen", () => {
    return <Icon className="icon" type="pen" />;
  })
  .add("photo", () => {
    return <Icon className="icon" type="photo" />;
  })
  .add("plus", () => {
    return <Icon className="icon" type="plus" />;
  })
  .add("rss", () => {
    return <Icon className="icon" type="rss" />;
  })
  .add("search", () => {
    return <Icon className="icon" type="search" />;
  })
  .add("share", () => {
    return <Icon className="icon" type="share" />;
  })
  .add("shareAlt", () => {
    return <Icon className="icon" type="share-alt" />;
  })
  .add("sliderNext", () => {
    return <Icon className="icon" type="slider-next" />;
  })
  .add("sliderPrev", () => {
    return <Icon className="icon" type="slider-prev" />;
  })
  .add("speaker", () => {
    return <Icon className="icon" type="speaker" />;
  })
  .add("twitter", () => {
    return <Icon className="icon" type="twitter" />;
  })
  .add("user", () => {
    return <Icon className="icon" type="user" />;
  })
  .add("video", () => {
    return <Icon className="icon" type="video" />;
  })
  .add("vikatanTV", () => {
    return <Icon className="icon" type="vikatan-tv" />;
  })
  .add("whatsapp", () => {
    return <Icon className="icon" type="whatsapp" />;
  })
  .add("youtube", () => {
    return <Icon className="icon" type="youtube" />;
  })
  .add("Menu Icons", () => {
    return (
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {menuIcons.map((iconType, index) => (
          <li key={`menu-${index}`}>
            <Icon className="icon" type={iconType} />
          </li>
        ))}
      </ul>
    );
  });
