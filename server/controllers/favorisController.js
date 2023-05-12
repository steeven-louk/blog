const Post = require("../models/Posts");
const User = require("../models/user");


const addFavoris = async (req,res) =>{
    
    const {postId, userId} = req.params;

    try {
        const user = await User.findById(userId);
        const post = await Post.findById(postId).populate('category');
    
        if(!user) return res.status(404).json({message:"user not found"});
        if(!post) return res.status(404).json({message:"post not found"});

        const existingFavoris = await User.findOne({favoris:postId});
        if(existingFavoris) return res.status(409).json('post already exist');
        
        // const favoris = await new Favoris({user: userId,post: post});

        // await User.findByIdAndUpdate(userId, {$push: {favoris: postId}}, {new: true})
        await user.favoris.push(post);
        await user.save();
      
        
        res.status(201).json({message:"favoris added"});
    } catch (error) {
        res.status(404).json({message:error});
    }
}


const removeFavoris = async (req, res) => {
    const {postId, userId} = req.params;

    
    try {
        const user = await User.findById(userId);
        const favoris = await Post.findById(postId);

        if(!user) return res.status(404).json({message:'user not found'})
        if(!favoris) return res.status(404).json({message:'post not found'});

        await user.favoris.pull(postId);
        await user.save();
        res.status(200).json({ message: "Post removed from favorite" });

    } catch (error) {
        res.status(500).json(error.message);
    }

}



const getFavorisId = async(req, res) =>{
    const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send('user not found');
    res.status(200).json({favoris: user?.favoris})

  } catch (error) {
    
  }

}

const getFavoris = async (req, res) => {
    const userId = req.params.userId;

        try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).send('user not found');


       //Récupérer les données des posts favoris avec les informations de la catégorie associée
       const favoris = await Post.find({ _id: { $in: user.favoris } });
            
        res.status(200).json({ favoris: favoris });
    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = {addFavoris, getFavoris, getFavorisId, removeFavoris};