# NYT Article Search - Project Files

:arrow_upper_right:: https://nytarticlesearch.herokuapp.com/

This project contains step-by-step development process files for a basic CRUD app that demonstrates the use of [NYT Article Search API](https://developer.nytimes.com/article_search_v2.json).

The app utilizes React to build and route UI components, and also Node, Express, and MongoDB to retrieve and delete bookmarked articles.

```
.
├── app
    ├── components
        ├── Search
            ├── Query.js
            └── Results.js
        ├── Search.js
        ├── Bookmarks.js
        └── Main.js
    ├── utils
        └── helper.js
    ├── routes.js
    └── app.js
├── public
    └── index.html
├── server
    └── Article.js
├── webpack.config.js
├── package.json
└── server.js
```

## Homework Tips

* Step 0 _ UI

  - Design and build static UI elements that will be needed for future components


* Step 1 _ Setup

  - Create the initial app scaffold for MERN, including:
    - Node
    - Express
    - Webpack


* Step 2 _ Components

  - Translate the static markup from the initial `index.html` into React components
  - Build out the components needed for Search.js (Query.js, Results.js) and Bookmarks.js


* Step 3 _ Routes

  - Configure routing between `/search` and `/bookmarks` to render Search.js and Bookmark.js, respectively, using [React Router](https://reacttraining.com/react-router/)
  - For more help, refer to this [quick start guide](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/quick-start.md) for `react-router-dom`
  - Remember to update `app.js` to render components via the declared routes


* Step 4 _ Render

  - Create the helper function that performs a query search using [NYT Article Search API](http://developer.nytimes.com/article_search_v2.json)
  - Implement render to display search results for Results.js


* Step 5 _ CRUD:

  - If deploying to Heroku, configure a new app with mLab MongoDB add-on
  - Create a connection to MongoDB
  - Create the schema for articles to be stored in database
  - Complete the remaining helper functions to save and delete bookmarks
  - Implement save for Results.js
  - Implement render and delete for Bookmarks.js
  - Optional: Use [Moment.js](https://momentjs.com/) to format publication dates


* For faster development, use `npm run dev` to concurrently run webpack and node.

_package.json_ :

```
"scripts": {
    "start": "node server.js",
    "build": "webpack -w",
    "dev": "concurrently --kill-others \"npm run build\" \"npm start\""
  }
```

### Demo
![Demo GIF](demo/demo.gif)

## Copyright

Coding Boot Camp © 2017. All Rights Reserved.
