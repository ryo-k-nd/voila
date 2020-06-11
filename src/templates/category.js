import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

import PostBasic from "../components/post-basic";

const MainCategoryArticles = ({ data, pageContext }) => {
  //const { title, content, thumbnail } = data.contentfulBlogArticle;
  const blogPosts = data.mainCategoryArticles.edges;
  return (
<Layout>
  <div className="container flex-row">
    <div className="main">
      <h1>{pageContext.name_fr} の記事一覧</h1>
      <div className="post-basic">
        <PostBasic postData={blogPosts} />
      </div>
    </div>
    <Sidebar />
  </div>
</Layout>
  );
};
export default MainCategoryArticles;

export const query = graphql`
  query MainCategoryArticleQuery($name_en: String!) {
    mainCategoryArticles: allContentfulBlogArticle(filter: {category: {eq: $name_en}}) {
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
          createdAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`;