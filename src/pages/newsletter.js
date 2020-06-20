import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = ( {location} ) => (
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
          <form name="contact" method="POST" netlify>
            <input type="text" id="name" name="name" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
