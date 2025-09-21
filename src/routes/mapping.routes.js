const authMiddleware = require("../middleware/auth.middleware");
const controller = require("../controllers/mapping.controller");
const router = require("express").Router();

router.use(authMiddleware.verifyToken);

// Assign doctor → patient
router.post("/", controller.create);

// Get all mappings for current user
router.get("/", controller.findAll);

// Get all doctors for a patient (original endpoint)
router.get("/patient/:id", controller.findAllForPatient);

// Get all patients for a doctor
router.get("/doctor/:id", controller.findAllForDoctor);

//  Get all doctors for a patient using /api/mappings/:id
router.get("/:id", controller.findAllForPatient);

// Remove doctor from patient
router.delete("/:id", controller.deleteMapping);

module.exports = router;
