require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Voilà`,
    description: `フランスの「旅」「生活」「学び」「仕事」「遊び」を中心に、お役立ち情報を届けるウェブメディアです。現地スタッフによるリアルな情報を、ぜひお役立てください。`,
    lang: `ja`,
    author: `@gatsbyjs`,
    siteUrl: `https://voila-france.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true
      }
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: '35.187.39.199',
          user: 'root',
          password: process.env.MYSQL_PSWD,
          database: 'wp_summary',
        },
        queries: [
          {
            statement: 'SELECT * FROM jd_api_currency limit 1',
            name: 'jd_api_currency',
          },
          {
            statement: 'SELECT * FROM weather_voila where City = "Tokyo"',
            name: 'weather_voila_tokyo',
          },
          {
            statement: 'SELECT * FROM weather_voila where City = "Paris"',
            name: 'weather_voila_paris',
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-google-analytics-reporting-api`,
      options: {
        email: process.env.GOOGLE_CLIENT_EMAIL,
        // 「サービス アカウント」生成時にダウンロードできる json データに含まれる
        // `private_key` から生成される公開鍵を秘密鍵にがっちゃんこしてまとめ、扱いやすいよう base64 で
        // あらかじめエンコードしたものを環境変数として渡して、ビルド時にデコードする。
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        viewId: `221204796`,
        // 使い始めの日を指定
        startDate: `2020-06-18`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_YOUR_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
