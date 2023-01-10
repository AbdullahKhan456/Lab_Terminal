const express = require("express");
const Router = express.Router();
const Product = require("../../models/productModel");

Router.post("/", async (req, res) => {
  let product = new Product(req.body);
  await product.save();
  res.send(product);
});

Router.get("/", async (req, res) => {
  let products = await Product.find();
  res.send(products);
});

Router.get("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if(!product){
    return res.send("The product no found")
   }
  res.send(product);
});

Router.delete("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if(!product){
    return res.send("The product not found")
   }
  await product.delete();
  res.send(product);
});

Router.put("/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);
    if(!product){
      return res.send("The product not found")
    }
    product.title = req.body.title;
    product.description = req.body.description;
    await product.save();
    res.send(product);
  });
  
module.exports = Router;
