import express from "express";
import { TaskController } from "./../controllers/index.js";

const router = express.Router();

// http://localhost:5000/api/v1/task

router
  .route("/")
  // - GET
  .get((req, res) => {})
  // - POST
  .post(TaskController.AddTask);

// http://localhost:5000/api/v1/task/:id

router
  .route("/:id")
  // - PUT
  .put((req, res) => {})
  // - DELETE
  .delete((req, res) => {});

export default router;
