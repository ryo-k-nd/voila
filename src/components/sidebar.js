import PropTypes from "prop-types"
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
//import BannerSquare from '../images/top/bannerSquare.gif'
import Img from "gatsby-image"
import Slide1 from '../images/top/slide1.jpg'
import generateContentByPageViews from "../utils/generateContentByPageViews";
import SquareBanner from "../components/squareBanner"

const Sidebar = ({ data }) => {
	const Updates = data.contentfulPageUpdateSide;
	const blogPostsByPageViews = data.allPageViews.nodes;
	return (
		<aside className="sidebar">
			<div className="for-pc"><SquareBanner /></div>
			<hr />
			<div className="sidebar-article">
				<div className="sidebar-article__title"><span className="font-lemonde italic demi">Articles les plus lus</span><br />人気記事</div>
				{blogPostsByPageViews && blogPostsByPageViews.map(({ path, totalCount }) => {
					if (path.indexOf('/post/') !== -1 && path.substr(-1) !== '/') {
						const pagePath = path.replace('post/', '').replace(/\//g, '');
						const node = generateContentByPageViews(pagePath);
						return (
							<div className="sideber-img">
								<Link to={`/post/${node.slug}`} className="sideber-img">
									{node.thumbnail !== null
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
				})}
			</div>
			<hr />
			<div className="sidebar-article">
				<div className="sidebar-article__title"><span className="font-lemonde italic demi">Pick up articles</span><br />ピックアップ記事</div>
				<div>
					{Updates.favouriteArticleTop && Updates.favouriteArticleTop.map(({ title, thumbnail, slug }) =>
						<div className="sideber-img">
							<Link to={`/post/${slug}`}>
								{thumbnail !== null
									? <Img fluid={thumbnail.fluid} alt={title} className="sideber-img__img" />
									: <div className="sideber-img__img img-dummy">{title.slice(0, 9)}...</div>
								}
								<div className="sideber-title">
									<span className="sideber-title__title">{title}</span>
									{/*<span className="slide-title__date">2020/04/20</span>*/}
								</div>
							</Link>
						</div>
					)}
				</div>
			</div>
			<div className="sidebar-keywords">
				<div className="sidebar-keywords__title">
					<span className="font-serif">Mots-clés</span>話題のキーワード
				</div>
				<ul className="sidebar-keywords__tags tags">
					{Updates.popularTag && Updates.popularTag.map(({ name, slug }) =>
						<li>
							<Link to={`/tag/${slug}`}>{name}</Link>
						</li>
					)}
				</ul>
			</div>
			<div className="chase-square">
				<SquareBanner />
			</div>
		</aside>
	)
}

export default function showSidebar(props) {
	return (
		<StaticQuery
			query={graphql`
				query BlogArticleQuerySidebar {
					contentfulPageUpdateSide: contentfulPageUpdate(id: {eq: "fa14f0f7-c808-5d1f-a88f-c90238cb9530"}, node_locale: {eq: "ja-JP"}) {
						favouriteArticleTop {
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
						}
						popularTag {
							name
							slug
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
		favouriteArticleTop: PropTypes.shape({
			title: PropTypes.string.isRequired,
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
}


