import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const UnsubscribePage = ({ location }) => (
  <Layout>
    <SEO
      pageTitle="Voilàメルマガ登録解除のご案内"
      showSiteNameInTitle="true"
      pageDescription="Voilàメルマガの登録解除は、以下のフォームよりお申し込みください。"
      pagePath={location.pathname}
    />
    <div className="newsletter container flex-row">
      <div className="main">
        <h1>Voilàメルマガ登録解除のご案内</h1>
        <div>
          <p>登録解除をご希望の方は以下のフォームを入力し、「登録を解除する」ボタンをクリックしてください。</p>
          <form name="unsubscribe" method="POST" data-netlify="true" netlify className="newsletter__form">
            <label>メールアドレス<input type="text" name="name" placeholder="info@example.com" className="newsletter__form-mail" /></label>
            <input type="hidden" name="form-name" value="unsubscribe" />
            {/*
            <label htmlFor="agree" className="newsletter__form-ckbox">
              <input type="checkbox" name="ck_agree" id="agree" required />同意する
            </label>
            */}
            <button type="submit" className="newsletter__form-submit">登録を解除する</button>
            <div className="newsletter__form-text">
            </div>
          </form>
          <p>【お問い合わせ先】Voilà編集部（XXX）</p>
        </div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default UnsubscribePage
