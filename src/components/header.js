import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="header-common">
		<div className="managementConsole">
			<div className="container">
				<a href="https://app.contentful.com/spaces/zbyipzusy20r" target="_blank">Contentful</a>
				<a href="https://github.com/ryo-k-nd/voila" target="_blank">Github</a>
				<a href="https://github.com/ryo-k-nd/voila/wiki/%E3%83%86%E3%82%B9%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92" target="_blank">Wiki</a>
				<a href="/___graphQL" target="_blank">GraphQL</a>
				<a href="https://docs.google.com/spreadsheets/d/1bkJ_6YXdtcKRUFU7USEVdMtIoSWCtvGw6ZWjeLeqNJ0/edit?usp=drive_web&ouid=104334831680150354460" target="_blank">ページ一覧</a>
			</div>
		</div>
		<div className="container flex-row">
			<div className="header-logo flex-row">
				<h1><Link to="/">{siteTitle}</Link></h1>
				<div>[ヴォワラ]</div>
				<div>フランス暮らしを快適に</div>
			</div>
			<div className="header-navi flex-row">
				<div className="header-navi-text flex-column-2">
					旅する
				</div>
				<div className="header-navi-text flex-column-2">
					暮らす
				</div>
				<div className="header-navi-text flex-column-2">
					学ぶ
				</div>
				<div className="header-navi-text flex-column-2">
					働く
				</div>
				<div className="header-navi-text flex-column-2">
					遊ぶ
				</div>
			</div>
			<div className="header-link flex-row">
				<div>検索</div>
				<Link to="/newsletter" className="header-newsletter">メルマガ登録</Link>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
