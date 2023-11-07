import {
  getAllPatientsService,
  getPatientByIdService,
  createPatientService,
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

export const createPatient = async (req, res) => {
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

  const patient = await createPatientService(newPatient);
  res.status(201).send({ status: 201, data: patient });
};

export const updatePatient = async (req, res) => {
  const { body } = req;

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

  const updatedPatient = {
    first_name: body.first_name,
    last_name: body.last_name,
    date_of_birth: body.date_of_birth,
    email: body.email,
    country: body.country,
    postal_code: body.postal_code,
    phone_number: body.phone_number,
  };

  // const patient = await PatientService.updatePatient(
  //   req.params.patient_id,
  //   updatedPatient
  // );

  // res.send({ status: 200, data: patient });
};

export const deletePatient = async (req, res) => {
  // const patient = await PatientService.deletePatient(req.params.patient_id);
  // res.send({ status: 200, data: patient });
};
