const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
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
    throw new Error("Please include all fields");
  }

  //Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    response.status(400);
    throw new Error("User already exists.");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
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
      token: generateToken(user._id),
    });
  } else {
    response.status(400);
    throw new Error("Invalid user data");
  }
});

// @Description Login a new user
// @Route       /api/users/login
// @access      Public
const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  // check user and compare password
  if (user && (await bcrypt.compare(password, user.password))) {
    response.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    response.status(401);
    throw new Error("Invalid credentials");
  }
});

// @desc        Get current user
// @Route       /api/users/me
// @access      Private
const getMe = asyncHandler(async (request, response) => {
  const user = {
    id: request.user._id,
    email: request.user.email,
    name: request.user.name,
  };
  response.status(200).json(user);
});

//generate json token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
