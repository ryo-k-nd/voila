import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
	<footer className="footer-common">
		<div className="container">
			<div className="flex-row">
				<div className="flex-column-2">
					<p>Voyage</p>
					<ul>
						<li>旅の基本情報</li>
						<li>渡仏の準備</li>
						<li>空港から市内まで</li>
						<li>パリと地方都市</li>
						<li>便利マップ</li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Vie</p>
					<ul>
						<li>暮らしの基本情報</li>
						<li>住まい</li>
						<li>お金</li>
						<li>医療＆健康</li>
						<li>交際＆子育て</li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Etudes</p>
					<ul>
						<li>学びの基本情報</li>
						<li>語学留学</li>
						<li>専門学校＆ディプロマ</li>
						<li>大学・大学院</li>
						<li>趣味・生涯学習</li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Travail</p>
					<ul>
						<li>仕事の基本情報</li>
						<li>仕事を見つける</li>
						<li>職場と働き方</li>
						<li>ビジネスマナー</li>
						<li>仕事図鑑</li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Divertissement</p>
					<ul>
						<li>レストラン・カフェ</li>
						<li>アート・カルチャー</li>
						<li>ショッピング</li>
						<li>旅行</li>
						<li>お土産</li>
					</ul>
				</div>
				<div className="flex-column-2 footer-contact">
					<ul>
						<li>お問い合わせ</li>
						<li>広告掲載</li>
						<li>プライバシーポリシー</li>
						<li>VOILAについて</li>
					</ul>
				</div>
			</div>
			<p>Copyright © 2020 Doitsu News Digest GmbH. All Rights Reserved. Do not duplicate or redistribute in any form.</p>
		</div>
	</footer>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
