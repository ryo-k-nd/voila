import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

import PostBasic from "../components/post-basic";

const BlogArticles = ({ data, location }) => {
	const blogPosts = data.allContentfulBlogArticle.edges;
	return (
		<Layout>
			<SEO
				pageTitle="最新の記事"
				showSiteNameInTitle="true"
				pageDescription=""
				pagePath={location.pathname}
			/>
			<div className="container flex-row">
				<div className="main">
					<h1>{"Latest Articles"}</h1>
					<div className="post-basic">
					  <PostBasic postData={blogPosts} />
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
					category
					contentMarkdown{
						contentMarkdown
					}
					thumbnail {
						file {
							url
						}
					}
					tags {
						name
						slug
					}
					createdAt(formatString: "YYYY/MM/DD")
				}
			}
		}
	}
`;