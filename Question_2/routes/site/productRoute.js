const express = require("express");
const Router = express.Router();
const Products = require("../../models/productModel");

Router.get("/", async (req, res) => {
  let products = await Products.find();
  res.render("LandingPage", {products});
});

Router.get("/products", async (req, res) => {
    let products = await Products.find();
    res.render("products/product-list", {products});
  });

module.exports = Router;
