import bcrypt from "bcrypt"; // for encrypting the password
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*   Register User   */

export const register = async (req, res) => {
  try {
    //body of request when trying to registering
    const {
      firstName,
      lastname,
      friends,
      email,
      password,
      picturePath,
      location,
      occupation,
      viewedProfile,
      impressions,
    } = req.body;

    const salt = await bcrypt.genSalt(); // for password encryption
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastname,
      friends,
      email,
      password: passwordHash,
      picturePath,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 100), // currently a random value of viewed profile, we'll change later on
      impressions: Math.floor(Math.random() * 1000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



/*  logging IN   */

// this is when user tries to login
export const login = async (req, res) => {
  try {
    //body of request when trying to logging
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    // if user doesn't exist then we will implement this code
    if (!user)
      return res.status(400).json({ message: " User does not exist. " });
    
    // for matching the password stored in database.
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: "Invalid Credentials. "});

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
    delete user.password;   // so that user password is not send via jwt token, we delete it
    res.status(200).json({token, user});


} catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// this is not very secure though, needs much changes

