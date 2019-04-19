import React from "react"
import styled from "@emotion/styled"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`massage`, `massage therapy`, `health`, `therapy`]}
    />
    <p>hello from blog page</p>
  </Layout>
)
export default BlogPage
