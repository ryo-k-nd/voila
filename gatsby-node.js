const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	// we use the provided allContentfulBlogArticle query to fetch the data from Contentful
	return graphql(
		`
			{
				allContentfulBlogArticle {
					edges {
						node {
							id
							slug
						}
					}
				}
				tags: allContentfulBlogArticle {
					distinct(field: tags___slug)
				}
			}
		`
	).then(result => {
			if (result.errors) {
				console.log("Error retrieving contentful data",      result.errors);
			}

			// Resolve the paths to our template
			const blogArticleTemplate = path.resolve("./src/templates/post.js");
			// Then for each result we create a page.
			result.data.allContentfulBlogArticle.edges.forEach(edge => {
				createPage({
					path: `/post/${edge.node.slug}/`,
					component: slash(blogArticleTemplate),
					context: {
					slug: edge.node.slug,
						id: edge.node.id
					}
				});
			});

			const tagTemplate = path.resolve("./src/templates/tag.js");
			const tags = result.data.tags.distinct;
			tags.forEach(tagSlug => {
				createPage({
					//path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
					path: `/tag/${tagSlug}/`,
					component: tagTemplate,
					context: {
						slug: tagSlug,
					},
				})
			})
		})
		.catch(error => {
			console.log("Error retrieving contentful data", error);
		});
};
exports.onCreateNode = ({ node }) => {
	console.log(node.internal.type)
}

