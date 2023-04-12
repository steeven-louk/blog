const User = require('../models/user');


const getPostByUser = async (req, res) =>{
    const id = req.params.id
        try {
        const userBlog = await User.findById(id).populate('post');
        if(!userBlog) return res.status(404).send('User not found');

      
       return res.status(200).send({
        username: userBlog.username,
        post: userBlog.post
       });
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


module.exports = getPostByUser;