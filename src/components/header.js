import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="header-common">
		<div className="managementConsole">
			<div className="container">
				<a href="https://app.contentful.com/spaces/zbyipzusy20r" rel="noreferrer" target="_blank">Contentful</a>
				<a href="https://github.com/ryo-k-nd/voila" rel="noreferrer" target="_blank">Github</a>
				<a href="https://github.com/ryo-k-nd/voila/wiki/%E3%83%86%E3%82%B9%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92" rel="noreferrer" target="_blank">Wiki</a>
				<a href="/___graphQL" rel="noreferrer"target="_blank">GraphQL</a>
				<a href="https://docs.google.com/spreadsheets/d/1bkJ_6YXdtcKRUFU7USEVdMtIoSWCtvGw6ZWjeLeqNJ0/edit?usp=drive_web&ouid=104334831680150354460" rel="noreferrer" target="_blank">ページ一覧</a>
				<a href="https://reverent-almeida-73053a.netlify.app/" rel="noreferrer" target="_blank">App</a>
			</div>
		</div>
		<div className="container flex-row">
			<div className="header-logo flex-row">
				<Link to="/"><span className="header-logo__img">{siteTitle}</span></Link>
				<div>[ヴォワラ]</div>
				<div>フランス暮らしを快適に</div>
			</div>
			<div className="header-navi flex-row">
				<div className="header-navi-text">
					<Link to="/travel/">
						<span className="header-navi-text__ja">旅する</span>
						<span className="header-navi-text__fr">Voyage</span>
					</Link>
				</div>
				<div className="header-navi-text">
					<Link to="/life/">
						<span className="header-navi-text__ja">暮らす</span>
						<span className="header-navi-text__fr">Vie</span>
					</Link>
				</div>
				<div className="header-navi-text">
					<Link to="/study/">
						<span className="header-navi-text__ja">学ぶ</span>
						<span className="header-navi-text__fr">Études</span>
					</Link>
				</div>
				<div className="header-navi-text">
					<Link to="/work/">
						<span className="header-navi-text__ja">働く</span>
						<span className="header-navi-text__fr">Travail</span>
					</Link>
				</div>
				<div className="header-navi-text">
					<Link to="/play/">
						<span className="header-navi-text__ja">遊ぶ</span>
						<span className="header-navi-text__fr">Divertissement</span>
					</Link>
				</div>
			</div>
			<div className="header-link flex-row">
				<div className="header-link__search">
					<i className="fas fa-search"></i>
				</div>
				<Link to="/newsletter" className="header-link__newsletter"><i className="fas fa-envelope"></i>メルマガ登録</Link>
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
