const Patient = require("../database/Patient");

const getAllPatients = async () => {
  const patients = await Patient.getAllPatients();

  return patients;
};

const getPatientById = async (id) => {
  const patient = await Patient.findByPk(id);

  if (!patient) return null;

  return patient;
};

const createPatient = async (newPatient) => {
  const patient = await Patient.create(newPatient);

  return patient;
};
