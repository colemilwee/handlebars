const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`))