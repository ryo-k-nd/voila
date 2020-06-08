import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import BannerSquare from '../images/top/bannerSquare.gif'

const Sidebar = () => (
		<aside className="sidebar">
		<img src={BannerSquare} alt="BannerSquare" />
		</aside>
)

export default Sidebar
