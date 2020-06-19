import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ( {location} ) => (
  <Layout>
    <SEO
      pageTitle="利用規約"
      showSiteNameInTitle="true"
      pageDescription=""
      pagePath={location.pathname}
    />
    <div className="container flex-row">
      <div className="main">
        <h1>利用規約</h1>
        <div>利用規約本文。</div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
