import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

const BlogArticle = ({ data }) => {
  const { title, content, thumbnail, category, slug, createdAt, tags } = data.contentfulBlogArticle;
  return (
<Layout>
  <SEO title={title} />
  <div className="container flex-row">
    <div className="main">
      <div className="post">
        <h1>{title}</h1>
        <p>カテゴリ: {category}</p>
        <img alt={title} src={thumbnail.file.url} />
        <p className="body-text">{content.content}</p>
        <div>
          <p>Tags: </p>
          <ul>
          {tags && tags.map(({ name, slug }) =>
            <li><Link to={`/tag/${slug}`}>#{name}</Link></li>
            )
          }
          </ul>

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
  query($slug: String!) {
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
  }
  createdAt(formatString: "YYYY/MM/DD")
}
  }
`;