import dotenv from "dotenv";
dotenv.config();
import express from "express";
import apiRoutes from "./routes/api.js"
import logMiddleware from "./middlewares/log.js";

import "./lib/mongoose.js";
const app = express();

app.use(logMiddleware);
app.use(express.json());

const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).end();
});

