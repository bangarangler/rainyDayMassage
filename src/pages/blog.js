import React from "react"
//import styled from "@emotion/styled"
// import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import blogImg from "../images/bcg/endOfPeer.jpg"
import BlogComponent from "../components/BlogComponents/BlogComponent.js"

const BlogPage = ({ data }) => (
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
    <BlogComponent blogs={data.blog} />
  </Layout>
)
export default BlogPage

export const query = graphql`
  {
    blog: allContentfulBlog {
      edges {
        node {
          id
          blogTitle
          postDescription
          blogImage {
            fixed(width: 200, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          blogPost {
            blogPost
          }
          createdAt
          author
          tagged
        }
      }
    }
  }
`
