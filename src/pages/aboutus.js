import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const AboutUsPage = ({ location }) => (
  <Layout>
    <SEO
      pageTitle="About Us"
      showSiteNameInTitle="true"
      pageDescription=""
      pagePath={location.pathname}
    />

    <div className="container flex-row">
      <div className="main aboutus">
        <h1>Voilàについて</h1>
        <p>
          Voilàはフランスの注目のニュース、観光情報から生活情報まで<br />
          フランスにまつわる情報を発信する日本語メディアです。<br />
          フランスの日本人コミュニティはもちろん、<br />
          旅行者やフランスのニュース・文化に関心を抱く日本人の皆様に向けて<br />
          毎日新しい情報を更新し、現地発信ならではの情報を発信します。
  </p>
        <p>
          Voilàは「旅する・暮らす・学ぶ・働く・遊ぶ」の5つのカテゴリーを軸にして<br />
          入門的なものから専門的なものまで情報を分かりやすく解説。<br />
          フランスで語学や文化の違い困惑することが多い問題、<br />
          また知って得する便利な生活情報からおもしろ雑学・豆知識まで、<br />
          フランスに関する情報はオールジャンルで発信します。
  </p>
        <h2>広告掲載について</h2>

        <p>Voilaでは、バナー広告、記事広告、ニュースレターによる宣伝など、各種広告掲載を承っております。</p>
        <p>また、求人広告や物件情報などの掲載にも対応しております。</p>
        <p>詳細は、メールにてお問い合わせ下さい。</p>
        <a href="mailto:sales@voila-france.com">sales@voila-france.com</a>

        <h2>お問い合わせ</h2>
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

export default AboutUsPage
