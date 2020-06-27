import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
//import Image from "../components/image";
import useContentfulImage from "../utils/useContentfulImage";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Slider from "react-slick";
//import Styles from "../components/style/index.module.scss"
//import PropTypes from 'prop-types';

import Slide1 from '../images/top/slide1.jpg'
//import Slide2 from '../images/top/slide2.jpg'
//import Slide3 from '../images/top/slide3.jpg'
import BannerSuper from '../images/top/bannerSuper.jpg'
import BannerSquare from '../images/top/bannerSquare.gif'

import PostBasic from "../components/post-basic";

//import "./index.css";
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
	const topUpdates = data.allContentfulPageUpdate.edges;

	return (
		<Layout>
			<SEO
				pageTitle="Voilà｜ヴォワラ・フランス生活情報メディア！"
				keywords={[`gatsby`, `application`, `react`]}
			/>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			<div className="container t-align-c">
				<img src={BannerSuper} alt="banner" />
			</div>
			<div className="top-weather container t-align-c">
				<div className="top-weather__place">
					<div className="top-weather__place-datatime">
						FRANCE
						<div className="place-time">04:19</div>
						<div className="place-data">11 APR 2020</div>
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
						<div className="place-time">14:19</div>
						<div className="place-data">11 APR 2020</div>
					</div>
					<div className="top-weather__place-weather">
						TOKYO
						<div className="weather-mark"><i className="fas fa-sun fa-2x"></i></div>
						<div className="weather-temp">12ºC/5ºC</div>
					</div>
				</div>

				<div className="top-weather__money">
					1€
      <div className="top-weather__money-yen">¥105.04</div>
					<div className="top-weather__data">2020-04-12 11:55 UTC</div>
				</div>
			</div>
			<div className="slide">
				<Slider {...settings}>
					{
						topUpdates.map(({ node: post }) => (
							post.favouriteArticleTop && post.favouriteArticleTop.map(({ title, thumbnail }) =>
								<div className="slide-img">
									<img src={`${thumbnail.file.url}?w=750`} alt="Slide3" />

									<p className="slide-title">
										<span className="slide-title__title">{title}</span>
										<span className="slide-title__data">2020/04/20</span>
									</p>
								</div>
							)
						))
					}
				</Slider>
			</div>
			<div className="top-sub_category container flex-row">
				<div className="flex-column-2point4">
					<p>Voyage</p>
					<ul>
						<li><Link to="#">旅の基本情報</Link></li>
						<li><Link to="#">渡仏の準備</Link></li>
						<li><Link to="#">空港から市内まで</Link></li>
						<li><Link to="#">パリと地方都市</Link></li>
						<li><Link to="#">便利マップ</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p>Vie</p>
					<ul>
						<li><Link to="#">暮らしの基本情報</Link></li>
						<li><Link to="#">住まい</Link></li>
						<li><Link to="#">お金</Link></li>
						<li><Link to="#">医療＆健康</Link></li>
						<li><Link to="#">交際＆子育て</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p>Études</p>
					<ul>
						<li><Link to="#">学びの基本情報</Link></li>
						<li><Link to="#">語学留学</Link></li>
						<li><Link to="#">専門学校＆ディプロマ</Link></li>
						<li><Link to="#">大学・大学院</Link></li>
						<li><Link to="#">趣味・生涯学習</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p>Travail</p>
					<ul>
						<li><Link to="#">仕事の基本情報</Link></li>
						<li><Link to="#">仕事を見つける</Link></li>
						<li><Link to="#">職場と働き方</Link></li>
						<li><Link to="#">ビジネスマナー</Link></li>
						<li><Link to="#">仕事図鑑</Link></li>
					</ul>
				</div>
				<div className="flex-column-2point4">
					<p>Divertissement</p>
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
					<h2>Les derniers articles<span>新しい記事!</span></h2>
					<div className="post-basic">
						<PostBasic postData={blogPosts} />
					</div>
					<Link to="/posts" className="show-more t-align-c">
						新しい記事をもっと見る
					</Link>
				</div>
				<aside className="sidebar">
					<img src={BannerSquare} alt="BannerSquare" />
				</aside>
			</div>
			<div className="top-keywords container t-align-c">
				<div className="top-keywords-title top-heading">
					<h2>Mots-clés</h2>
					<span>今話題のキーワード</span>
				</div>
				<div className="t-align-c">
					{
						topUpdates.map(({ node: post }) => (
							post.popularTag && post.popularTag.map(({ name, slug }) =>
								<Link to={`/tag/${slug}`} className="top-keywords-tagname"><span>{name}</span></Link>
							)
						))
					}
				</div>
			</div>
			<div className="top-popular_article t-align-c">
				<div className="container">
					<div className="top-popular_article-title top-heading">
						<h2>Articles les plus lus</h2>
						<span>人気の記事</span>
					</div>
					<div className="post-tile">
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
						<div className="post-tile-item">
							<div className="post-tile-inner">
								<img src={Slide1} alt="Slide1" className="thumbnail" />
								<h4>パリで徹底取材「フランスで働く」 現実はこういうこと</h4>
								<div className="post-tile-catname">Voyage</div>
								<div className="post-tile-tagbox tags">
									<Link to="#" className="post-tile-tagname">#パリの交通</Link>
									<Link to="#" className="post-tile-tagname">#行きたい店</Link>
									<Link to="#" className="post-tile-tagname">#買ってよかったもの</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="top-popular_article--more t-align-c">
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
						<i className="fas fa-envelope fa-2x fa-newsletter"></i>
						<div className="top-newsletter__text flex-row">
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
		allContentfulBlogArticle: allContentfulBlogArticle(sort: {fields: createdAt, order: DESC}, filter: {node_locale: {eq: "ja-JP"}}) {
			edges {
				node {
					id
					title
					slug
					category
					thumbnail {
						file {
							url
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
		allContentfulPageUpdate: allContentfulPageUpdate(filter: {node_locale: {eq: "ja-JP"}}) {
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
`;
