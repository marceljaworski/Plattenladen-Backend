import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    year: {
        type: Number,
    },
    picture: {
        type: String,
    },
    price: {
        type: String,
    },
   
 
},{versionKey: false})
const Product = mongoose.model("Product", productSchema);

export const getAll = async () => {
    const products = await Product.find();
    return products;
};

export default Product;
