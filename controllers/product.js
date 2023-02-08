import * as Product from "../models/Product.js";

export const getAll = async (req, res, next) => {
    try {
        const result = await Product.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    };
};