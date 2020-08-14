const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
	const { createRedirect } = actions;
	//createRedirect({
	//	fromPath: "/testaaa/",
	//	toPath: "/test/",
	//	isPermanent: true
	//});
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
				subCategories: allContentfulSubCategory {
					nodes {
						parentCategory
						name_ja
						name_fr
						name_en
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

				edge.node.tags && edge.node.tags.forEach(tag => {
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
				{ name_en: 'Travel',
					slug: 'travel',
					name_fr: 'Voyage',
					name_ja: '旅する',
					desc: '日本からフランスへの旅行、フランス国内旅、ヨーロッパへの旅を楽しむための便利情報'
				},
				{ name_en: 'Life',
					slug: 'life',
					name_fr: 'Vie',
					name_ja: '暮らす',
					desc: 'フランス生活を始めるためのヒントや、暮らしの役立ち情報、時事ニュースなど'
				},
				{ name_en: 'Study',
					slug: 'study',
					name_fr: 'Edudes',
					name_ja: '学ぶ',
					desc: '語学学校、交換留学、大学院留学、社会人留学、専門学校などに関する情報はこちらから'
				},
				{ name_en: 'Work',
					slug: 'work',
					name_fr: 'Travail',
					name_ja: '働く',
					desc: 'フランスの仕事事情、就職・転職、ビジネスマナー、履歴書やレジュメの書き方などに関するTIPS'
				},
				{ name_en: 'Play',
					slug: 'play',
					name_fr: 'Divertissement',
					name_ja: '遊ぶ',
					desc: 'ショッピング、グルメ、レストラン、カフェ、スイーツ、観光、ホテル、お土産など、フランスを楽しむためのおすすめ情報'
				},
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
						name_ja: categoryItem.name_ja,
						desc: categoryItem.desc,
					},
				})
			})

			//subCategoryごとのページ作成
			const subCategoryTemplate = path.resolve("./src/templates/subCategory.js");
			const subCategory = result.data.subCategories.nodes;
			subCategory.forEach(subCategoryItem => {
				createPage({
					//path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
					path: `/${subCategoryItem.parentCategory}/${subCategoryItem.name_en}/`,
					component: subCategoryTemplate,
					context: {
						name_en: subCategoryItem.name_en,
						name_fr: subCategoryItem.name_fr,
						name_ja: subCategoryItem.name_ja,
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

