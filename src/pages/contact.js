import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ({ location }) => (
  <Layout>
    <SEO
      pageTitle="お問い合わせ"
      showSiteNameInTitle="true"
      pageDescription="Voilàへのお問い合わせは、メールにて受け付けております。contact@voila-france.com宛にご用件をお送りください。"
      pagePath={location.pathname}
    />
    <div className="container flex-row">
      <div className="main contact">
        <h1>お問い合わせ</h1>
        <p>
          Voilàに関する各種お問い合わせは、
          <a href="mailto:info@voila-france.com">info@voila-france.com</a>までメールをお送りください。<br />
          <small>*内容によってはお答えできない場合がありますのでご了承くださいませ。</small>
        </p>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
