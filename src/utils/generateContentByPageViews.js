
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
        }
      }
    }
  }
`)
 const postObj = allContentfulBlogArticle.edges.find(n => n.node.slug === pagePath)
 if ( postObj ){
  const postObjNode = postObj.node
  return postObjNode.title
}
 // return allContentfulAsset.nodes.file && allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}