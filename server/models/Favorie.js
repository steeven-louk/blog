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

}, {timestamps: true});

const Favoris = mongoose.model('Favoris', FavoriesSchema);

module.exports = Favoris;