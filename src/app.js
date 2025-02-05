const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const viewTemplates = path.join(__dirname, "../templates/views");
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewTemplates);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Shashank Dave",
    createdBy: "Shashank Dave",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    createdBy: "Shashank Dave",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    createdBy: "Shashank Dave",
  });
});

app.get("/help/*", (req, res) => {
  res.send("Help sub route not found");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Snowing",
    location: "Udaipur",
  });
});

app.get("*", (req, res) => {
  res.send("404 ERROR: Page not found");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
