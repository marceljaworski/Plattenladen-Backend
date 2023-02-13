import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logMiddleware from "./middlewares/log.js";
import apiRoutes from "./routes/api.js"
import cors from "cors";

import "./lib/mongoose.js";

const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use(cors())

const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use("/api", apiRoutes);
app.use(express.static("dist"));

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).end();
});

