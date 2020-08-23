import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar"

const NewsletterPage = ({ location }) => (
  <Layout>
    <SEO
      pageTitle="Voilàメルマガ登録のご案内"
      showSiteNameInTitle="true"
      pageDescription="Voilàメルマガへのご登録は、以下のフォームよりお申し込みください。"
      pagePath={location.pathname}
    />
    <div className="newsletter container flex-row">
      <div className="main">
        <h1>Voilàメルマガ登録のご案内</h1>
        <div>
          <p>フランス生活情報メディア「Voilà」のメルマガ会員になりませんか？</p>
          <p>会員としてご登録いただくと、編集部おすすめの記事や、最新ニュース等をタイムリーにお届けするメールマガジンをお届けします。<br />
            また、各種キャンペーンや読者アンケートなど、「Voilà」を一層お楽しみ頂けるサービスのご提供も予定しております。</p>
          <p>ご希望の方は、以下のフォームに必要事項をご記入の上、「登録する」ボタンのクリックをお願いいたします。</p>
          <form name="contact" method="POST" data-netlify="true" netlify className="newsletter__form">
            <label>メールアドレス<input type="text" name="name" placeholder="info@example.com" className="newsletter__form-mail" /></label>
            <input type="hidden" name="form-name" value="contact" />
            {/*
            <label htmlFor="agree" className="newsletter__form-ckbox">
              <input type="checkbox" name="ck_agree" id="agree" required />同意する
            </label>
            */}
            <button type="submit" className="newsletter__form-submit">登録する</button>
            <div className="newsletter__form-text">
              Voilàメルマガ登録することで、<a href="/terms" target="_blank" rel="noopener noreferrer">Voilàの利用規約</a>へ同意したことになります。<br />
              また、newsletter@voila.comからのメールが受信できるようにご設定ください。
            </div>
          </form>
          <p>【お問い合わせ先】Voilà編集部（XXX）</p>
        </div>
        <div className="newsletter__unsubscribe">
          <hr />
          <p>Voilàメルマガの登録を解除されたい方は<Link to="/unsubscribe">こちら</Link></p>
        </div>
      </div>
      <Sidebar />
    </div>
  </Layout>
)

export default NewsletterPage
