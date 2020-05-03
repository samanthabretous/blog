import React, { Component } from "react";
import PropTypes from "prop-types";
// import {kebabCase} from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import stylesheet from "./blog-post.module.less";

export class BlogPostTemplate extends Component {
  render() {
    const {
      content,
      contentComponent,
      tags,
      title,
      featuredImage,
      readingTime,
      helmet,
    } = this.props;
    const PostContent = contentComponent;
    return (
      <section className={stylesheet.section}>
        {helmet || ""}
        <div className={stylesheet.articleHero}>
          <div className={stylesheet.heroWrapper}>
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredImage,
                alt: `featured image thumbnail for post ${title}`,
              }}
            />
          </div>
          <div className={stylesheet.articleWrapper}>
            <span className={stylesheet.graySquare} />
            <h5 className={stylesheet.articleCategory}>{tags[0]}</h5>
            <h1 className={stylesheet.articleTitle}>{title}</h1>
            <h5 className={stylesheet.articleTime}>{readingTime}</h5>
          </div>
        </div>
        <div className={stylesheet.container}>
          {/* <div
              className={cx(stylesheet.articleShare, {
                [stylesheet.articleShareFixed]: isShareLinkFixed
              })}
            >
              <a href="https://twitter.com/intent/tweet?text=Hello%20world">
                <img src="/img/twitter_icon.png" className={stylesheet.icon} />
              </a>
              <a href="https://linkedin.com/in/samanthabretous">
                <img src="/img/linkedin_icon.png" className={stylesheet.icon} />
              </a>
            </div> */}
          <div className={stylesheet.content}>
            <PostContent className={stylesheet.copy} content={content} />
            {/* {tags && tags.length ? (
                <div style={{marginTop: `4rem`}}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null} */}
          </div>
        </div>
      </section>
    );
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { mdx: post } = data;
  return (
    <Layout>
      <Navbar showProgressBar />
      <BlogPostTemplate
        content={post.body}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Samantha Bretous">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta
              property="og:image"
              content={
                post.frontmatter.featuredImage.childImageSharp.fluid.originalImg
              }
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredImage}
        readingTime={post.fields.readingTime.text}
      />
      <Footer />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 630, quality: 100) {
              originalImg
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
