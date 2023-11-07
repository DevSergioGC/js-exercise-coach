import DB from "./db.json" assert { type: "json" };
// import Utils from "./utils.js";

export const getAllPatientsDB = () => {
  return DB.patients;
};

export const getPatientByIdDB = (id) => {
  const patient = DB.patients.find((patient) => {
    return patient.patient_id === id;
  });
  console.log("🚀 ~ file: Patient.js:12 ~ patient ~ patient:", patient);
  if (!patient) {
    return;
  }
  return patient;
};

export const createNewPatientDB = (newPatient) => {
  const patient = {
    ...newPatient,
    id: DB.patients[DB.patients.length - 1].patient_id + 1,
  };

  DB.patients.push(patient);
  saveToDatabase(DB);

  return patient;
};
