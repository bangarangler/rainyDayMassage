import React from "react"
//import styled from "@emotion/styled"
import { HomeHeader, Banner } from "../utils"
import img from "../images/bcg/blueUmbrella.jpg"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const special = {
  background: "black",
  opacity: ".8",
  padding: "2rem",
  borderRadius: "3%",
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <HomeHeader img={img}>
      <div style={special}>
        <Banner
          title="Rainy Day Massage"
          subtitle="3816 s new hope road &nbsp; &#771; suite 4 &nbsp; &#771; Gastonia, NC 28056"
        />
      </div>
    </HomeHeader>
  </Layout>
)
export default IndexPage
