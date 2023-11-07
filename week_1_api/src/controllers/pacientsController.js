import {
  getAllPatientsService,
  getPatientByIdService,
  createPatientService,
  updatePatientService,
  deletePatientService,
} from "../services/patientService.js";

export const getAllPatients = async (req, res) => {
  const patients = await getAllPatientsService();

  res.send({ status: 200, data: patients });
};

export const getPatientById = async (req, res) => {
  const {
    params: { patient_id },
  } = req;

  if (!patient_id) {
    return;
  }

  const patient = await getPatientByIdService(patient_id);
  res.send({ status: 200, data: patient });
};

export const createPatient = (req, res) => {
  const { body } = req;

  if (
    !body.first_name ||
    !body.last_name ||
    !body.date_of_birth ||
    !body.email ||
    !body.country ||
    !body.postal_code ||
    !body.phone_number
  ) {
    return res
      .status(400)
      .send({ message: "Missing required information in body" });
  }

  const newPatient = {
    first_name: body.first_name,
    last_name: body.last_name,
    date_of_birth: body.date_of_birth,
    email: body.email,
    country: body.country,
    postal_code: body.postal_code,
    phone_number: body.phone_number,
  };

  const patient = createPatientService(newPatient);
  res.status(201).send({ status: 201, data: patient });
};

export const updatePatient = async (req, res) => {
  const {
    body,
    params: { patient_id },
  } = req;

  if (!patient_id) {
    return;
  }

  if (
    !body.first_name &&
    !body.last_name &&
    !body.date_of_birth &&
    !body.email &&
    !body.country &&
    !body.postal_code &&
    !body.phone_number
  ) {
    return res.status(400).send({ message: "Missing information in body" });
  }

  const updatedPatient = updatePatientService(patient_id, body);
  res.send({ status: 200, data: updatedPatient });
};

export const deletePatient = (req, res) => {
  const {
    params: { patient_id },
  } = req;

  if (!patient_id) {
    return;
  }

  deletePatientService(patient_id);
  res.status(204).send({ status: "OK", message: "Patient deleted" });
};
