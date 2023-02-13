import { Router } from "express";
import * as product from "../controllers/product.js";
import * as user from "../controllers/user.js";
import validate from "../middlewares/validate.js";
import { postUser } from "./user.schema.js";
import { productSchema, postProductSchema } from "./product.schema.js";

const apiRoutes = Router();

apiRoutes.get("/products", validate(productSchema), product.getAll);
apiRoutes.post("/products", validate(postProductSchema), product.create);
apiRoutes.post("auth/register", validate(postUser), user.create);
apiRoutes.post("auth/login", user.login);


export default apiRoutes;