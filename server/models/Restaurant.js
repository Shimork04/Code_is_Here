// implementing Restaurants table, yet to add to database and modelling

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
const RestaurantSchema = new mongoose.Schema(
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
const Restaurant = mongoose.model("User", RestaurantSchema);
export default Restaurant;