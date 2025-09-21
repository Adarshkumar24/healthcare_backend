// const authMiddleware = require("../middleware/auth.middleware");
// const controller = require("../controllers/doctor.controller");
// const router = require("express").Router();

// router.use(authMiddleware.verifyToken);
// router.post("/", controller.create);
// router.get("/", controller.findAll);

// module.exports = router;

const authMiddleware = require("../middleware/auth.middleware");
const controller = require("../controllers/doctor.controller");
const router = require("express").Router();

router.use(authMiddleware.verifyToken);

// Create doctor
router.post("/", controller.create);

// Get all doctors
router.get("/", controller.findAll);

// Get doctor by ID
router.get("/:id", controller.findOne);

// Update doctor
router.put("/:id", controller.update);

// Delete doctor
router.delete("/:id", controller.delete);

module.exports = router;
