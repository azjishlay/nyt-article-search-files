import React, { Component } from "react";

export default class Results extends Component {
  render() {
    return (
      <div id="results" className="row">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong>
                  <i className="fa fa-list-alt" aria-hidden="true"></i>&nbsp;
                  Results
                </strong>
              </h3>
            </div>
            <div className="panel-body">

              {/* If no results */}
              <ul className="list-group">
                <li className="list-group-item">
                  <h3 className="text-center"><em>No articles found!</em></h3>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item" key="1">
                  <h3>
                    <button className="btn btn-primary pull-right" onClick="">
                      <i className="fa fa-bookmark" aria-hidden="true"></i>
                    </button>
                    <a href="" rel="noopener noreferrer" target="_blank"><em>"Well, I must go to Oz and get my heart," said the Woodman</em></a>
                  </h3>
                  <p>Date Published: <em>June 4, 2017 12:48 PM ET</em></p>
                </li>
                <li className="list-group-item" key="2">
                  <h3>
                    <button className="btn btn-primary pull-right" onClick="">
                      <i className="fa fa-bookmark" aria-hidden="true"></i>
                    </button>
                    <a href="" rel="noopener noreferrer" target="_blank"><em>So he walked to the Throne Room and knocked at the door</em></a>
                  </h3>
                  <p>Date Published: <em>June 4, 2017 12:48 PM ET</em></p>
                </li>
                <li className="list-group-item" key="3">
                  <h3>
                    <button className="btn btn-primary pull-right" onClick="">
                      <i className="fa fa-bookmark" aria-hidden="true"></i>
                    </button>
                    <a href="" rel="noopener noreferrer" target="_blank"><em>"Come in," called Oz, and the Woodman entered</em></a>
                  </h3>
                  <p>Date Published: <em>June 4, 2017 12:48 PM ET</em></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
