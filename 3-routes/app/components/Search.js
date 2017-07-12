import React, { Component } from "react";
import Query from "./Search/Query";
import Results from "./Search/Results";

export default class Search extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <Query />
        <Results />
      </div>
    );
  }
};
