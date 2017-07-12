import React, { Component } from "react";

export default class Bookmarks extends Component {
  render() {
    return (
      <div className="bookmarks-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;
                    Bookmarks
                  </strong>
                </h3>
              </div>
              <div className="panel-body">

                {/* If no bookmarks */}
                <ul className="list-group">
                  <li className="list-group-item">
                    <h3 className="text-center"><em>You have no articles bookmarked.</em></h3>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item" key="1">
                    <h3>
                      <button className="btn btn-primary pull-right" onClick="">
                        <i className="fa fa-remove" aria-hidden="true"></i>
                      </button>
                      <a href="" rel="noopener noreferrer" target="_blank"><em>So Oz brought a pair of tinsmith's shears and cut a small, square hole in the left side of the Tin Woodman's breast</em></a>
                    </h3>
                    <p>Date Published: <em>June 4, 2017 12:48 PM ET</em></p>
                  </li>
                  <li className="list-group-item" key="2">
                    <h3>
                      <button className="btn btn-primary pull-right" onClick="">
                        <i className="fa fa-remove" aria-hidden="true"></i>
                      </button>
                      <a href="" rel="noopener noreferrer" target="_blank"><em>Then, going to a chest of drawers, he took out a pretty heart, made entirely of silk and stuffed with sawdust</em></a>
                    </h3>
                    <p>Date Published: <em>June 4, 2017 12:48 PM ET</em></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
