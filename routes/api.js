import { Router } from "express";
import * as product from "../controllers/product.js";
import * as user from "../controllers/user.js"

const apiRoutes = Router();

apiRoutes.get("/products", product.getAll);
apiRoutes.post("/register", user.create);
apiRoutes.post("/login", user.login);


export default apiRoutes;