import React, { Component } from "react";
import Query from "./Search/Query";
import Results from "./Search/Results";
import helpers from "../utils/helpers";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
    this.runQuery = this.runQuery.bind(this);
  }
  runQuery(newTopic, newStartYr, newEndYr) {
    helpers
      .runQuery(newTopic, newStartYr, newEndYr)
      .then(function(data) {
        this.setState({
          results: { docs: data.docs }
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="search-wrapper">
        <Query runQuery={this.runQuery} />
        <Results results={this.state.results} />
      </div>
    );
  }
};
