var proxy = require("http-proxy-middleware");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "Samantha Bretous | Software Engineer",
    description: "Helping create stronger software engineers through my story",
    siteUrl: "https://www.samanthabretous.com",
    image: "static/img/samantha_bretous_ogimage.png",
    author: {
      name: "Samantha Bretous",
    },
    organization: {
      name: "Samantha Bretous",
      url: "https://www.samanthabretous.com",
      logo: "",
    },
    social: {
      twitter: "@samanthabretous",
      fbAppID: "",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less",
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_FORM_TOKEN,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "posts",
              path: `${__dirname}/stories/`,
            },
          },
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "project",
              path: `${__dirname}/projects/`,
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    );
  },
};
