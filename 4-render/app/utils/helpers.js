// What is axios? - Promise based HTTP client for the browser and node.js
// Send async HTTP request to REST endpoints and perform CRUD operations
// XMLHttpRequest
import axios from "axios";

// NYT API key
// https://developer.nytimes.com/signup
var apikey = "1a2e647b3419420db72c186861a5c8db";

const helpers = {

  runQuery: function(topic, startYr, endYr) {

    // cleans up format of search terms
    var q = topic.trim();
    var begin_date = startYr.trim() + "0101";
    var end_date = endYr.trim() + "1231";

    console.log("--- RUNS QUERY ---");

    // runs search query
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "apikey": apikey,
        "q": q,
        "begin_date": begin_date,
        "end_date": end_date
      }
    }).then(function(results) {
      console.log(results.data.response);
      return results.data.response;
    });
  }
};

export default helpers;
