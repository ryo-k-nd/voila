import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"
import useContentfulImage from "../utils/useContentfulImage";
import Img from "gatsby-image";
import PostBasic from "../components/postBasic";
//import { documentToReactComponents } from '@contentful/rich-text-html-renderer';
import marked from "marked";

const BlogArticle = ({ data, pageContext, location }) => {
	const { title, contentMarkdown, thumbnail, category, createdAt, tags } = data.contentfulBlogArticle;
	const relatedArticle = data.relatedArticle.edges;

	marked.setOptions({
		pedantic: false,
		gfm: true,
		breaks: true,
		sanitize: false,
		smartLists: true,
		smartypants: false,
		xhtml: false
	});
	//const source = contentMarkdown.contentMarkdown.replace(/\n/gi, '\nreplaced_text ');
	//const parsedSouce = marked(source).replace(/replaced_text/g, '');

	const imageUrl = thumbnail ? thumbnail.file.url : "//images.ctfassets.net/zbyipzusy20r/69YBVOds5ZZwcOtPgKe6dC/8bb092eeefb0372aa3f6e1be78d6f58d/pr_competition_img.jpg"

	return (
		<Layout>
			<SEO
				pageTitle={title}
				showSiteNameInTitle="true"
				pageDescription={contentMarkdown.contentMarkdown.replace(/\n/gi, '').replace(/#/gi, '').slice(0, 90)}
				pagePath={location.pathname}
			/>
			<div className="container flex-row">
				<div className="main">
					<div className="post">
						<h1>{title}</h1>
						<p className="post__date">{category} | {createdAt}</p>
						<Img
							fluid={useContentfulImage(imageUrl)}
						/>
						{
							/* contentMarkdown */
							/* parsedSouce */
							/* contentMarkdown.contentMarkdown */
						}
						<div className="body-text" dangerouslySetInnerHTML={{ __html: marked(contentMarkdown.contentMarkdown) }} />
						<div className="post__sns">
							<div className="post__sns-text">この記事をシェアする</div>
							<Link to="/blog"><i class="fab fa-twitter"></i></Link>
							<span>
								<Link to="/blog"><i class="fab fa-facebook-square"></i></Link>
							</span>
							<Link to="/blog"><i class="fas fa-envelope"></i></Link>
						</div>
						<div className="top-keywords post__keywords">
							<div className="post__keywords-text">関連キーワード</div>
							<ul>
								{tags && tags.map(({ name, slug }) =>
									<li><Link to={`/tag/${slug}`} className="top-keywords-tagname">{name}</Link></li>
								)}
								{tags && tags.map(({ blog_article }) =>
									blog_article && blog_article.map(({ slug }) =>
										<li><Link to="/blog" className="top-keywords-tagname">{slug}</Link></li>
									)
								)}
							</ul>
						</div>
						{relatedArticle ?
						<div className="post__tagged">
							<div className="post__keywords-text">関連記事{pageContext.taggedArticles}</div>
							<PostBasic postData={relatedArticle} />
						</div>
						:
						""
						}
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
						fluid(maxWidth : 800) {
							...GatsbyContentfulFluid_withWebp
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