---
templateKey: blog-post
title: Adding Additional Widgets to Netlify CMS
date: 2019-09-01T10:34:22.668Z
featuredImage: /img/adding-additional-widgets/adding-additional-widgets-to-netlify-cms-thumb.png
thumbnail: /img/adding-additional-widgets/adding-additional-widgets-to-netlify-cms-thumb.png
isFeaturedPost: false
draft: true
description: How to add a custom widget to netlify cms
tags:
  - tutorial
  - d3
---

Recently I created a blog using [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org/). Combining the two services was quiet easy, especially if you start off using the [gatsby-netlify-cms-starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) template. Do you see the feature image above? Go head take a look-- that didn't come right out of the box. In Netlify CMS terms this is called a [widget](https://www.netlifycms.org/docs/widgets/) and I'm going to show you how to add one. But before we can begin we have to understand the differences between the two services. 

###[So what is Gatsby](#what-is-gatsby)
If you know React the learning curve to understand Gatsby is not that far off -- but there is still learning to do. There are other static site generators like [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/). But I choose Gatsby because I have a strong understanding of React, wanted to still be updated with GraphQL and received a Progressive Web App(PWA) off the bat. Gatsby uses GraphQL to create a data layer with Markdown, JSON, third party API's or pretty much where data is available. _So what does that mean?_ Traditionally with web development we send over an a html file to the client. Then the html file sends out a request to fetch the data needed to render the content. This is called a HTTP Request and Response. Where as with static site generators, The server fetches the data and renders the content in a template. Then it send one completed html file to the client. This allows for faster websites and more security. 

!["Diagram of Traditional Web fetching"](/img/adding-additional-widgets/traditional-data-fetching-flow.png)
!["Diagram of Static site generators"](/img/static-site-generator-flow.png "Diagram of Static site generators")

### [Netlify CMS who dis?](#what-is-netlify-cms)
Netlify and Netlify CMS are from the same family but are two separate entities. Netlify allows for version-controlled site deploys. Github Pages also allows for this but I would consider Netlify as the grown-up version. This is because with Netlify there are quick rollbacks to previous deploys, form handling, and my favorite branch deploys with previews. All of these features are out of scope for Github Pages and you can find all the limitations Netlify avoids [here](https://www.netlify.com/github-pages-vs-netlify/). 

I think of Netlify as the infrastructure for Netlify CMS where as the CMS supports all the content for your website. The CMS also provides an online editor for non developers can add and management blog posts, pages, products, or any custom content types. If you are thinking why use Netlify CMS over WordPress. Well you no longer need to pay for database to keep your content. Your remote git repository will store it for you in markdown.

### How to add a widget
Now that we understand the benefits that each service provides let figure out how to add a widget to our site. For the most part there isn't a clear divide between the two service in the gatsby-netlify-cms-starter template. Both Gatsby and Netlify CMS both share a large amount of the same files. But I was able to break it down to which files we can focus on. 

**These are the files that are important to Gatsby**
- [gatsby-config.js](https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/gatsby-config.js) - This is the heart of Gatsby. Since Gatsby is built with JavaScript, this means we need to use a lot of node modules to make it run. In return we need to tell Gatsby how to use these node packages. Each package usually includes a set of configuration options to narrow it down to your needs.
- [gatsby-node.js](https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/gatsby-node.js) - File that holds all your plugins and Gatsby Node APIs. In the starter template kit we begin with `createPages` which makes a GraphQL query to get all the markdown files in the pages folder. The `createNode` API is also used which creates a one of a kind node.

**These are the files that are important to Netlify CMS**
- [src/cms/**](https://github.com/netlify-templates/gatsby-starter-netlify-cms/tree/master/src/cms) - The Netlify CMS admin editor doesn't understand anything about GraphQL. GraphQL belongs to Gatsby so it reads all the information from the editor itself. When our React files needs data we look for our data through the widgets.
- [static/admin/config.yml](https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/static/admin/config.yml) - This houses [collections](https://www.netlifycms.org/docs/collection-types/) which can either be a folder of file collection. These are the field you see in the CMS editor online.

#### Step 1:
To begin we would need to add a field in the blog post collection type. It can be found in `static/admin/config.yml`. After doing so , run `npm start` and open [localhost:8000/admin](http://localhost:8000/admin). A `Featured Image` field should appear in the editor. Next commit the changes and push it to an online repository.

```yaml
- {label: "Featured Image", name: "featuredImage", widget: "image", required: true}
```
- label: text that shows up in the admin editor
- name: field name that get generated in the markdown frontmatter
- widget: type of widget ie: boolean, date etc
- required: default is false 

#### Step 2:
Navigate to an recent blog post in the CMS and add an image to the Featured Image field. Go ahead and publish the blog post. When doing so a new commit is made to the online repository.

#### Step 3
Pull down from master in terminal. You will see the updated image in

see new field in markdown file

#### Step 4
To see your image in your blog post you will need to use Gatsby image. It should already be install. You can confirm that it is there in package.json. If not you know what to do...` npm install --save gatsby-image`

add this in templates/blog-post.js
```graphql
featuredImage {
  childImageSharp {
    fluid(maxWidth: 630) {
      ...GatsbyImageSharpFluid_noBase64
    }
  }
}
```
install gatsby image (it should already be there)

When adding a new frontmatter field. It needs to be in all markdown files

Pull down from get to get the changes
