import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"
//import ReactMarkdown from "react-markdown";
import useContentfulImage from "../utils/useContentfulImage";
import Img from "gatsby-image";

import PostBasic from "../components/post-basic";
//import { documentToReactComponents } from '@contentful/rich-text-html-renderer';
import marked from "marked";

const BlogArticle = ({ data, pageContext, location }) => {
	const { title, contentMarkdown, thumbnail, category, createdAt, tags } = data.contentfulBlogArticle;
	const relatedArticle = data.relatedArticle.edges;

	const source = contentMarkdown.contentMarkdown.replace(/\n/gi, '\nreplaced_text ');
	marked.setOptions({
		gfm: true,
		breaks: true,
	});
	const parsedSouce = marked(source).replace(/replaced_text/g, '');

	return (
<Layout>
	<SEO
		pageTitle={title}
		showSiteNameInTitle="true"
		pageDescription=""
		pagePath={location.pathname}
	/>
	<div className="container flex-row">
		<div className="main">
			<div className="post">
				<h1>{title}</h1>
				<p>カテゴリ: {category}</p>
				<p>投稿日: {createdAt}</p>
				<Img
					fluid={useContentfulImage(thumbnail.file.url)}
				/>
				<p className="body-text">
					{
						/* contentMarkdown */
						/* parsedSouce */
					}
					<span dangerouslySetInnerHTML={{ __html: marked(parsedSouce) }} />
				</p>
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
					createdAt(formatString: "YYYY-MM-DD")
				}
			}
		}
	}
`;