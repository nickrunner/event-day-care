import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Event Day Care`,
    siteTitle: "Event Day Care",
    siteTitleAlt: "Event Day Care - Childcare Services",
    siteHeadline: "Event Day Care - Childcare Services",
    siteUrl: `https://eventday.care`,
    siteDescription: "Trusted and Dependendable Childcare for Special Events",
    siteLanguage: "en",
    siteImage: "/edc.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "@lekoarts/gatsby-theme-cara",
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Event Day Care`,
        short_name: `EDC`,
        description: `Trusted and Dependendable Childcare for Special Events`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/edc.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/edc.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Patua One`,
            file: `https://fonts.googleapis.com/css2?family=Patua+One:wght@400&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
