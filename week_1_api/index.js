import express from "express";
import PacientsRoutes from "./src/routes/pacientsRoutes.js";

// const express = require("express");
// const PacientsRoutes = require("./src/routes/pacientsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/pacients", PacientsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
