import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostBasic = ({ postData }) => (
  postData.map(({ node: post }) => (
  <div className="post-basic-item">
    <img src={post.thumbnail.file.url} alt="Slide1" className="thumbnail" />
    <div className="post-basic-textblock">
      <p className="post-basic-postedat">{post.createdAt}</p>
      <h3><Link to={`/post/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.content.content}</p>
      <div className="post-basic-catbox">
        <span className="post-basic-catname">{post.category}</span>
        <span className="post-basic-tagname">#パリの交通</span>
        <span className="post-basic-tagname">#行きたい店</span>
        <span className="post-basic-tagname">#abc</span>
      </div>
    </div>
  </div>
  ))
)

export default PostBasic