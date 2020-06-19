import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ( {location} ) => (
  <Layout>
    <SEO
      pageTitle="プライバシーポリシー"
      showSiteNameInTitle="true"
      pageDescription=""
      pagePath={location.pathname}
    />
    <div className="container flex-row">
      <div className="main">
        <h1>プライバシーポリシー</h1>
        <div>プライバシーポリシー本文。</div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
