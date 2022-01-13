const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth')

const weighingController = require('../controllers/weighings')

router.post("/", auth, weighingController.createWeighing);
router.get("/:id", auth, weighingController.getOneWeighing);
router.put("/:id", auth, weighingController.modifyWeighing);
router.delete("/:id", auth, weighingController.deleteWeighing);
router.get("/", auth, weighingController.getAllWeighings);

module.exports = router;
