const mongoose = require('mongoose');

const schema = mongoose.Schema;

const CategoryModel = schema({
    name:{
        type: String,
        required:[true, "title is required"],
    },
   
}, {timestamps: true});

const Category = mongoose.model('Categories', CategoryModel);

module.exports = Category;