import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Slider from "react-slick";
//import Styles from "../components/style/index.module.scss"
import PropTypes from 'prop-types';

import Slide1 from '../images/top/slide1.jpg'
import Slide2 from '../images/top/slide2.jpg'
import Slide3 from '../images/top/slide3.jpg'
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


const IndexPage = ({ data }) => {
	const blogPosts = data.allContentfulBlogArticle.edges;
	return (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
		<div className="notification-common">
			<div className="container">
				<p>フランスにおけるコロナ最新情報</p>
			</div>
		</div>
		<div className="container t-align-c">
			<img src={BannerSuper} alt="banner" />
		</div>
		<div className="container t-align-c">
			<div>Weather report</div>
		</div>
		<div className="slide container">
			<Slider {...settings}>
					<div className="slide-img"><img src={Slide1} alt="Slide1" /></div>
					<div className="slide-img"><img src={Slide2} alt="Slide2" /></div>
					<div className="slide-img"><img src={Slide3} alt="Slide3" /></div>
			</Slider>
		</div>
		<div className="top-sub_category container flex-row">
			<div className="flex-column-2point4">
				<p>Voyage</p>
				<ul>
					<li>旅の基本情報</li>
					<li>渡仏の準備</li>
					<li>空港から市内まで</li>
					<li>パリと地方都市</li>
					<li>便利マップ</li>
				</ul>
			</div>
			<div className="flex-column-2point4">
				<p>Vie</p>
				<ul>
					<li>暮らしの基本情報</li>
					<li>住まい</li>
					<li>お金</li>
					<li>医療＆健康</li>
					<li>交際＆子育て</li>
				</ul>
			</div>
			<div className="flex-column-2point4">
				<p>Etudes</p>
				<ul>
					<li>学びの基本情報</li>
					<li>語学留学</li>
					<li>専門学校＆ディプロマ</li>
					<li>大学・大学院</li>
					<li>趣味・生涯学習</li>
				</ul>
			</div>
			<div className="flex-column-2point4">
				<p>Travail</p>
				<ul>
					<li>仕事の基本情報</li>
					<li>仕事を見つける</li>
					<li>職場と働き方</li>
					<li>ビジネスマナー</li>
					<li>仕事図鑑</li>
				</ul>
			</div>
			<div className="flex-column-2point4">
				<p>Divertissement</p>
				<ul>
					<li>レストラン・カフェ</li>
					<li>アート・カルチャー</li>
					<li>ショッピング</li>
					<li>旅行</li>
					<li>お土産</li>
				</ul>
			</div>
		</div>
		<div className="top-latest_article container flex-row">
			<div className="main">
				<h2>Les derniers articles 新しい記事!</h2>
				<div className="post-basic">
					<PostBasic postData={blogPosts} />
				</div>
				<div className="t-align-c">
					<Link>新しい記事をもっと見る</Link>
				</div>
			</div>
			<aside className="sidebar">
				<img src={BannerSquare} alt="BannerSquare" />
			</aside>
		</div>
		<div className="top-keywords container t-align-c">
			<div className="top-keywords-title">
				<h2>Mots-clés</h2>
				<span>今話題のキーワード</span>
			</div>
			<div className="t-align-c">
				<span className="top-keywords-tagname">行きたい店</span>
				<span className="top-keywords-tagname">マルシェ</span>
				<span className="top-keywords-tagname">買ってよかったもの</span>
				<span className="top-keywords-tagname">トラブル解決</span>
				<span className="top-keywords-tagname">朝ごはん</span>
				<span className="top-keywords-tagname">マナー</span>
				<span className="top-keywords-tagname">深夜営業</span>
				<span className="top-keywords-tagname">暮らしの道具</span>
				<span className="top-keywords-tagname">美術館</span>
				<span className="top-keywords-tagname">ネイティブのフランス語</span>
			</div>
		</div>
		<div className="top-popular_article t-align-c">
			<div className="container">
				<div className="top-popular_article-title">
					<h2>Articles les plus lus</h2>
					<span>人気の記事</span>
				</div>
				<div className="post-tile">
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
					<div className="post-tile-item">
						<div className="post-tile-inner">
							<img src={Slide1} alt="Slide1" className="thumbnail" />
							<h3>パリで徹底取材「フランスで働く」 現実はこういうこと</h3>
							<div className="post-tile-catname">Voyage</div>
							<div className="post-tile-tagbox">
								<span className="post-tile-tagname">#パリの交通</span>
								<span className="post-tile-tagname">#行きたい店</span>
								<span className="post-tile-tagname">#買ってよかったもの</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container t-align-c">
			<img src={BannerSuper} alt="banner" />
		</div>
		<div className="container t-align-c">
			<p>最新のフランス情報満載のメルマガ</p>
		</div>
	</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query BlogArticleQueryTop {
		allContentfulBlogArticle(filter: {node_locale: {eq: "ja-JP"}}) {
			edges {
				node {
					id
					title
					slug
					category
					content {
						content
					}
					thumbnail {
						file {
							url
						}
					}
					tags {
						name
						slug
					}
					createdAt(formatString: "YYYY/MM/DD")
				}
			}
		}
	}
`;
