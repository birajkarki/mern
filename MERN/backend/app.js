import express from "express";
import morgan from "morgan";
import Routes from "./routes/index.js";
const app = express();

// middleware
app.use(morgan("dev"));

//routes
app.use("/api/v1", Routes);
export default app;
