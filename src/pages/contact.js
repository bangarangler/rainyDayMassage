import React from "react"
//import styled from "@emotion/styled"
import { PageHeader, Banner } from "../utils"
import contactImage from "../images/bcg/heroButterfly.jpg"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <PageHeader img={contactImage}>
      <Banner />
    </PageHeader>
  </Layout>
)
export default ContactPage
