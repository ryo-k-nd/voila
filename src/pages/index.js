import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
//import Image from "../components/image";
import useContentfulImage from "../utils/useContentfulImage";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Slider from "react-slick";
//import Styles from "../components/style/index.module.scss"
//import PropTypes from 'prop-types';
import { interval } from 'rxjs'
import Slide1 from '../images/top/slide1.jpg'
import BannerSuper from '../images/top/bannerSuper.jpg'
import BannerSquare from '../images/top/bannerSquare.gif'
import PostBasic from "../components/postBasic";
import generateContentByPageViews from "../utils/generateContentByPageViews";
import moment from 'moment'
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
	centerMode: true,
	centerPadding: '100px',
	focusOnSelect: true,
};

const IndexPage = ({ data, location }) => {
	const blogPosts = data.allContentfulBlogArticle.edges;
	const topUpdates = data.contentfulPageUpdate;
	const blogPostsByPageViews = data.allPageViews.nodes;
	const currency = data.mysqlJdApiCurrency;
	const weather = data.mysqlJdApiWeather;

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
					<a href={topUpdates.topNOtificationLink && topUpdates.topNOtificationLink} target="_blank">
						{topUpdates.topNotificationText && topUpdates.topNotificationText}
					</a>
				</div>
			</div>
			<div className="container t-align-c">
				<img src={BannerSuper} alt="banner" />
			</div>
			<div className="top-weather container t-align-c">
				<div className="top-weather__place">
					<div className="top-weather__place-datatime">
						FRANCE
						<div className="place-time">{dateTimeUtc.tz('Europe/Paris').format('H:mm')}</div>
						<div className="place-data">{dateTimeUtc.tz('Europe/Paris').format('DD MMM YYYY').toUpperCase()}</div>
					</div>
					<div className="top-weather__place-weather">
						PARIS
						<div className="weather-mark"><i className="fas fa-cloud-sun fa-2x"></i></div>
						<div className="weather-temp">12ºC/5ºC</div>
					</div>
				</div>
				<div className="top-weather__place">
					<div className="top-weather__place-datatime">
						JAPAN
						<div className="place-time">{dateTimeUtc.tz('Asia/Tokyo').format('H:mm')}</div>
						<div className="place-data">{dateTimeUtc.tz('Asia/Tokyo').format('DD MMM YYYY').toUpperCase()}</div>
					</div>
					<div className="top-weather__place-weather">
						TOKYO
						<div className="weather-mark"><i className="fas fa-sun fa-2x"></i></div>
						<div className="weather-temp">12ºC/5ºC</div>
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
						<li><Link to="#">旅の基本情報</Link></li>
						<li><Link to="#">渡仏の準備</Link></li>
						<li><Link to="#">空港から市内まで</Link></li>
						<li><Link to="#">パリと地方都市</Link></li>
						<li><Link to="#">便利マップ</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Vie</p>
					<ul>
						<li><Link to="#">暮らしの基本情報</Link></li>
						<li><Link to="#">住まい</Link></li>
						<li><Link to="#">お金</Link></li>
						<li><Link to="#">医療＆健康</Link></li>
						<li><Link to="#">交際＆子育て</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Études</p>
					<ul>
						<li><Link to="#">学びの基本情報</Link></li>
						<li><Link to="#">語学留学</Link></li>
						<li><Link to="#">専門学校＆ディプロマ</Link></li>
						<li><Link to="#">大学・大学院</Link></li>
						<li><Link to="#">趣味・生涯学習</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Travail</p>
					<ul>
						<li><Link to="#">仕事の基本情報</Link></li>
						<li><Link to="#">仕事を見つける</Link></li>
						<li><Link to="#">職場と働き方</Link></li>
						<li><Link to="#">ビジネスマナー</Link></li>
						<li><Link to="#">仕事図鑑</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p className="font-lemonde italic regular">Divertissement</p>
					<ul>
						<li><Link to="#">レストラン・カフェ</Link></li>
						<li><Link to="#">アート・カルチャー</Link></li>
						<li><Link to="#">ショッピング</Link></li>
						<li><Link to="#">旅行</Link></li>
						<li><Link to="#">お土産</Link></li>
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
					<img src={BannerSquare} alt="BannerSquare" />
				</aside>
			</div>
			<div className="top-keywords container t-align-c">
				<div className="top-keywords-title top-heading">
					<h2 className="font-lemonde italic regular">Mots-clés</h2>
					<span>今話題のキーワード</span>
				</div>
				<div className="t-align-c top-keywords__tags">
					{
						topUpdates.popularTag && topUpdates.popularTag.map(({ name, slug }) =>
							<Link to={`/tag/${slug}`} className="top-keywords-tagname"><span>#{name}</span></Link>
						)
					}
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
								if (path.indexOf('/post/') != -1 && path.substr(-1) != '/') {
									const pagePath = path.replace('post/', '').replace(/\//g, '');
									const node = generateContentByPageViews(pagePath);
									return (
										<div className="post-tile-item">
											<Link to={path} className="post-tile-inner">
												{node.thumbnail != null
													? <Img fluid={node.thumbnail.fluid} alt={node.title} className="thumbnail" />
													: <div className="thumbnail img-dummy">{node.title.slice(0, 9)}...</div>
												}
												<h4>PV: {totalCount} | {node.title}</h4>
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
			<div className="container t-align-c">
				<img src={BannerSuper} alt="banner" />
			</div>
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
		contentfulPageUpdate: contentfulPageUpdate(node_locale: {eq: "ja-JP"}) {
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
		}
		mysqlJdApiCurrency {
			Currency
			Date(formatString: "YYYY-MM-DD HH:mm")
			Rate
		}
		mysqlJdApiWeather {
			City
			Date
			Max
			Min
			Telop
		}
	}
`;
