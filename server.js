import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logMiddleware from "./middlewares/log.js";
import apiRoutes from "./routes/api.js"
import cors from "cors";

import "./lib/mongoose.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use(cors())

const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use("/api", apiRoutes);
app.use("/", express.static("./dist"));

app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));


app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).end();
});

