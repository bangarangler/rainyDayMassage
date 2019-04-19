import React from "react"
//import styled from "@emotion/styled"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import blogImg from "../images/bcg/armsOpenSuperKid.jpg"

const special = {
  background: "#05a0d0",
  opacity: ".7",
  padding: "1rem",
  borderRadius: "3%",
  width: "60%",
}

const BlogPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <PageHeader img={blogImg}>
      <div style={special}>
        <Banner
          title="rainy day ramblings"
          subtitle="thoughts on all the things"
        />
      </div>
    </PageHeader>
  </Layout>
)
export default BlogPage
