import express from "express";
import blogRouter from "./controllers/blog.controller.js";
import requestLogger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";
import unknownEndpoints from "./middlewares/unknownEndpoint.js";

const app = express();
app.use(express.json());
app.use(requestLogger)
app.use('/api/blogs', blogRouter)
app.use(unknownEndpoints)
app.use(errorHandler)

export { app };
