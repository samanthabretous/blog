import React from "react";

import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { Logo } from "../../icons";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import stylesheet from "../contact/index.module.less";
import { LinkedIn, Github, Twitter, YouTube } from "../../icons/LinkedIn";
import contactImage from "../../img/samantha_bretous_2019.jpg";
import NavbarSimple from "../../components/Navigation/NavbarSimple";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <Layout>
        <NavbarSimple />
        <section className={stylesheet.contact}>
          <div className={stylesheet.contactImage}>
            <PreviewCompatibleImage
              imageInfo={{
                image: contactImage,
                alt: `contact page image`,
              }}
            />
          </div>
          <div className={stylesheet.contactInfo}>
            <h1>PROJECTS Coming Soon</h1>

            <Link className={stylesheet.contactLogo} to="/">
              <Logo />
            </Link>
            <a
              className={stylesheet.contactEmail}
              href="mailto:sam@samanthabretous.com"
            >
              sam@samanthabretous.com
            </a>
            <div className={stylesheet.contactSocial}>
              <a
                href="https://www.youtube.com/channel/UCBTyDqhBDleV8T4NakT_zXg"
                className={stylesheet.contactSocialItem}
              >
                <YouTube />
              </a>
              <a
                href="https://twitter.com/samanthabretous"
                className={stylesheet.contactSocialItem}
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/in/samanthabretous/"
                className={stylesheet.contactSocialItem}
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/samanthabretous"
                className={stylesheet.contactSocialItem}
              >
                <Github />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
