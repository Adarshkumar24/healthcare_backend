const db = require("../models");
const Doctor = db.doctor;

// Create a doctor
exports.create = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).send(doctor);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all doctors
exports.findAll = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).send(doctors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get doctor by ID
exports.findOne = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).send({ message: "Doctor not found" });
    }
    res.status(200).send(doctor);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update doctor
exports.update = async (req, res) => {
  try {
    const [updated] = await Doctor.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedDoctor = await Doctor.findByPk(req.params.id);
      return res.status(200).send(updatedDoctor);
    }

    res.status(404).send({ message: "Doctor not found" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete doctor
exports.delete = async (req, res) => {
  try {
    const deleted = await Doctor.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      return res.status(200).send({ message: "Doctor deleted successfully" });
    }

    res.status(404).send({ message: "Doctor not found" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
