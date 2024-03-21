const express = require("express");
const router = express.Router();
const {
  getAllContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controller/ContactController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

router.use(validateTokenHandler);

router.route("/").get(getAllContact).post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
