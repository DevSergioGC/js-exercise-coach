import {
  getAllPatientsDB,
  getPatientByIdDB,
  createNewPatientDB,
  updatedPatientDB,
  deletePatientDB,
} from "../database/Patient.js";

export const getAllPatientsService = () => {
  const patients = getAllPatientsDB();

  return patients;
};

export const getPatientByIdService = (id) => {
  const patient = getPatientByIdDB(id);
  return patient;
};

export const createPatientService = (newPatient) => {
  const patient = createNewPatientDB(newPatient);
  return patient;
};

export const updatePatientService = (id, changes) => {
  const updatedPatient = updatedPatientDB(id, changes);
  return updatedPatient;
};

export const deletePatientService = (id) => {
  deletePatientDB(id);
};
