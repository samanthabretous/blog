import React from "react";

import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { Logo } from "../../icons";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import stylesheet from "./index.module.less";
import Linkedin from "../../icons/Linkedin";
import Github from "../../icons/Github";
import Twitter from "../../icons/Twitter";
import contactImage from "../../img/samantha_bretous_2019.jpg";
import NavbarSimple from "../../components/Navigation/NavbarSimple";

export default class ContactPage extends React.Component {
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
                href="https://twitter.com/samanthabretous"
                className={stylesheet.contactSocialItem}
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/in/samanthabretous/"
                className={stylesheet.contactSocialItem}
              >
                <Linkedin />
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
