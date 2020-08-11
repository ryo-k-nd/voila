import React from "react"
import { Link, graphql } from "gatsby";
//import PropTypes from "prop-types"
import Img from "gatsby-image";

const PostBasic = ({ postData }) => (
	postData && postData.map(({ node: post }) => {
		return (
			<Link to={`/post/${post.slug}`} className="post-basic-item">
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
				<div className="post-basic-textblock">
					<h4>{post.title}</h4>
					{/*<p className="post-basic-desc"></p>*/}
					<div className="post-basic-catbox flex-row">
						<div className="post-basic-catname">{post.category}</div>
						<ul className="post-basic-tags tags">
							{post.tags && post.tags.map(({ name, slug }) =>
								<li><Link to={`/tag/${slug}`}>#{name}</Link></li>
							)
							}
						</ul>
					</div>
					<div className="post-basic-postedat">{post.createdAt}</div>
				</div>
			</Link>
		)
	})
)

export default PostBasic