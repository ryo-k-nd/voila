import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const BlogArticles = ({ data }) => {
  const blogPosts = data.allContentfulBlogArticle.edges;
  return (
    <Layout>
      <SEO title="Blog Article" />
      <h1>{"Here's a list of all posts!"}</h1>
      <div className="posts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
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
        }
      }
    }
  }
`;