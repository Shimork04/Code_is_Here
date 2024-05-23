// implementing user table as made in our data model

import mongoose from "mongoose";

/*
// User Table fields
_id : String
firstName : String
lastname : String
friends : Array<object>
email : String
password : String
picturePath : String Reg
location : String
occupation : String
viewedProfile : Number
impressions : Number

*/

// particulars of how our database schema would look like
const UserSchema = new mongoose.Schema(
  {
    // properties of first-name in user field
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 7,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
  },
  { timestamps: true }
);


// modelling our schema to model our database
const User = mongoose.model("User", UserSchema);
export default User;