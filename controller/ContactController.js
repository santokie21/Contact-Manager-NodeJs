//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getAllContact = (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public
const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  res.status(201).json({ message: "Create Contact" });
};

//@desc Update Contact
//@route PUT /api/contacst/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}` });
};

module.exports = {
  getAllContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
