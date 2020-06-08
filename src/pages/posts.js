import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

const BlogArticles = ({ data }) => {
	const blogPosts = data.allContentfulBlogArticle.edges;
	return (
		<Layout>
			<SEO title="Blog Article" />
			<div className="container flex-row">
				<div className="main">
					<h1>{"Latest Articles"}</h1>
					<div className="post-basic">
						{blogPosts.map(({ node: post }) => (
						<div className="post-basic-item">
							<img src={post.thumbnail.file.url} alt="Slide1" className="thumbnail" />
							<div className="post-basic-textblock">
								<p className="post-basic-postedat">2020/04/24</p>
								<h3><Link to={`/post/${post.slug}`}>{post.title}</Link></h3>
								<p>{post.content.content}</p>
								<div className="post-basic-catbox">
									<span className="post-basic-catname">Voyage</span>
									<span className="post-basic-tagname">#パリの交通</span>
									<span className="post-basic-tagname">#行きたい店</span>
									<span className="post-basic-tagname">#買ってよかったもの</span>
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
				<Sidebar />
			</div>
		</Layout>
	);
};
export default BlogArticles;
export const query = graphql`
	query BlogArticlePageQuery {
		allContentfulBlogArticle(filter: {node_locale: {eq: "ja-JP"}}) {
			edges {
				node {
					id
					title
					slug
					content {
						content
					}
					thumbnail {
						file {
							url
						}
					}
				}
			}
		}
	}
`;