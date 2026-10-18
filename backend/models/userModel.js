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
        type:mongoose.Schema.Types.objectId,
        ref:userInfo,
        default:[],
    }],

    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:userInfo,
        default:[],
    }],

    profile:{
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

 
export default mongoose.model('User',userSchema);