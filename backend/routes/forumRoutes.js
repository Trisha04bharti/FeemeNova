const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  replyToPost
} = require("../controllers/forumController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createPost);
router.get("/", authMiddleware, getPosts);
router.post("/reply", authMiddleware, replyToPost);

module.exports = router;
