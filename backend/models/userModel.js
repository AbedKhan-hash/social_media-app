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

    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:[],
    }],

    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:[],
    }],

    profileImg:{
        type:String,
        default:"",
    },

    coverImg:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    }



},{timestamps:true})

 
 
const User = mongoose.model('User',userSchema);

export default User;