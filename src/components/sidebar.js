//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

import BannerSquare from '../images/top/bannerSquare.gif'

const Sidebar = () => (
		<aside className="sidebar">
		  <img src={BannerSquare} alt="BannerSquare" />
      <p>人気記事</p>
      <p>ピックアップ記事</p>
      <p>話題のタグ</p>
		</aside>
)

export default Sidebar
