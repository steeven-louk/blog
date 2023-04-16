const mongoose = require('mongoose');

const schema = mongoose.Schema;

const PostModel = schema({
    title:{
        type: String,
        required:[true, "title is required"],
        max: 250
    },
    content:{
        type: String,
        required:[true, "content is required"],
    },
    picture:{
        type: String,
        default:'',
        required: false
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
    }
}, {timestamps: true});

const Post = mongoose.model('Posts', PostModel);

module.exports = Post;