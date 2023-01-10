const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require("express-ejs-layouts");
const ProductRouter = require("./routes/api/productRoute");
const SiteRouter = require("./routes/site/productRoute")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use("/api/products", ProductRouter);
app.use(SiteRouter);

app.get("/buy", (req, res) => {
  res.render("buy-page");
});
app.get("/services", (req, res) => {
  res.render("service-page");
});
app.get("/about", (req, res) => {
  res.render("about-haier-page");
});


mongoose
  .connect("mongodb://localhost/haierDataBase")
  .then(() => {
    console.log("connected to mongodb:localhost//haierDataBase");
  })
  .catch(() => {
    console.log("unable to connect");
  });

  app.listen(4000, () => {
    console.log("server running at 4000 port");
  });
  