import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

const BlogArticle = ({ data }) => {
  const { title, content, thumbnail } = data.contentfulBlogArticle;
  return (
<Layout>
  <SEO title={title} />
  <div className="container flex-row">
    <div className="main">
      <div className="post">
        <h1>{title}</h1>
        <img alt={title} src={thumbnail.file.url} />
        <p className="body-text">{content.content}</p>
        <Link to="/posts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
    <Sidebar />
  </div>
</Layout>
  );
};
export default BlogArticle;
export const pageQuery = graphql`
  query($slug: String!) {
contentfulBlogArticle(slug: { eq: $slug }) {
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
`;