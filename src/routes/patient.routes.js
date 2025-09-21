// const authMiddleware = require("../middleware/auth.middleware");
// const controller = require("../controllers/patient.controller");
// const router = require("express").Router();

// // Apply security middleware to all patient routes
// router.use(authMiddleware.verifyToken);

// router.post("/", controller.create);
// router.get("/", controller.findAll);
// // Additional patient routes (GET :id, PUT :id, DELETE :id) can be added here.

// module.exports = router;

const authMiddleware = require("../middleware/auth.middleware");
const controller = require("../controllers/patient.controller");
const router = require("express").Router();

// Apply security middleware to all patient routes
router.use(authMiddleware.verifyToken);

// Create a new patient
router.post("/", controller.create);

// Get all patients for the logged-in user
router.get("/", controller.findAll);

//Get a patient by ID
router.get("/:id", controller.findOne);

// Update patient details by ID
router.put("/:id", controller.update);

// Delete patient by ID
router.delete("/:id", controller.delete);

module.exports = router;
