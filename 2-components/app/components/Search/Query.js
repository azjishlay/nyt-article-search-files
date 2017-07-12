import React, { Component } from "react";

export default class Query extends Component {
  render() {
    return (
      <div id="query" className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-search" aria-hidden="true"></i>&nbsp;
                    Query
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                <form className="form-horizontal" onSubmit="">
                  <div className="form-group">
                    <label className="col-sm-2 col-md-2 control-label" htmlFor="search"><strong>Topic</strong></label>
                    <div className="col-sm-10 col-md-10">
                      <input
                        className="form-control"
                        id="topic"
                        type="text"
                        value=""
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-md-2 control-label" htmlFor="start"><strong>Start Year</strong></label>
                    <div className="col-sm-4 col-md-4">
                      <input
                        className="form-control"
                        id="startYr"
                        type="number"
                        min="1990"
                        max="2017"
                        step="1"
                        value=""
                        required
                      />
                    </div>
                    <label className="col-sm-2 col-md-2 control-label" htmlFor="end"><strong>End Year</strong></label>
                    <div className="col-sm-4 col-md-4">
                      <input
                        className="form-control"
                        id="endYr"
                        type="number"
                        min="1990"
                        max="2017"
                        step="1"
                        value=""
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-default pull-right">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
};
