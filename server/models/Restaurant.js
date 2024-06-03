// implementing Restaurants table, yet to add to database and modelling

import mongoose from "mongoose";

/*
// Restaurant info
_id : String
restaurantName : String    // name of restaurant
location : String
friends : Array<object>
email : String
contact: Number
password : String
picturePath : String Reg
cuisine : String    // what are the various cuisine served
viewedProfile : Number
impressions : Number

*/

// user data base yet to create
// particulars of how our database schema would look like
const RestaurantSchema = new mongoose.Schema(
  {
    // properties of first-name in user field
    restaurantName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    location: String,
    friends: {
      type: Array,
      default: [],
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
    cuisine: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
  },
  { timestamps: true }
);



// modelling our schema to model our database
const Restaurant = mongoose.model("User", RestaurantSchema);
export default Restaurant;