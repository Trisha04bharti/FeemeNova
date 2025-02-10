const ForumPost = require("../models/ForumPost");

exports.createPost = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { title, content } = req.body;
    const newPost = new ForumPost({ userId, title, content });
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find({}).populate("userId", "username").sort({ createdAt: -1 });
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.replyToPost = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { postId, replyText } = req.body;

    let post = await ForumPost.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found." });

    post.replies.push({ userId, text: replyText });
    await post.save();

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
