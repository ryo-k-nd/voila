import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ModalSeach from "../components/modalSearch";
import SpMenu from "../components/spMenu";
import Logo from '../images/top/logo.svg';
import icon_mail_w from '../images/top/icon-newsletter-w.svg';

const Header = ({ siteTitle }) => (
	<header className="header-common">
		<div className="container flex-row">
			<SpMenu />
			<div className="header-logo flex-row">
				<Link to="/">
					<img src={Logo} alt={siteTitle} width="150" height="55" className="header-logo__img" />
				</Link>
				<div>［ヴォワラ］<span className="sen"></span>フランス暮らしを快適に</div>
			</div>
			<div className="header-left flex-row" id="sp-menu">
				<div className="header-navi flex-row">
					<div className="header-navi-text">
						<Link to="/travel/">
							<span className="header-navi-text__ja">旅する</span>
							<span className="header-navi-text__fr font-lemonde italic regular">Voyage</span>
						</Link>
					</div>
					<div className="header-navi-text">
						<Link to="/life/">
							<span className="header-navi-text__ja">暮らす</span>
							<span className="header-navi-text__fr font-lemonde italic regular">Vie</span>
						</Link>
					</div>
					<div className="header-navi-text">
						<Link to="/study/">
							<span className="header-navi-text__ja">学ぶ</span>
							<span className="header-navi-text__fr font-lemonde italic regular">Études</span>
						</Link>
					</div>
					<div className="header-navi-text">
						<Link to="/work/">
							<span className="header-navi-text__ja">働く</span>
							<span className="header-navi-text__fr font-lemonde italic regular">Travail</span>
						</Link>
					</div>
					<div className="header-navi-text">
						<Link to="/play/">
							<span className="header-navi-text__ja">遊ぶ</span>
							<span className="header-navi-text__fr font-lemonde italic regular">Divertissement</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="header-link flex-row">
				<div className="header-link__search">

					<ModalSeach />

				</div>
				<Link to="/newsletter" className="header-link__newsletter for-pc"><img src={icon_mail_w}></img></Link>
				<div className="header-link-sp">

				</div>
			</div>
		</div>
	</header >
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
