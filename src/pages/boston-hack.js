import React from "react";

import Layout from "../components/layout"
import Landing from "../components/landing"
import About from "../components/about"
import Sponsors from "../components/sponsors"
import FAQContainer from "../components/faqContainer"
import GetInvolved from "../components/getInvolved"

import "../styles/theme.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <FAQContainer />
      <Sponsors />
      <GetInvolved />
    </Layout>
  )
}

export default IndexPage;
