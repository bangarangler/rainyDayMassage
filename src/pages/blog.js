import React from "react"
//import styled from "@emotion/styled"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import blogImg from "../images/bcg/endOfPeer.jpg"

const BlogPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <PageHeader img={blogImg}>
      <Banner
        title="rainy day ramblings"
        subtitle="thoughts on all the things"
      />
    </PageHeader>
  </Layout>
)
export default BlogPage
