const Post = require('../models/Posts');
const User = require('../models/user');
const fs = require('fs');


const getAllPost = async (_, res) => {
    const data = await Post.find().sort({ 'createdAt': -1 }).populate('user', ['username', '_id']).populate('category').limit(20);
    res.status(200).json({ data });
}

const addPost = async (req, res) => {
    try {
        const id = req.params.id
        const existingUser = await User.findById(id);
        if (!existingUser) res.status(401).json("user not found");
        
        const data = await new Post(req.body);
        const saveData = await data.save();
        await existingUser.post.push(saveData);
        await existingUser.save();

        res.status(201).json(saveData);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('user', ['username', '_id', 'photo']);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).send(error)
    }
}

const updatePost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await Post.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(201).json(post);

    } catch (error) {
        res.status(400).json(error)
    }
}

const deletePost = async (req, res) => {
    const { postId, userId } = req.params;

    try {
        const posts = await Post.findByIdAndDelete(postId).populate('user');
        const user = await User.findById(userId);

        if (!user) return res.status(404).json('user not found');
        if (!posts) return res.status(404).json('post not found');

        // Supprime l'image associée au post
        if (posts.picture) {

            await fs.unlink(`./assets/posts/${posts.picture}`, (err) => {
                if (err) throw err;
                console.log(' was deleted');
            });
        }

        await user.post.pull(postId);
        await user.save();

        return res.status(200).send({ message: "blog is deleted" });
    } catch (error) {
        res.status(400).json(error.message)
    }

}




module.exports = { getAllPost, addPost, getPost, deletePost, updatePost };