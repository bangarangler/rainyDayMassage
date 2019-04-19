import React from "react"
import styled from "@emotion/styled"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import blogImg from "../images/bcg/armsOpenSuperKid.jpg"

const BlogPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <PageHeader img={blogImg}>
      <p>hello from about page</p>
    </PageHeader>
    <p>hello from blog page</p>
  </Layout>
)
export default BlogPage
