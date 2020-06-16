import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewslettePage = () => (
  <Layout>
    <SEO title="メールマガジン登録" />
    <div className="container flex-row">
      <div className="main">
        <h1>Newsletter登録ページ</h1>
        <div>abcde</div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewslettePage
