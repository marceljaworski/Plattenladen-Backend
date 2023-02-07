import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        validate: {
            validator: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
            message: "Please enter a valid email address"
        }
    },
    password: String,
    // address:{
    //     street: String,
    //     houseNumber: {
    //         type: String,
    //         validate: {
    //             validator: (v) => /^[0-9].*$/.test(v),
    //             message: "Please insert some kind of number as House number"
    //         }
    //     },
    //     zipCode: String,
    //     city: String,
    //     country: String,
            
    // },
    
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
