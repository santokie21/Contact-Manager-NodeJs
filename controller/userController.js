const asyncHandler = require("express-async-handler");

//@desc Register user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json("User registered");
});

//@desc Login user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json("login user registered");
});

//@desc Get current user
//@route GET /api/users/current
//@access Private
const currentUser = asyncHandler((req, res) => {
  res.status(200).json("current user");
});

module.exports = { registerUser, loginUser, currentUser };
