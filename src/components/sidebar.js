import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import BannerSquare from '../images/top/bannerSquare.gif'

const Sidebar = ( { data } ) => {
	const Updates = data.allContentfulPageUpdateSidebar.edges;
	return (
		<aside className="sidebar">
			<img src={BannerSquare} alt="BannerSquare" />
			<p>人気記事</p>
			<hr />
			<div className="sidebar-keywords">
				<h2>オススメ記事</h2>
				<div>
					{
						Updates.map(({ node: post }) => (
							post.favouriteArticleTop && post.favouriteArticleTop.map(({ title, thumbnail }) =>
								<div className="slide-img">
									<img src={thumbnail.file.url} alt="Slide3" />
									<p className="slide-title">
										<span className="slide-title__title">{title}</span>
										<span className="slide-title__data">2020/04/20</span>
									</p>
								</div>
							)
						))
					}
				</div>
			</div>

			<hr />
			<div className="sidebar-keywords">
				<div>
					<h2>Mots-clés</h2>
					<span>今話題のキーワード</span>
				</div>
				<div>
					{
						Updates.map(({ node: post }) => (
							post.popularTag && post.popularTag.map(({ name, slug }) =>
								<Link to={`/tag/${slug}`}><span>{name}</span><br /></Link>
							)
						))
					}
				</div>
			</div>
		</aside>
	)
}

export default function showSidebar(props) {
	return (
		<StaticQuery
			query={graphql`
				query BlogArticleQuerySidebar {
					allContentfulPageUpdateSidebar: allContentfulPageUpdate(filter: {node_locale: {eq: "ja-JP"}}) {
						edges {
							node {
								favouriteArticleTop {
									title
									createdAt(formatString: "YYYY-MM-DD")
									thumbnail {
										file {
											url
										}
									}
								}
								popularTag {
									name
									slug
								}
							}
						}
					}
				}
			`}
			render={data => <Sidebar data={data} {...props} />}
		/>
	)
}

Sidebar.propTypes = {
	data: PropTypes.shape({
		edges: PropTypes.shape({
			node: PropTypes.shape({
				favouriteArticleTop: PropTypes.shape({
					title: PropTypes.string.isRequired,
					createdAt: PropTypes.string.isRequired,
					thumbnail: PropTypes.shape({
						file: PropTypes.shape({
							url: PropTypes.string.isRequired,
						}).isRequired,
					}).isRequired,
				}).isRequired,
				popularTag: PropTypes.shape({
					name: PropTypes.string.isRequired,
					slug: PropTypes.string.isRequired,
				}).isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
}


