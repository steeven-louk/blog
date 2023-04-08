const mongoose = require('mongoose');

const schema = mongoose.Schema;

const CategoryModel = schema({
    title:{
        type: String,
        required:[true, "title is required"],
    },
   
}, {timestamp: true});

const Category = mongoose.model('Categories', CategoryModel);

module.exports = Category;