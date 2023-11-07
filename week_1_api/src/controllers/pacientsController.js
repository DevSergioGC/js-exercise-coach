const patientService = require("../services/patientService");

const getAllPatients = async (_req, res) => {
  const patients = await patientService.getAllPatients();

  res.send({ status: 200, data: patients });
};

const getPatientById = async (req, res) => {
  const patient = await patientService.getPatientById(req.params.patient_id);

  res.send({ status: 200, data: patient });
};

const createPatient = async (req, res) => {
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

  const patient = await patientService.createPatient(newPatient);
  res.status(201).send({ status: 201, data: patient });
};

const updatePatient = async (req, res) => {
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

  const patient = await patientService.updatePatient(
    req.params.patient_id,
    updatedPatient
  );

  res.send({ status: 200, data: patient });
};

const deletePatient = async (req, res) => {
  const patient = await patientService.deletePatient(req.params.patient_id);

  res.send({ status: 200, data: patient });
};
