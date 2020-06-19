import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ( {location} ) => (
  <Layout>
    <SEO
      pageTitle="お問い合わせ"
      showSiteNameInTitle="true"
      pageDescription="Voilàへのお問い合わせは、メールにて受け付けております。contact@voila-france.com宛にご用件をお送りください。"
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
