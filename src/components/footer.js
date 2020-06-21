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
						<li><Link to="/">旅の基本情報</Link></li>
						<li><Link to="/">渡仏の準備</Link></li>
						<li><Link to="/">空港から市内まで</Link></li>
						<li><Link to="/">パリと地方都市</Link></li>
						<li><Link to="/">便利マップ</Link></li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Vie</p>
					<ul>
						<li><Link to="/">暮らしの基本情報</Link></li>
						<li><Link to="/">住まい</Link></li>
						<li><Link to="/">お金</Link></li>
						<li><Link to="/">医療＆健康</Link></li>
						<li><Link to="/">交際＆子育て</Link></li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Etudes</p>
					<ul>
						<li><Link to="/">学びの基本情報</Link></li>
						<li><Link to="/">語学留学</Link></li>
						<li><Link to="/">専門学校＆ディプロマ</Link></li>
						<li><Link to="/">大学・大学院</Link></li>
						<li><Link to="/">趣味・生涯学習</Link></li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Travail</p>
					<ul>
						<li><Link to="/">仕事の基本情報</Link></li>
						<li><Link to="/">仕事を見つける</Link></li>
						<li><Link to="/">職場と働き方</Link></li>
						<li><Link to="/">ビジネスマナー</Link></li>
						<li><Link to="/">仕事図鑑</Link></li>
					</ul>
				</div>
				<div className="flex-column-2">
					<p>Divertissement</p>
					<ul>
						<li><Link to="/">レストラン・カフェ</Link></li>
						<li><Link to="/">アート・カルチャー</Link></li>
						<li><Link to="/">ショッピング</Link></li>
						<li><Link to="/">旅行</Link></li>
						<li><Link to="/">お土産</Link></li>
					</ul>
				</div>
				<div className="flex-column-2 footer-contact">
					<ul>
						<li><Link to="/contact">お問い合わせ</Link></li>
						<li><Link to="/terms">利用規約</Link></li>
						<li><Link to="/advertiser">広告掲載</Link></li>
						<li><Link to="/privacy">プライバシーポリシー</Link></li>
						<li><Link to="/aboutus">VOILAについて</Link></li>
					</ul>
				</div>
			</div>
			<div className="footer-common__copyright">Copyright © 2020 Doitsu News Digest GmbH. All Rights Reserved. Do not duplicate or redistribute in any form.</div>
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
