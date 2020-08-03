import PropTypes from "prop-types"
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import BannerSquare from '../images/top/bannerSquare.gif'
import Img from "gatsby-image"
import Slide1 from '../images/top/slide1.jpg'
import generateContentByPageViews from "../utils/generateContentByPageViews";

const Sidebar = ({ data }) => {
	const Updates = data.allContentfulPageUpdateSidebar.edges;
	const blogPostsByPageViews = data.allPageViews.nodes;
	return (
		<aside className="sidebar">
			<img src={BannerSquare} alt="BannerSquare" />
			<hr />
			<div className="sidebar-article">
				<div className="sidebar-article__title"><span className="font-lemonde italic demi">Articles les plus lus</span><br />人気記事</div>

				{
					blogPostsByPageViews && blogPostsByPageViews.map(({ path, totalCount }) => {
						if (path.indexOf('/post/') != -1 && path.substr(-1) != '/') {
							const pagePath = path.replace('post/', '').replace(/\//g, '');
							const node = generateContentByPageViews(pagePath);
							return (
								<div className="sideber-img">
									<Link to={`/post/${node.slug}`} className="sideber-img">
										{node.thumbnail != null
											? <Img fluid={node.thumbnail.fluid} alt={node.title} className="sideber-img__img" />
											: <div className="sideber-img__img img-dummy">{node.title.slice(0, 9)}...</div>
										}
										<div className="sideber--title">
											<span className="sideber--title__title">{node.title}</span>
										</div>
									</Link>
								</div>
							)
						}
					})
				}
				{/*<div className="sidebar-article__all"><Link to="/blog">すべて見る</Link></div>*/}
			</div>
			<hr />
			<div className="sidebar-article">
				<div className="sidebar-article__title"><span className="font-lemonde italic demi">Pick up articles</span><br />ピックアップ記事</div>
				<div>
					{
						Updates.map(({ node: post }) => (
							post.favouriteArticleTop && post.favouriteArticleTop.map(({ title, thumbnail, slug }) =>
								<div className="sideber-img">
									<Link to={`/post/${slug}`}>
										{thumbnail != null
											? <Img fluid={thumbnail.fluid} alt={title} className="sideber-img__img" />
											: <div className="sideber-img__img img-dummy">{title.slice(0, 9)}...</div>
										}
										<div className="sideber-title">
											<span className="sideber-title__title">{title}</span>
											{/*<span className="slide-title__date">2020/04/20</span>*/}
										</div>
									</Link>
								</div>
							)
						))
					}
				</div>
				{/*<div className="sidebar-article__all"><Link to="/blog">すべて見る</Link></div>*/}
			</div>
			<div className="sidebar-keywords">
				<div className="sidebar-keywords__title">
					<span className="font-serif">Mots-clés</span>話題のキーワード
				</div>
				<ul className="sidebar-keywords__tags tags">
					{
						Updates.map(({ node: post }) => (
							post.popularTag && post.popularTag.map(({ name, slug }) =>
								<li>
									<Link to={`/tag/${slug}`}>{name}</Link>
								</li>
							)
						))
					}
				</ul>
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
									slug
									thumbnail {
										file {
											url
										}
										fluid(maxWidth : 300) {
											...GatsbyContentfulFluid_withWebp
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
					allPageViews: allPageViews(sort: {fields: totalCount, order: DESC}, filter: {path: {glob: "/post/*"}}, limit: 3) {
						nodes {
							path
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


