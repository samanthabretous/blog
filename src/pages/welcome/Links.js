import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Twitter, Logo } from "../../icons";
import stylesheet from "./welcome.module.less";
import cx from "classnames";
import COLORS from "../../utils/colors";

function Links({ data, setShowModal }) {
  return (
    <section className={cx(stylesheet.view, stylesheet.view2)}>
      <div className={stylesheet.inner}>
        <div className={stylesheet.top}>
          <div className={stylesheet.newsletterContainer}>
            <button
              className={stylesheet.newsletter}
              onClick={() => setShowModal(true)}
            >
              Subscribe to newsletter
            </button>
          </div>
          <a href="/speak" className={stylesheet.speakingContainer}>
            <p className={stylesheet.speaking}>Free resources coming soon</p>
          </a>
          <div className={stylesheet.contact}>
            <a href="/" className={stylesheet.emailContainer}>
              <p className={stylesheet.email}>EMAIL</p>
            </a>
            <a
              href="https://www.twitter.com/samanthabretous"
              target="_blank"
              className={stylesheet.twitterContainer}
            >
              <Twitter color={COLORS.BLACK} />
            </a>
          </div>
        </div>
        <div className={stylesheet.middle}>
          <Link to="/">
            <Logo color={COLORS.PURPLE} width={200} />
          </Link>
        </div>
        <div className={stylesheet.bottomContainer}>
          <div className={stylesheet.imageContainer}></div>
          <div className={stylesheet.bottom}>
            <div
              className={cx(stylesheet.linkContainer, stylesheet.latestBlog)}
            >
              {data && (
                <Link to={data.allMdx.edges[0].node.fields.slug}>
                  Latest Blog
                </Link>
              )}
            </div>
            <div className={stylesheet.linkContainer}>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className={stylesheet.linkContainer}>
              <Link to="/contact">Available for speaking</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ({ setShowModal }) => (
  <StaticQuery
    query={graphql`
      query MostRecentPost {
        allMdx(
          limit: 1
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { draft: { eq: false } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                description
                linkToProject
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <Links data={data} count={count} setShowModal={setShowModal} />
    )}
  />
);
