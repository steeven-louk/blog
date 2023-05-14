const Post = require('../models/Posts');
const User = require('../models/user');


const getPostByUser = async (req, res) => {
    const id = req.params.id
    try {
        const userBlog = await User.findById(id).sort({ 'createdAt': -1 }).populate('post');

        if (!userBlog) return res.status(404).send('User not found');
        // const posts = await Post.filter((e)=> e._id === id);

        return res.status(200).send({
            username: userBlog.username,
            post: userBlog.post,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).populate('favoris');
        console.log('userServer', user);
        const { password,isAdmin, ...others } = user._doc;
        res.status(200).send(others);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addUserPhoto = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, { photo: req.body.photo }, { new: true });
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addBgPhoto = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, { bg_picture: req.body.bg_picture }, { new: true });
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const  updateUser = async (req, res) =>{
    const userId = req.params.userId;
    
    try {
        const user = await User.findById(userId);
        if(!user) return res.status(404).send('user not found');

        const update = await User.findByIdAndUpdate(user, {$set: req.body}, {new: true});
        await update.save();
        await user.save();
        res.status(200).json({update, message:"information modifier avec success"});
    } catch (error) {
        res.status(400).json(error.message);
    }
}




module.exports = { getPostByUser, getUser, addBgPhoto, addUserPhoto, updateUser };