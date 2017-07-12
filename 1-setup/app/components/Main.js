import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className="container">

        {/* Navbar */}
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
                >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">NYT Article Scrubber</a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/search">
                    <i className="fa fa-search" aria-hidden="true"></i>&nbsp;
                    Search
                  </a>
                </li>
                <li>
                  <a href="/bookmarks">
                    <i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;
                    Bookmarks
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Jumbotron */}
        <div className="jumbotron text-center">
          <h3><em>Search for and save news articles of interest</em></h3>
        </div>

        {/* Children Components */}

        {/* Footer */}
        <footer>
          <hr />
          <p className="text-center">
            Coding Boot Camp &copy; 2016. All Rights Reserved.
          </p>
        </footer>

      </main>
    );
  }
}
