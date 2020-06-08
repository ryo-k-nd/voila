import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="header-common">
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
				<Link className="header-newsletter">メルマガ登録</Link>
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
