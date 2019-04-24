import React from "react"

import { Section, Title } from "../../utils"
import BlogPost from "./BlogPost.js"

// const getTags = blogs => {
//   let tempBlogs = blogs.map(items => {
//     return items.node.tagged
//   })
//   let tempTagged = new Set(tempBlogs)
//   let tagged = Array.from(tempTagged)
//   tagged = ["all", ...tagged]
//   return tagged
// }

class BlogComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // blogs: props.blogs.edges.map(post => {
      //   return { ...post.node, show: false }
      // }),
      // blogItems: props.blogs.edges.map(post => {
      //   return { ...post.node, show: false }
      // }),
      blogs: props.blogs.edges,
      blogItems: props.blogs.edges,
      show: true,
      loadPost: "",
    }
  }

  render() {
    return (
      <Section>
        <Title title="posts" message="stay up to date with our" />
        {this.state.blogs.map((node, index) => {
          return <BlogPost key={index} singleBlog={node} />
        })}
      </Section>
    )
  }
}

export default BlogComponent
