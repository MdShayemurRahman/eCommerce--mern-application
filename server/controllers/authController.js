import { validationResult } from 'express-validator';

import User from '../model/userModel.js';

// @route   POST api/users
// @desc    Register user
//@access   Public

export const registerUser = async (req, res) => {
  // check user data given is valid
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // check if the user exists!
    let user = await User.findOne({ email });

    // get user gravatar

    // encrypt password

    // Return json-web-token
    res.send('user registerred!!');
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = (req, res) => {
  res.send('user logged in!!');
};

export const logoutUser = (req, res) => {
  res.send('user loggedOut!!');
};
