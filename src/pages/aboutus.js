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
          「Voilà」は、「ほら！」「どうぞ！」といった意味で使われるフランス語です。<br className="for-pc" />新鮮な素材や魅力的な料理をテーブルに並べるように、<br className="for-pc" />フランス生活にまつわる情報をさっと差し出す。<br className="for-pc" />Voilàは、そんなメディアでありたいと願っています。<br className="for-pc" />
        </p>
        <p>
          Voilàでは、フランスの日本人コミュニティはもちろん、<br className="for-pc" />旅行者やフランスのニュース・文化に関心を抱く日本人の皆様に向けて<br className="for-pc" />現地スタッフならではのリアルな情報を発信。<br className="for-pc" />
        </p>
        <p>
          フランスのおすすめスポットや人気商品の紹介、各種制度の解説、<br className="for-pc" />教養や時事ニュースなど、フランス生活をより豊かに楽しくするための記事を<br className="for-pc" />毎日更新していきます。
        </p>
        <hr />
        <h1>À propos de “Voilà”</h1>
        <p>
          “Voilà”, c’est l’actualité la plus complète de France allant des dernières nouvelles au mode de vie “à la française” pour les Japonais.
        </p>
        <p>
          “Voilà”, c’est aussi un média japonais localisé dans plusieurs pays européens qui, depuis 25 ans, diffuse des informations grâce à ses experts vivant en Europe.
        </p>
        <p>
          Nous travaillons pour nos lecteurs sur cinq catégories principales « Voyage, Vie, Etudes, Travail, Divertissement » en France. Un effort particulier est fourni pour faciliter la compréhension de l’information aux Japonais.
        </p>
        <p>
          Pour la communauté japonaise vivant en France, “Voilà” est l’un des rares médias permettant d’avoir une connaissance approfondie de l’actualité et de la culture française en langue japonaise sous format Web avec un niveau de qualité égalant un magazine spécialisé.
        </p>
        <p>
          Pour les Japonais projetant de vivre ou de voyager en France, “Voilà” propose des conseils pour faciliter l’installation, et apprendre la langue française en France ou a distance. “Voilà” guide également les Japonais dans la découverte de la gastronomie française, et organise des séjours à thèmes très variés : Gastronomie, Shopping, Culture, Histoire. Ceci est complété par des articles sur les spécificités et spécialités locales de toutes les régions de France.
        </p>
      </div>
      <Sidebar />
    </div>

  </Layout>
)

export default AboutUsPage
