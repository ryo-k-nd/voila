import React from "react";
//import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar"

import PostBasic from "../components/post-basic";

const TagArticles = ({ data, location }) => {
  //const { title, content, thumbnail } = data.contentfulBlogArticle;
  const blogPosts = data.tagArticles.edges;
  const tagInfo = data.tagInfo;
  return (
<Layout>
  <SEO
    pageTitle={`${tagInfo.name}の記事`}
    showSiteNameInTitle="true"
    pageDescription=""
    pagePath={location.pathname}
  />
  <div className="container flex-row">
    <div className="main">
      <h1>#{tagInfo.name} の記事一覧</h1>
      <div className="post-basic">
        <PostBasic postData={blogPosts} />
      </div>
    </div>
    <Sidebar />
  </div>
</Layout>
  );
};
export default TagArticles;

export const query = graphql`
  query TagArticleQueryTop($slug: String!) {
    tagArticles: allContentfulBlogArticle(filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
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
    tagInfo: contentfulTag(slug: { eq: $slug }) {
        name
        slug
    }
  }
`;