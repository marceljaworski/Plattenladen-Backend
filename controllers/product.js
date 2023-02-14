import * as Product from "../models/Product.js";

export const getAll = async (req, res, next) => {
    try {
        const result = await Product.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    };
};

export const create = async (req, res, next) => {
    try {
        const result = await Product.create({title: req.body.title, artist: req.body.artist, picture: req.body.picture, year: req.body.year, price: req.body.price});
     
        res.status(201).json(result);
    } catch(error) {
        next(error);
    };
  
};
export const replace = async (req, res, next) => {
    try {
        const result = await Product.replace(req.params.id, req.body)
        res.status(200).json(result);
    }catch(error) {
        next(error);
    };
};