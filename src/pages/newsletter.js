import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewsletterPage = ( {location} ) => (
  <Layout>
    <SEO
      pageTitle="メルマガ登録"
      showSiteNameInTitle="true"
      pageDescription="メルマガへのご登録は、以下のフォームよりお申し込みください。"
      pagePath={location.pathname}
    />
    <div className="container flex-row">
      <div className="main">
        <h1>Newsletter登録ページ</h1>
        <div>
          <form name="contact" method="POST" data-netlify="true" netlify>
            <label>Your Name: <input type="text" name="name" /></label>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>

          </form>
        </div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewsletterPage
