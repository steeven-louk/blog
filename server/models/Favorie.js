const mongoose = require('mongoose');

const schema = mongoose.Schema;

const FavoriesSchema = schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    },

    // category:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Categories'
    // },
}, {timestamps: true});

const Favoris = mongoose.model('Favoris', FavoriesSchema);

module.exports = Favoris;