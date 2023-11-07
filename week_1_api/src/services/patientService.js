import {
  getAllPatientsDB,
  getPatientByIdDB,
  createNewPatientDB,
} from "../database/Patient.js";

export const getAllPatientsService = async () => {
  const patients = await getAllPatientsDB();

  return patients;
};

export const getPatientByIdService = async (id) => {
  const patient = getPatientByIdDB(id);
  console.log("🚀 ~ file: patientService.js:15 ~ getPatientByIdService ~ patient:", patient)
  return patient;
};

export const createPatientService = async (newPatient) => {
  const patient = await createNewPatientDB(newPatient);

  return patient;
};
