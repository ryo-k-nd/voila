import React from "react"
import { Link, graphql } from "gatsby";
//import PropTypes from "prop-types"
import Img from "gatsby-image";

const PostBasic = ({ postData }) => (
	postData && postData.map(({ node: post }) => {
		return (
		<div className="post-basic-item">
			<div className="thumbnail-wrapper">
			{post.thumbnail ? //もしサムネイル画像をもっていれば
				<Img
					fluid={post.thumbnail.fluid}
					className="thumbnail"
				/>
			:
				<img
					src="//images.ctfassets.net/zbyipzusy20r/69YBVOds5ZZwcOtPgKe6dC/8bb092eeefb0372aa3f6e1be78d6f58d/pr_competition_img.jpg"
					className="thumbnail"
				/>
			}
			</div>
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
		)
	})
)

export default PostBasic