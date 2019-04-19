import React from "react"
import styled from "@emotion/styled"
import { HomeHeader } from "../utils"
import img from "../images/bcg/heroButterfly.jpg"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <HomeHeader img={img}>
      <p>hello from home header</p>
    </HomeHeader>
  </Layout>
)
export default IndexPage
