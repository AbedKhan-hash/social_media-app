import User  from '../models/userModel.js' 
import validator from 'validator'
import bcrypt from 'bcrypt'

export const signup = async(req,res) =>{
    

    try{
        const {email,password,username,fullname} = req.body;

        if(!validator.isEmail(email)){
            return res.status(400).json({error:"invalid email"})
        }

        const existingUser = await User.findOne({username})

        if(existingUser){
            return res.status(400).json({error:"userName is already taken"})
        }

        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({errror:"email is already taken"})
        }

        if(!validator.isStrongPassword(password)){
            return res.status(400).json({error:"password is too weak"})
        }


        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password,salt);


        const newUser = new User ({
            username,
            email,fullname,
            password:hashPassword,

        })

        if(newUser){

            genrateAuthTokenAndSetCookie(newUser._id,res)
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                username:newUser.username,
                fullname:newUser.fullname,
                email:newUser.email,
                followers:newUser.followers,
                following:newUser.following,
                propileImg:newUser.propileImg,
                coverImg:newUser.coverImg,
            })
        }else{
            res.status(400).json({error:"invalid user data"})
        }

    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }







}