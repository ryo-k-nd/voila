
import { useStaticQuery, graphql } from "gatsby";


export default pagePath => {
  const { allContentfulBlogArticle } = useStaticQuery(graphql`
  query {
    allContentfulBlogArticle( filter: {node_locale: {eq: "ja-JP"}} ) {
      edges {
        node {
          id
          title
          slug
          thumbnail {
            file {
              url
            }
            fluid(maxWidth : 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          tags {
						name
						slug
          }
          category
        }
      }
    }
  }
`)
  const postObj = allContentfulBlogArticle.edges.find(n => n.node.slug === pagePath)
  if (postObj) {
    return postObj.node
  }
  // return allContentfulAsset.nodes.file && allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}