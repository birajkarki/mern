// express mongoose morgan http-status dotenv
import dotenv from "dotenv";
import app from "./app.js";
import { ConnectDB } from "./config/db.config.js";

dotenv.config();

const port = process.env.PORT || 8000;
// db connection
ConnectDB();

app.listen(port, () => {
  console.log(`the server is listen at http://localhost:${port}`);
});
