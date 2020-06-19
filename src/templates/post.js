import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

import PostBasic from "../components/post-basic";

const BlogArticle = ({ data, pageContext }) => {
	const { title, content, thumbnail, category, createdAt, tags } = data.contentfulBlogArticle;
	const relatedArticle = data.relatedArticle.edges;

	return (
<Layout>
	<SEO title={title} />
	<div className="container flex-row">
		<div className="main">
			<div className="post">
				<h1>{title}</h1>
				<p>カテゴリ: {category}</p>
				<p>投稿日: {createdAt}</p>
				<img alt={title} src={thumbnail.file.url} />
				<p className="body-text">{content.content}</p>
				<div>
					<p>タグ: </p>
					<ul>
					{tags && tags.map(({ name, slug }) =>
						<li><Link to={`/tag/${slug}`}>#{name}</Link></li>
						)
					}
					</ul>
					<ul>
					{tags.map(({ blog_article }) =>
							blog_article && blog_article.map(({ slug }) =>
								<li>{slug}</li>
							)
						)
					}
					</ul>
				</div>
				<div>
					<p>関連記事: {pageContext.taggedArticles}</p>
					<PostBasic postData={relatedArticle} />
				</div>
			</div>
		</div>
		<Sidebar />
	</div>
</Layout>
	);
};
export default BlogArticle;
export const pageQuery = graphql`
	query( $slug: String, $tags: [String] ) {
		contentfulBlogArticle(slug: { eq: $slug }) {
			id
			title
			slug
			category
			content {
				content
			}
			thumbnail {
				file {
					url
				}
			}
			tags {
				name
				slug
				blog_article {
					slug
				}
			}
			createdAt(formatString: "YYYY-MM-DD")
		}
		relatedArticle: allContentfulBlogArticle(sort: {fields: createdAt, order: DESC}, filter: {tags: {elemMatch: {slug: {in: $tags}}}, node_locale: {eq: "ja-JP"}}) {
			edges {
				node {
					id
					title
					slug
					category
					content {
						content
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
					createdAt(formatString: "YYYY-MM-DD")
				}
			}
		}
	}
`;