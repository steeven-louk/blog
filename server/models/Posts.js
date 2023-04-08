const mongoose = require('mongoose');

const schema = mongoose.Schema;

const PostModel = schema({
    title:{
        type: String,
        required:[true, "title is required"],
    },
    content:{
        type: String,
        required:[true, "content is required"],
    },
    picture:{
        type: String,
        required: false
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    }
}, {timestamps: true});

const Post = mongoose.model('Posts', PostModel);

module.exports = Post;