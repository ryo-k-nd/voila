import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const advertiserPage = ({ location }) => (
  <Layout>
    <SEO
      pageTitle="広告掲載"
      showSiteNameInTitle="true"
      pageDescription="Voilàへの広告出稿をお考えの方は、sales@voila-france.com宛にお問い合わせをお願い致します。"
      pagePath={location.pathname}
    />

    <div className="container flex-row">
      <div className="main advertiser">
        <h1>広告掲載について</h1>

        <p>Voilaでは、バナー広告、記事広告、ニュースレターによる宣伝など、各種広告掲載を承っております。</p>
        <p>また、求人広告や物件情報などの掲載にも対応しております。</p>
        <p>詳細は、メールにてお問い合わせ下さい。</p>
        <p><a href="mailto:sales@voila-france.com">sales@voila-france.com</a></p>
        <hr />
        <h1>À propos de la publicité</h1>
        <p>Afin de vous permettre de toucher une clientèle japonaise la plus vaste, “Voilà” vous propose diverses publicités digitales telles que des bannières publicitaires sur notre site internet, la rédaction d’articles spéciaux sur une thématique de votre choix accompagné de campagne publicitaire, ou la réalisation de newsletter.</p>
        <p>“Voilà” soutient également la publication d'offres d'emploi et d’annonces immobilières destinées aux Japonais.</p>
        <p>Pour plus d'informations, veuillez nous envoyer un courriel.</p>
        <p><a href="mailto:sales@voila-france.com">sales@voila-france.com</a></p>
      </div>
      <Sidebar />
    </div>

  </Layout>
)

export default advertiserPage
