import DB from "./db.json" assert { type: 'json' };
// import { saveToDatabase } from "./utils";

const getAllPatients = async () => {
  return DB.patients;
};
