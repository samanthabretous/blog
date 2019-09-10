---
templateKey: blog-post
title: Adding Additional Widgets to Netlify CMS
date: 2019-09-01T10:34:22.668Z
featuredImage: /img/Coding_a_component_kit_thumbnail_samantha_bretous@2x.png
thumbnail: /img/Coding_a_component_kit_thumbnail_samantha_bretous@2x.png
isFeaturedPost: false
draft: true
description: How to add a custom widget to netlify cms
tags:
  - tutorial
  - d3
---

Recently I created a blog using Gatsby and Netlify CMS.  The set up of working with the two packages was seamless and what came out of the box was perfect. But you see the feature image above. Go head take a look. That wasn't there right out of the box. I had to add it and I'm going to walk you adding one for yourself. Hope you enjoy. 
In Netlify CMS terms this is called a widget and I'm going to show you how to add one. But before we can begin we have to understand the differences between the two services. 

###So what is Gatsby
If you know React the learning curve to understand Gatsby is not that far off. There are other static site generators like Jekell and Hugo. But with Gatsby we also get a Progressive Web app. creates a data layer with Markdown, JSON, third paty api's -- pretty much where data is available. _So what does that mean?_Traditionally with web development we send over an a html to the client then the html sends out a request to fetches the data to render the content. This is called a HTTP Request and Response. Where as with static site generators, The server fetches the data and renders the content in a template. Then it send one completed html file to the client. This allows for faster websites and more security. 

### Netify CMS who dis?
Netlify and Netlify CMS are from the same family but are two separate entities. I think of Netlify as the infrustruce for Netlify CMS. The CMS provides the content for your website. 

For the most part there isnt a clear divide between the two service in the gatsby-netify-cms-starter template, since both need to use the same files. But I was able to break it down to whi

These are the files that are important to Gatsby
[gatsby-config]()
[gatsby-node]()
These are the files that are important to Netlify CMS
[src/cms/**]
[static/admin/config.yml] This houses all the pages()

Step 1:
Add this line under the fields ta in config.yml. You can find it in static/admin.

- {label: "Featured Image", name: "featuredImage", widget: "image", required: true}
Run Open localhost:8000/admin and confirm you see the new featureImagefield in the CMS. Then you would want to commit your changes.

Step 2:
Update your post with an image and publish.

Step 3
Pull down from master in terminal. You will see the updated image in

see new field in markdown file

Step 4
To see your image in your blog post you will need to use Gatsby image. It should already be install. You can confirm that it is there in package.json. If not you know what to do... npm install --save gatsby-image

add this in templates/blog-post.js

featuredImage {

childImageSharp {

fluid(maxWidth: 630) { ...GatsbyImageSharpFluid_noBase64 }

}

}

install gatsby image (it should already be there)

When adding a new frontmatter field. It needs to be in all markdown files

Pull down from get to get the changes
