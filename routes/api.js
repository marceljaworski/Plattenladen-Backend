import { Router } from "express";
import * as product from "../controllers/product.js";

const apiRoutes = Router();

apiRoutes.get("/products", product.getAll);


export default apiRoutes;