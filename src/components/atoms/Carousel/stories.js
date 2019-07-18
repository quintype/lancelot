import React from "react";
import storybook from "../../../../storybook/index";

import Carousel from "./index";

function slides() {
  return Array(5)
    .fill(1)
    .map((item, index) => {
      return (
        <div
          key={index}
          style={{
            height: 100,
            width: 100,
            background: "red",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr"
          }}
        >
          <div style={{ gridColumn: "span 2" }}>{index}</div>
          <div style={{ gridColumn: "span 1" }}>{index}</div>
        </div>
      );
    });
}

function options() {
  return {
    type: "carousel",
    perView: 3,
    focusAt: "center",
    breakpoints: {
      800: {
        type: "slider",
        perView: 3,
        focusAt: 0,
        // peek: {left: 0, right: 100},
        gap: 40,
        bound: true
      }
    }
  };
}

storybook("Atoms/Carousel")
  // .add("default", () => <Carousel />)
  .addDecorator(story => <div style={{ width: 500 }}>{story()}</div>)
  .add("default", () => (
    <Carousel
      options={options()}
      renderCenterRightControls={({ nextSlide }) => (
        <button aria-label="next slide" role="button" onClick={nextSlide}>
          next
        </button>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <button aria-label="previous slide" role="button" onClick={previousSlide}>
          prev
        </button>
      )}
    >
      {slides()}
    </Carousel>
  ))
  .add("When no children present", () => (
    <Carousel
      options={options()}
      renderCenterRightControls={({ nextSlide }) => (
        <button aria-label="next slide" role="button" onClick={nextSlide}>
          next
        </button>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <button aria-label="previous slide" role="button" onClick={previousSlide}>
          prev
        </button>
      )}
    />
  ));
