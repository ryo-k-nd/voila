import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"
import PostBasic from "../components/postBasic";

const SubCategoryArticles = ({ data, pageContext, location }) => {
  //const { title, content, thumbnail } = data.contentfulBlogArticle;
  const blogPosts = data.subCategoryArticles.edges;
  return (
<Layout>
  <SEO
    pageTitle={`${pageContext.name_ja}の記事一覧`}
    //pageDescription={pageContext.desc}
    pagePath={location.pathname}
  />
  <div className="container flex-row">
    <div className="main">
      <h1>{pageContext.name_ja} の記事一覧</h1>
      <div className="post-basic">
        <PostBasic postData={blogPosts} />
      </div>
    </div>
    <Sidebar />
  </div>
</Layout>
  );
};
export default SubCategoryArticles;

export const query = graphql`
  query SubCategoryArticleQuery($name_en: String!) {
    subCategoryArticles: allContentfulBlogArticle(filter: {subCategory: {name_en: {eq: $name_en}}}) {
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
          createdAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`;