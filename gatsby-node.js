const _ = require("lodash");
const path = require("path");
const {createFilePath} = require("gatsby-source-filesystem");
const {fmImagesToRelative} = require("gatsby-remark-relative-images");
const readingTime = require("reading-time");
// to debug
// node --nolazy --inspect-brk node_modules/.bin/gatsby develop
// if it not working do npm run clean
exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMdx.edges;

    posts.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        tags: node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id: node.id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`
    });
    createNodeField({
      name: `readingTime`,
      node,
      value: readingTime(node.rawBody)
    });
  }
};
