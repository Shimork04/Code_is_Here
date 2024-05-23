import bcrypt from 'bcrypt';    // for encrypting the password
import jwt from 'jsonwebtoken';
import User from "../models/User.js";


/*   Register User   */

export const register = async (req, res) => {
    try{
        const{
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

        const salt = await bcrypt.genSalt();  // for password encryption
        const passwordHash =  await bcrypt.hash(password, salt);
        
        const newUser = new User({
            firstName,
            lastname,
            friends,
            email,
            password : passwordHash,
            picturePath,
            location,
            occupation,
            viewedProfile : Math.floor(Math.random() * 100),     // currently a random value of viewed profile, we'll change later on
            impressions: Math.floor(Math.random() * 1000),
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err){
        res.status(500).json({error : err.message});
    }
};
