import DB from "./db.json" assert { type: "json" };

export const getAllPatientsDB = () => {
  return DB.patients;
};

export const getPatientByIdDB = (id) => {
  const patient = DB.patients.find((patient) => patient.patient_id == id);
  if (!patient) {
    return;
  }
  return patient;
};

export const createNewPatientDB = (newPatient) => {
  const isAlreadyAdded = DB.patients.findIndex(
    (patient) => patient.email === newPatient.email > -1
  );

  if (isAlreadyAdded) {
    return;
  }

  const patientToInsert = {
    ...newPatient,
    patient_id: DB.patients[DB.patients.length - 1].patient_id + 1,
  };

  DB.patients.push(patientToInsert);
  return patientToInsert;
};

export const updatedPatientDB = (id, changes) => {
  const indexForUpdate = DB.patients.findIndex(
    (patient) => patient.patient_id == id
  );

  if (indexForUpdate === -1) {
    return;
  }

  const updatedPatient = {
    ...DB.patients[indexForUpdate],
    ...changes,
  };

  DB.patients[indexForUpdate] = updatedPatient;
  return updatedPatient;
};

export const deletePatientDB = (id) => {
  const indexForDelete = DB.patients.findIndex(
    (patient) => patient.patient_id == id
  );

  if (indexForDelete === -1) {
    return;
  }

  DB.patients.splice(indexForDelete, 1);
};
