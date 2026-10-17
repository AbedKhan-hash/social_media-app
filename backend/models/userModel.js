import mongoose from "mongoose";


const userSchema = new mongoose.Schema({


    username:{
        type:String,
        unique:true,
        trim:true,
    },

    fullname:{
        type:String,
        unique:true,
        trim:true,
    },

    email:{
        type:String,
        unique:true,
        trim:true,
    },

    password:{
        type:String,
        trim:true,
    },

    follwors:[{
        type:ongoose.Schema.Types.objectId,
        ref:userInfo,

    }],

    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:userInfo
    }],

    profile:{
        type:String,
    },

    coverImg:{
        type:String,
    }



},{timestamps:true})

 
export default mongoose.model('User',userSchema);