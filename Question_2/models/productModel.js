const mongoose =  require("mongoose");
const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    image_url:String
})

const Product = mongoose.model("Product",productSchema);
module.exports= Product;