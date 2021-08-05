const express = require("express");
const path = require("path");
const db = require("./config/connection");
const fileupload = require("express-fileupload");

// const { authMiddleware } = require("./utils/auth");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload());
app.use(express.static(path.join(__dirname, "uploads")));

app.use(routes);

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
