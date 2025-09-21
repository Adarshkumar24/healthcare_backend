const db = require("../models");
const Patient = db.patient;
const Doctor = db.doctor;

exports.create = async (req, res) => {
    try {
        const { patientId, doctorId } = req.body;
        const patient = await Patient.findOne({ where: { id: patientId, userId: req.userId } });

        if (!patient) {
            return res.status(403).send({ message: "Forbidden: You can only assign doctors to your own patients." });
        }
        
        const doctor = await Doctor.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).send({ message: "Doctor not found." });
        }
        
        await patient.addDoctor(doctor);
        res.status(200).send({ message: "Doctor assigned successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findAllForPatient = async (req, res) => {
    try {
        const patient = await Patient.findOne({ where: { id: req.params.id, userId: req.userId } });
        if (!patient) return res.status(404).send({ message: "Patient not found." });
        
        const doctors = await patient.getDoctors();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
  try {
    const patients = await Patient.findAll({
      where: { userId: req.userId },
      include: [{ model: Doctor, as: "Doctors" }],
    });

    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findAllForDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id, {
      include: [{ model: Patient, as: "Patients", where: { userId: req.userId } }],
    });

    if (!doctor) return res.status(404).send({ message: "Doctor not found." });

    res.status(200).send(doctor.Patients);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//  remove doctor from patient
exports.deleteMapping = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body; // send both IDs in request body

    const patient = await Patient.findOne({ where: { id: patientId, userId: req.userId } });
    if (!patient) {
      return res.status(404).send({ message: "Patient not found or does not belong to you." });
    }

    const doctor = await Doctor.findByPk(doctorId);
    if (!doctor) {
      return res.status(404).send({ message: "Doctor not found." });
    }

    await patient.removeDoctor(doctor); // Sequelize handles join table deletion
    res.status(200).send({ message: "Doctor removed from patient successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
