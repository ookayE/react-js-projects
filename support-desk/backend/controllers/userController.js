const asyncHandler = require("express-async-handler");

const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc Register a new user
// @Route       /api/users
// @access      Public
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  // error validation
  if (!name || !email || !password) {
    response.status(400);
    throw new error("Please include all fields");
  }

  //Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    response.status(400);
    throw new Error("User already exists.");
  }

  //Hash password
  const salt = await bcrypt.getSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    response.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    response.status(400);
    throw new error("Invalid user data");
  }
});

// @Description Login a new user
// @Route       /api/users/login
// @access      Public
const loginUser = asyncHandler(async (request, response) => {
  response.send("Login User");
});

module.exports = {
  registerUser,
  loginUser,
};
