require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Voila`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true
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
    //{
    //  resolve: `gatsby-source-google-analytics-reporting-api`,
    //  options: {
    //    // 「サービス アカウント」のメールアドレス
    //    email: process.env.CLIENT_EMAIL,
    //    // 「サービス アカウント」生成時にダウンロードできる json データに含まれる
    //    // `private_key` から生成される公開鍵を秘密鍵にがっちゃんこしてまとめ、扱いやすいよう base64 で
    //    // あらかじめエンコードしたものを環境変数として渡して、ビルド時にデコードする。
    //    key: Buffer.from(process.env.PRIVATE_KEY, 'base64').toString(),
    //    // Google Analytics のページから取得
    //    viewId: `xxxxxxxxx`,
    //    // 使い始めの日を指定
    //    startDate: `2020-02-17`,
    //  },
    //},
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
