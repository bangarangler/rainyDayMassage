import React from "react"

import { Section, Title } from "../../utils"
import BlogPost from "./BlogPost.js"
import styled from "@emotion/styled"
import { styles } from "../../utils"

const getTags = blogs => {
  //return blogs
  let tempBlogs = blogs.map(i => {
    return i.node.tagged
  })
  let tempTagged = new Set(tempBlogs)
  let tagged = Array.from(tempTagged)
  tagged = ["all", ...tagged]
  return tagged
}

class BlogComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogs: props.blogs.edges,
      showBlogs: props.blogs.edges,
      tagged: getTags(props.blogs.edges),
      //show: true,
      //loadPost: "",
    }
  }

  handleTags = tags => {
    if (tags === "all") {
      this.setState({
        ...this.state,
        showBlogs: this.state.blogs,
      })
    } else {
      let blog = this.state.blogs.filter(({ node }) => node.tagged === tags)
      this.setState(() => {
        return { showBlogs: blog }
      })
    }
  }

  render() {
    return (
      <Section>
        <Title title="posts" message="stay up to date with our" />
        <TagsContainer>
          {this.state.tagged.map((tags, index) => {
            return (
              <button
                type="button"
                key={index}
                className="tags"
                onClick={() => this.handleTags(tags)}
              >
                {tags}
              </button>
            )
          })}
        </TagsContainer>
        {this.state.showBlogs.map((node, index) => {
          return <BlogPost key={index} singleBlog={node} />
        })}
      </Section>
    )
  }
}

export default BlogComponent

const TagsContainer = styled.dev`
  //border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5%;
  .tags {
    font-size: 1rem;
    background: ${styles.colors.mainWhite};
    border: 2px solid ${styles.colors.secondaryBlue};
    padding: 2%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    /* ${styles.textSlanted}; */
    color: ${styles.colors.secondaryBlue};
    cursor: pointer;
    border-radius: 5%;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.secondaryBlue};
      color: ${styles.colors.mainWhite};
      border: 2px solid ${styles.colors.mainWhite};
    }
  }
`
