import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ( {location} ) => (
  <Layout>
    <SEO
      pageTitle="広告"
      showSiteNameInTitle="true"
      pageDescription="Voilàへの広告出稿をお考えの方は、sales@voila-france.com宛にお問い合わせをお願い致します。"
      pagePath={location.pathname}
    />
    <div className="container flex-row">
      <div className="main">
        <h1>お問い合わせ</h1>
        <div>お問い合わせ本文。</div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
