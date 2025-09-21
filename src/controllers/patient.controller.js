const db = require("../models");
const Patient = db.patient;

// Create a new patient
exports.create = async (req, res) => {
  try {
    const patient = await Patient.create({
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      address: req.body.address,
      medicalHistory: req.body.medicalHistory,
      userId: req.userId // From JWT middleware
    });
    res.status(201).send(patient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all patients for logged-in user
exports.findAll = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.userId } });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a single patient by ID
exports.findOne = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.userId }
    });
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }
    res.status(200).send(patient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a patient by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Patient.update(req.body, {
      where: { id: req.params.id, userId: req.userId }
    });

    if (updated) {
      const updatedPatient = await Patient.findByPk(req.params.id);
      return res.status(200).send(updatedPatient);
    }
    return res.status(404).send({ message: "Patient not found" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a patient by ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Patient.destroy({
      where: { id: req.params.id, userId: req.userId }
    });

    if (deleted) {
      return res.status(200).send({ message: "Patient deleted successfully" });
    }
    return res.status(404).send({ message: "Patient not found" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
