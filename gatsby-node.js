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
							tags {
								slug
							}
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

				const relatedTags = [];

				edge.node.tags.forEach(tag => {
					relatedTags.push(tag.slug);
				})

				createPage({//contextで送る値はgraphQLで変数として使用できる
					path: `/post/${edge.node.slug}/`,
					component: slash(blogArticleTemplate),
					context: {
						slug: edge.node.slug,
						id: edge.node.id,
						tags: relatedTags
					}
				});
			});

			//Main Categoryごとの記事一覧ページ
			const mainCategoryTemplate = path.resolve("./src/templates/category.js");
			const categories = [
				{ name_en: 'Travel', slug: 'travel', name_fr: 'FR Travel'},
				{ name_en: 'Life', slug: 'life', name_fr: 'FR Life'},
				{ name_en: 'Study', slug: 'study', name_fr: 'FR Study'},
				{ name_en: 'Work', slug: 'work', name_fr: 'FR Work'},
				{ name_en: 'Play', slug: 'play', name_fr: 'FR Play'},
			];
			categories.forEach(categoryItem => {
				createPage({
					//path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
					path: `/${categoryItem.slug}/`,
					component: mainCategoryTemplate,
					context: {
						slug: categoryItem.slug,
						name_en: categoryItem.name_en,
						name_fr: categoryItem.name_fr,
					},
				})
			})

			//Tagごとの記事一覧ページ
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

