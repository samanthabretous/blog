import React from "react";
import PropTypes from "prop-types";
import {Link, graphql, StaticQuery} from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import stylesheet from "./BlogRoll.module.less";

class BlogRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMdx;
    const featured = posts.find(post => post.node.frontmatter.isFeaturedPost)
      .node;
    return (
      <div>
        <div className={stylesheet.cardFeaturedBackground}>
          <Link className={stylesheet.cardFeatured} to={featured.fields.slug}>
            <div className={stylesheet.cardImage}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featured.frontmatter.featuredImage,
                  alt: `featured image thumbnail for post ${featured.frontmatter.title}`
                }}
              />
            </div>
            <div className={stylesheet.cardInfo}>
              <h5 className={stylesheet.cardCategory}>
                {featured.frontmatter.tags[0]}
              </h5>
              <h1 className={stylesheet.cardTitle}>
                {featured.frontmatter.title}
              </h1>
              <p className={stylesheet.cardExcerpt}>{featured.excerpt}</p>
              <p className={stylesheet.readMore}>Read More </p>
            </div>
          </Link>
        </div>
        <div className={stylesheet.mustRead}>
          <h2>Today's Must Reads</h2>
          <div className={stylesheet.gridCol3}>
            {posts &&
              posts.map(
                ({node: post}) =>
                  !post.frontmatter.isFeaturedPost && (
                    <Link
                      className={stylesheet.post}
                      style={
                        process.env.NODE_ENV === "production" &&
                        post.frontmatter.draft
                          ? {display: "none"}
                          : {}
                      }
                      key={post.id}
                      to={post.fields.slug}
                    >
                      <div className={stylesheet.featuredThumbnail}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.thumbnail,
                            alt: `featured image thumbnail for post ${post.title}`
                          }}
                        />
                      </div>
                      <div className={stylesheet.postInformation}>
                        <span className={stylesheet.postCategory}>
                          {post.frontmatter.tags[0]}
                        </span>
                        <h4 className={stylesheet.postTitle}>
                          {post.frontmatter.title}
                        </h4>
                      </div>
                    </Link>
                  )
              )}
          </div>
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMdx(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 70)
              id
              fields {
                slug
              }
              frontmatter {
                isFeaturedPost
                title
                draft
                templateKey
                date(formatString: "MMMM DD, YYYY")
                tags
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
