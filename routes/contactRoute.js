const express = require("express");
const router = express.Router();
const {
  getAllContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controller/ContactController");

router.route("/").get(getAllContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
