import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/index.js"
import { errorMessage, statusCode, successMessage } from "./helpers/statusHelpers.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port).on("listening", () => {
    console.log(`API server started on port : ${port}`);
});
app.use(express.json());
app.get('/', (req, res) => {
    res.status(statusCode.success).json(successMessage())
})

/**
 * Routes
 */
const baseUrl = "/api";
app.use(baseUrl, router);

app.use((req, res, next) => {
    res.status(statusCode.notfound).json(errorMessage())
});

export {
    app
}
