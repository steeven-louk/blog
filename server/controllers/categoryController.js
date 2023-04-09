const Category = require("../models/Category");

const addCat = async(req, res) =>{
    try {
        const data = await Category(req.body);
        const saveData = await data.save();
    res.status(201).send(saveData);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllCat = async (_, res)=>{
    const data = await Category.find();
    res.status(200).json({data});
}

const delCat = async (req, res) =>{
    const id = req.params.id;
    try {
        const data = await Category.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {addCat, getAllCat, delCat};