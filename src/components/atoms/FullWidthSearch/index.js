import React from "react";
import PropTypes from "prop-types";
import { SearchBox } from "@quintype/components";
// import Icon from "../../../atoms/icon";

import "./fullWidthSearch.m.css";

function DrawForm({ children }) {
  return (
    <React.Fragment>
      <label htmlFor="searchForm" styleName="label" key={"lable2"}>
        {children}
      </label>
      <button aria-label="search" role="button" styleName="button" type="submit" key={"btn2"}></button>
    </React.Fragment>
  );
}

DrawForm.propTypes = {
  children: PropTypes.element
};

class FullWidthSearch extends React.Component {
  focusInput() {
    if (this.props.isOpen) {
      document.getElementById("searchForm").focus();
    }
  }
  componentDidMount() {
    this.focusInput();
  }
  componentDidUpdate() {
    this.focusInput();
  }
  render() {
    return (
      <div ref={this.props.searchRef} styleName={`base ${this.props.isOpen ? "is-open" : ""}`}>
        <div className="container" styleName="search-wrap">
          <SearchBox
            template={DrawForm}
            inputId="searchForm"
            placeholder="Search"
            onSubmitHandler={this.props.buttonClick}
          />
        </div>
      </div>
    );
  }
}

FullWidthSearch.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  searchRef: PropTypes.func,
  buttonClick: PropTypes.func
};

export default FullWidthSearch;
