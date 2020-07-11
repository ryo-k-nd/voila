import React from "react"
import { Link, graphql } from "gatsby";
//import PropTypes from "prop-types"
import Img from "gatsby-image";

const PostBasic = ({ postData }) => (
	postData.map(({ node: post }) => (
		<div className="post-basic-item">
			<Img
				fluid={post.thumbnail.fluid}
				className="thumbnail"
			/>
			<div className="post-basic-textblock">
				<p className="post-basic-postedat">{post.createdAt}</p>
				<h4><Link to={`/post/${post.slug}`}>{post.title}</Link></h4>
				<p className="post-basic-desc"></p>
				<div className="post-basic-catbox">
					<ul className="post-basic-tags tags">
						<li className="post-basic-catname">{post.category}</li>
						{post.tags && post.tags.map(({ name, slug }) =>
							<li><Link to={`/tag/${slug}`}>#{name}</Link></li>
						)
						}
					</ul>
				</div>
			</div>
		</div>
	))
)

export default PostBasic