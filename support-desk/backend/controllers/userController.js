const asyncHandler = require("express-async-handler");

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
  response.send("Register Route");
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
