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
        type: Number,
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
export const getAllSearched = async (search) => {
    
    const result = await Product.find({
        $or: [
            {
                title: { 
                    $regex: '.*' + search + '.*',
                    $options: 'i' 
                }
            }, 
            {
                artist: { 
                    $regex: '.*' + search + '.*',
                    $options: 'i' 
                }
            }
        ]
    });
    return result;

    
};
export const create = async (document) => {    
    const newProduct = new Product(document);
    const result = await newProduct.save();
    return result;
    
};
export const replace = async (id, data) => {
    const result = await Product.findOneAndReplace({_id: id}, data, {returnDocument: "after", runValidators: true},);

    return result;
};
export default Product;
