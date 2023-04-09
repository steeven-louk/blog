const Category = require("../models/Category");

const addCat = async(req, res) =>{
    try {
        const data = await Category(req.body);
    const saveData = await data.save();
    res.status(201).send(saveData);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAllCat = async (_, res)=>{
    const data = await Category.find();
    res.status(200).json({data});
}

module.exports = {addCat, getAllCat};