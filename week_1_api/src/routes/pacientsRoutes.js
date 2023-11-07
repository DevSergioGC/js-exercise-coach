import express from "express";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/pacientsController.js";

// const PacientsController = require("../controllers/pacientsController");

const router = express.Router();

router
  .get("/", getAllPatients)
  .get("/:patient_id", getPatientById)
  .post("/", createPatient)
  .put("/:patient_id", updatePatient)
  .delete("/:patient_id", deletePatient);

export default router;
