


import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import "./forum.css"  // <-- Import the CSS file here

function Forum() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [posts, setPosts] = useState([])
  const [replyText, setReplyText] = useState("")
  const [currentPostId, setCurrentPostId] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const { data } = await API.get("/forum")
      setPosts(data)
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      await API.post("/forum", { title, content })
      setTitle("")
      setContent("")
      fetchPosts()
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  }

  const handleReply = async (postId) => {
    try {
      await API.post("/forum/reply", { postId, replyText })
      setReplyText("")
      setCurrentPostId(null)
      fetchPosts()
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  }

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h2>Community Forum</h2>
        <button className="back-button" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
      
      <form className="create-post-form" onSubmit={handleCreatePost}>
        <h3>Create a Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Share your experience..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      <hr />

      <h3>All Posts</h3>
      {posts.map(post => (
        <div key={post._id} className="post-card">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <p>
            Posted by: {post.userId?.username} on{" "}
            {new Date(post.createdAt).toLocaleString()}
          </p>
          <div className="post-replies">
            <strong>Replies:</strong>
            {post.replies.map((reply, idx) => (
              <div key={idx} className="reply-item">
                <p>{reply.text}</p>
                <small>
                  by {reply.userId?.username} on{" "}
                  {new Date(reply.createdAt).toLocaleString()}
                </small>
              </div>
            ))}
          </div>

          {currentPostId === post._id ? (
            <div className="reply-form">
              <textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button onClick={() => handleReply(post._id)}>Submit</button>
            </div>
          ) : (
            <button
              className="reply-button"
              onClick={() => setCurrentPostId(post._id)}
            >
              Reply to Post
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Forum

