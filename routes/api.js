import { Router } from "express";
import * as product from "../controllers/product.js";
import * as user from "../controllers/user.js";
import validate from "../middlewares/validate.js";
import { postUser } from "./user.schema.js";

const apiRoutes = Router();

apiRoutes.get("/products", product.getAll);
apiRoutes.post("auth/register", validate(postUser), user.create);
apiRoutes.post("auth/login", user.login);


export default apiRoutes;