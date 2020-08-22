import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
//import Image from "../components/image";
//import useContentfulImage from "../utils/useContentfulImage";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Slider from "react-slick";
//import Styles from "../components/style/index.module.scss"
//import PropTypes from 'prop-types';
import { interval } from 'rxjs'
//import Slide1 from '../images/top/slide1.jpg'
//import BannerSuper from '../images/top/bannerSuper.jpg'
//import BannerSquare from '../images/top/bannerSquare.gif'
import PostBasic from "../components/postBasic";
import generateContentByPageViews from "../utils/generateContentByPageViews";
//import moment from 'moment'
import momentTimezone from 'moment-timezone'
import icon_mail from '../images/top/icon-newsletter.svg';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 4000,
	arrows: true,
	slidesToShow: 1,
	centerPadding: '100px',
	focusOnSelect: true,
	centerMode: true,
	responsive: [{
		breakpoint: 896,
		settings: {
			centerMode: false,
		}
	}]
};

const IndexPage = ({ data, location }) => {
	const blogPosts = data.allContentfulBlogArticle.edges;
	const topUpdates = data.contentfulPageUpdate;
	const blogPostsByPageViews = data.allPageViews.nodes;
	const subCategories = data.subCategory.nodes;
	const currency = data.mysqlJdApiCurrency;
	const weatherTokyo = data.mysqlWeatherVoilaTokyo;
	const weatherParis = data.mysqlWeatherVoilaParis;

	//現在時刻取得と毎秒更新
	const dateTimeUtc = momentTimezone.tz(new Date(), 'UTC');
	const [date, setDate] = useState(dateTimeUtc)
	useEffect(() => {
		const subscription = interval(60000).subscribe(() => {
			setDate(new Date())
		})
		return () => {
			subscription.unsubscribe()
		}
	}, [])

	return (
		<Layout>
			<SEO
				pageTitle="Voilà｜ヴォワラ・フランス生活情報メディア！"
				keywords={[`gatsby`, `application`, `react`]}
			/>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			<div className="notification-common">
				<div className="container">
					<a href={topUpdates.topNOtificationLink && topUpdates.topNOtificationLink} target="_blank" rel="noreferrer" >
						{topUpdates.topNotificationText && topUpdates.topNotificationText}
					</a>
				</div>
			</div>
			{topUpdates.bannerSuperImage !== null
				&& <div className="container t-align-c top-superimage"><a href={topUpdates.bannerSuper && topUpdates.bannerSuper} target="_blank" rel="noreferrer"><Img fluid={topUpdates.bannerSuperImage.fluid} alt="super bunner" className="thumbnail" /></a></div>
			}
			<div className="top-weather container t-align-c">
				<div className="top-weather__place">
					<div className="top-weather__place-datatime">
						FRANCE
						<div className="place-time">{dateTimeUtc.tz('Europe/Paris').format('H:mm')}</div>
						<div className="place-data">{dateTimeUtc.tz('Europe/Paris').format('DD MMM YYYY').toUpperCase()}</div>
					</div>
					<div className="top-weather__place-weather">
						{weatherParis.City}
						<div className="weather-mark"><img src={weatherParis.Icon} alt="Weather Icon Paris" /></div>
						<div className="weather-temp">{weatherParis.Max}ºC/{weatherParis.Min}ºC</div>
					</div>
				</div>
				<div className="top-weather__place">
					<div className="top-weather__place-datatime">
						JAPAN
						<div className="place-time">{dateTimeUtc.tz('Asia/Tokyo').format('H:mm')}</div>
						<div className="place-data">{dateTimeUtc.tz('Asia/Tokyo').format('DD MMM YYYY').toUpperCase()}</div>
					</div>
					<div className="top-weather__place-weather">
						{weatherTokyo.City}
						<div className="weather-mark"><img src={weatherTokyo.Icon} alt="Weather Icon Tokyo" /></div>
						<div className="weather-temp">{weatherTokyo.Max}ºC/{weatherTokyo.Min}ºC</div>
					</div>
				</div>

				<div className="top-weather__money">
					1€
					<div className="top-weather__money-yen">¥{currency.Rate.toFixed(2)}</div>
					<div className="top-weather__data">{currency.Date}</div>
				</div>
			</div>
			<div className="slide">
				<Slider {...settings}>
					{
						topUpdates.favouriteArticleTop && topUpdates.favouriteArticleTop.map(({ title, thumbnail }) =>
							<div className="slide-img">
								<img src={`${thumbnail.file.url}?w=750`} alt="Slide3" />
								<p className="slide-title">
									<span className="slide-title__title">{title}</span>
									<span className="slide-title__data">2020/04/20</span>
								</p>
							</div>
						)
					}
				</Slider>
			</div>
			<div className="top-sub_category container flex-row">
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Voyage</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Travel') {
								return (
									<li><Link to={`/${parentCategory.toLowerCase()}/${name_en}`}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Vie</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Life') {
								return (
									<li><Link to={`/${parentCategory.toLowerCase()}/${name_en}`}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Études</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Study') {
								return (
									<li><Link to={`/${parentCategory.toLowerCase()}/${name_en}`}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Travail</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Work') {
								return (
									<li><Link to={`/${parentCategory.toLowerCase()}/${name_en}`}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Divertissement</p>
					<ul>
						{subCategories && subCategories.map(({ name_en, name_ja, parentCategory }) => {
							if (parentCategory === 'Play') {
								return (
									<li><Link to={`/${parentCategory.toLowerCase()}/${name_en}`}>{name_ja}</Link></li>
								)
							}
						})}
					</ul>
				</div>
			</div>
			<div className="top-latest_article container flex-row">
				<div className="main top-heading">
					<h2 className="font-lemonde italic regular">Les derniers articles<span>新しい記事</span></h2>
					<div className="post-basic">
						<PostBasic postData={blogPosts} />
					</div>
					<div className="flex-row">
						<Link to="/posts" className="show-more t-align-c">
							新しい記事をもっと見る
						</Link>
					</div>
				</div>
				<aside className="sidebar">
					{topUpdates.bannerSquareImage !== null
						&& <a href={topUpdates.bannerSquare && topUpdates.bannerSquare} target="_blank" rel="noreferrer"><Img fluid={topUpdates.bannerSquareImage.fluid} alt="square bunner" className="thumbnail" /></a>
					}
				</aside>
			</div>
			<div className="top-keywords container t-align-c">
				<div className="top-keywords-title top-heading">
					<h2 className="font-lemonde italic regular">Mots-clés</h2>
					<span>今話題のキーワード</span>
				</div>
				<div className="t-align-c top-keywords__tags">
					{topUpdates.popularTag && topUpdates.popularTag.map(({ name, slug }) =>
						<Link to={`/tag/${slug}`} className="top-keywords-tagname"><span>#{name}</span></Link>
					)}
				</div>
			</div>
			<div className="top-popular_article t-align-c">
				<div className="container">
					<div className="top-popular_article-title top-heading">
						<h2 className="font-lemonde italic regular">Articles les plus lus</h2>
						<span>人気の記事</span>
					</div>
					<div className="post-tile">
						{
							blogPostsByPageViews && blogPostsByPageViews.map(({ path, totalCount }) => {
								if (path.indexOf('/post/') !== -1 && path.substr(-1) !== '/') {
									const pagePath = path.replace('post/', '').replace(/\//g, '');
									const node = generateContentByPageViews(pagePath);
									return (
										<div className="post-tile-item">
											<Link to={path} className="post-tile-inner">
												{node.thumbnail !== null
													? <Img fluid={node.thumbnail.fluid} alt={node.title} className="thumbnail" />
													: <div className="thumbnail img-dummy">{node.title.slice(0, 9)}...</div>
												}
												<h4>{node.title}</h4>
												<div className="post-tile-catname">{node.category}</div>
												<div className="post-tile-tagbox tags">
													{
														node.tags && node.tags.map(({ name, slug }) =>
															<Link to={`/tag/${slug}`} className="post-tile-tagname"><span>#{name}</span></Link>
														)
													}
												</div>
											</Link>
										</div>
									)
								}
							})
						}
					</div>
				</div>
			</div>
			<div className="top-popular_article--more t-align-c flex-row">
				<Link to="#" className="show-more">
					おすすめの記事をもっと見る
				</Link>
			</div>
			{topUpdates.bannerSuperImage !== null
				&& <div className="container t-align-c top-superimage"><a href={topUpdates.bannerSuper && topUpdates.bannerSuper} target="_blank" rel="noreferrer"><Img fluid={topUpdates.bannerSuperImage.fluid} alt="super bunner" className="thumbnail" /></a></div>
			}
			<div className="top-newsletter container">
				<Link to="/newsletter">
					<div className="flex-row">
						<div className="top-newsletter__img"><img src={icon_mail} alt="mail"></img></div>
						<div className="top-newsletter__text">
							<div className="top-newsletter__text-title">最新のフランス情報満載のメルマガ</div>
							<div className="top-newsletter__text-text">フランス・パリの現地から最新情報、便利なイベント情報、コラムなどを配信します。お気軽にご登録ください。</div>
						</div>
					</div>
				</Link>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query BlogArticleQueryTop {
		allContentfulBlogArticle: allContentfulBlogArticle(limit: 5, sort: {fields: createdAt, order: DESC}, filter: {node_locale: {eq: "ja-JP"}}) {
			edges {
				node {
					id
					title
					slug
					category
					thumbnail {
						fluid(maxWidth : 800) {
							...GatsbyContentfulFluid_withWebp
						}
					}
					tags {
						name
						slug
					}
					createdAt(formatString: "YYYY-MM-DD")
				}
			}
		}
		allPageViews: allPageViews(sort: {fields: totalCount, order: DESC}, filter: {path: {glob: "/post/*"}}, limit: 3) {
			nodes {
				path
				totalCount
			}
		}
		subCategory: allContentfulSubCategory {
			nodes {
				name_en
				name_ja
				parentCategory
			}
		}
		contentfulPageUpdate: contentfulPageUpdate(id: {eq: "fa14f0f7-c808-5d1f-a88f-c90238cb9530"}, node_locale: {eq: "ja-JP"}) {
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
			topNotificationText
			topNOtificationLink
			bannerSuper
			bannerSuperImage {
				fluid(maxWidth: 728) {
					...GatsbyContentfulFluid_withWebp
				}
			}
			bannerSquare
			bannerSquareImage {
				fluid(maxWidth: 300) {
					...GatsbyContentfulFluid_withWebp
				}
			}
		}
		mysqlJdApiCurrency {
			Currency
			Date(formatString: "YYYY-MM-DD HH:mm")
			Rate
		}
		mysqlWeatherVoilaTokyo {
			City
			Datetime
			Max
			Min
			Telop
			Icon
		}
		mysqlWeatherVoilaParis {
			City
			Datetime
			Max
			Min
			Telop
			Icon
		}
	}
`;
