const postRouter = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


// get all posts
postRouter.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.category;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// get a post by id
postRouter.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a post
postRouter.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        return res.status(200).send(savedPost);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


// Update a post
postRouter.put('/:id', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ error: "Post not found" });
        }
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                return res.status(200).send(updatedPost);
            } catch (error) {
                return res.status(500).send({ error: error.message });
            }
        } else {
            return res.status(401).json({ error: "You can update only your post" });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


// Delete a post
postRouter.delete('/:id', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ error: "Post not found" });
        }
        if (post.username === req.body.username) {
            try {
                await post.delete();
                return res.status(200).send("Post has been deleted");
            } catch (error) {
                return res.status(500).send({ error: error.message });
            }
        } else {
            return res.status(401).json({ error: "You can delete only your post" });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports = postRouter;