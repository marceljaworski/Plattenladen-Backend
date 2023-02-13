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
    return products.map( product => {
        const { _id, ...details } = product._doc;
        return {
            id:product._id,
            ...details
        };
    })
};
export const create = async (document) => {    
    const newProduct = new Product(document);
    const result = await newProduct.save();
    return result;
    
};

export default Product;
