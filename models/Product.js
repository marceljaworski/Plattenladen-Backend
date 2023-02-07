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
        type: URL,
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
// export const create = async (document) => {    
//     const newUser = new User(document);
//     const result = await newUser.save();
//     return result;
    
// };
// export const getOne = async (filter) => {
//     const user = await User.findOne(filter);
//     return user;
// };
// export const replace = async (userId, data) => {
//     const user = await User.findOneAndReplace({_id: userId}, data, {returnDocument: "after", runValidators: true},);

//     return user;
// };
// export const update = async (userId, data) => {
//     const user = await User.findByIdAndUpdate(userId, data, {new: true, runValidators: true});

//     return user;
// };
// export const deleteOne = async (userId) => {
//     const user = await User.findByIdAndDelete(userId)

//     return user;
// };

export default User;
