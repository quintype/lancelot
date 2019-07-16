// Update the carousel as and when required.
// Make sure to keep the props contract same as nuka carousel

import React, { Component } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import "./styles.m.css";
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: this.props.options.startAt || 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  componentDidMount() {
    if (this.props.children) {
      this.glide = new Glide(this.ref, this.props.options);
      this.glide.mount();
      this.glide.on(["mount.after", "move.after"], () => {
        this.setState({ currentSlide: this.glide.index });
      });
      if (typeof this.props.afterSlide === "function") {
        this.glide.on("run.after", () => {
          // run.after since it doesn't fire when the carousel first loads
          this.props.afterSlide(this.glide.index);
        });
      }
    }
  }

  componentWillUnmount() {
    if (this.props.children) {
      this.glide.destroy();
    }
  }

  renderChildren() {
    return this.props.children.map((child, index) => {
      return (
        <li key={index} className="glide__slide">
          {child}
        </li>
      );
    });
  }

  nextSlide() {
    this.glide.go(">");
  }

  previousSlide() {
    this.glide.go("<");
  }

  goToSlide(index) {
    this.glide.go("=" + index);
  }

  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div ref={ref => (this.ref = ref)} className={`glide ${"glide"} ${this.props.className}`}>
        <div className={`${"glide__track"}`} data-glide-el="track">
          <ul className={`${"glide__slides"}`} styleName="glide__slides">
            {this.renderChildren()}
          </ul>
        </div>
        <div className={`${"glide__arrows"}`}>
          {this.props.renderCenterLeftControls ? (
            <div className="slider-control-centerleft" styleName="center-left-controls">
              {this.props.renderCenterLeftControls({
                previousSlide: this.previousSlide,
                nextSlide: this.nextSlide,
                goToSlide: this.goToSlide,
                totalSlides: this.props.children.length,
                currentSlide: this.state.currentSlide
              })}
            </div>
          ) : null}
          {this.props.renderCenterRightControls ? (
            <div className="slider-control-centerright" styleName="center-right-controls">
              {this.props.renderCenterRightControls({
                previousSlide: this.previousSlide,
                nextSlide: this.nextSlide,
                goToSlide: this.goToSlide,
                totalSlides: this.props.children.length,
                currentSlide: this.state.currentSlide
              })}
            </div>
          ) : null}
        </div>
        {this.props.renderBottomCenterControls ? (
          <div className={`${"glide__bullets"} slider-control-bottomcenter`} styleName="bottom-center-controls">
            {this.props.renderBottomCenterControls({
              previousSlide: this.previousSlide,
              nextSlide: this.nextSlide,
              goToSlide: this.goToSlide,
              totalSlides: this.props.children.length,
              currentSlide: this.state.currentSlide
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

Carousel.displayName = "Carousel";

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  options: PropTypes.object,
  className: PropTypes.string,
  renderCenterLeftControls: PropTypes.func,
  renderCenterRightControls: PropTypes.func,
  renderBottomCenterControls: PropTypes.func,
  afterSlide: PropTypes.func
};

const renderCenterLeftControls = ({ previousSlide }) => (
  <button title="previous slide" aria-label="previous slide" role="button" onClick={previousSlide}>
    Prev
  </button>
);

renderCenterLeftControls.propTypes = {
  previousSlide: PropTypes.func
};

const renderCenterRightControls = ({ nextSlide }) => (
  <button title="next slide" aria-label="next slide" role="button" onClick={nextSlide}>
    Next
  </button>
);

renderCenterRightControls.propTypes = {
  nextSlide: PropTypes.func
};

Carousel.defaultProps = {
  renderCenterLeftControls,
  renderCenterRightControls
};
