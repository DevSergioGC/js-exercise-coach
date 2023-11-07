const express = require("express");
const router = express.Router();
const PacientsController = require("../controllers/pacientsController");

router
    .get("/", PacientsController.getAllPacients)
    .get("/:patient_id", PacientsController.getPacientById)
    .post("/", PacientsController.createPacient)
    .put("/:patient_id", PacientsController.updatePacient)
    .delete("/:patient_id", PacientsController.deletePacient);

module.exports = router;