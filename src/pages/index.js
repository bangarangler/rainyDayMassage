import React from "react"
//import styled from "@emotion/styled"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/blueUmbrella.jpg"
import QuickInfo from "../components/HomePageComponents/QuickInfo.js"
import { styles } from "../utils"
import { Link } from "gatsby"

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
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <BannerButton style={{ margin: "2rem auto" }}>
              {" "}
              <a href="https://www.massagebook.com/profiles/publicBooking/6602415?src=external">
                {" "}
                book
              </a>
            </BannerButton>
            <BannerButton style={{ margin: "2rem auto" }}>
              {" "}
              <Link to="/blog">blog</Link>
            </BannerButton>
          </div>
        </Banner>
      </div>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
