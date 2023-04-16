const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserModel = schema({
    username:{
        type: String,
        required:[true, "username is required"],
    },
    email:{
        type: String,
        required:[true, "email is required"],
        unique: true
    },
    password:{
        type: String,
        required:[true, "password is required"],
    },
    bg_picture:{
        type: String,
        default:'',
        required: false
    },
    photo:{
        type: String,
        default:'',
        required: false
    }, 
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    favories:[{
        type:String,
        required: false
    }],
    isAdmin:{
        type: Boolean,
        default: 0
    }
}, {timestamps: true});

const User = mongoose.model('User', UserModel);

module.exports = User;