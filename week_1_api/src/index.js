const express = require("express");
const PacientsRoutes = require("./routes/pacientsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/pacients", PacientsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
