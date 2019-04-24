import React from "react"
import Img from "gatsby-image"
import { SectionButton } from "../../utils"

import moment from "moment"
import styled from "@emotion/styled"
import { styles } from "../../utils"

// const getTags = blogs => {
//   let tempBlogs = blogs.map(items => {
//     return items.node.tagged
//   })
//   let tempTagged = new Set(tempBlogs)
//   let tagged = Array.from(tempTagged)
//   tagged = ["all", ...tagged]
//   return tagged
// }

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  showPost = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    // console.log(this.props)
    return (
      <PostWrapper>
        {this.props.singleBlog.node.blogImage.map((img, index) => {
          return (
            <div key={index} className="postImg">
              <Img key={index} className="postImg" fixed={img.fixed} />
            </div>
          )
        })}
        <div className="postContent">
          <h3 className="title">{this.props.singleBlog.node.blogTitle}</h3>
          <p className="author">{this.props.singleBlog.node.author}</p>
          <p className="time">
            {moment(this.props.singleBlog.node.createdAt).calendar()}
          </p>
        </div>
        <div className="postDesc">
          <p className="postDesc">
            {this.props.singleBlog.node.postDescription}
          </p>
          {this.state.show && (
            <p>{this.props.singleBlog.node.blogPost.blogPost}</p>
          )}

          <SectionButton className="postBtn" onClick={this.showPost}>
            read more
          </SectionButton>
        </div>
      </PostWrapper>
    )
  }
}

export default BlogPost

const PostWrapper = styled.div`
  /* border: 1px solid green; */
  margin: 2rem auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr, 1fr;
  grid-template-areas:
    "postImg info info"
    "postDesc postDesc postDesc";
  .postImg {
    grid-area: postImg;
  }
  .postContent {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .title {
      color: ${styles.colors.mainBlue};
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    .author {
      color: ${styles.colors.secondaryBlue};
      ${styles.textSlanted};
      text-transform: capitalize;
      font-size: 1.2rem;
    }
    .time {
      color: ${styles.colors.mainGrey};
      ${styles.textSlanted};
      font-size: 1rem;
    }
  }
  .postDesc {
    grid-area: postDesc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    p {
      color: ${styles.colors.mainBlack};
      letter-spacing: 0.1rem;
    }
    .bPost {
      display: none;
    }
    .show {
      display: flex;
    }
  }
  .postBtn {
    margin-top: 1rem;
    color: ${styles.colors.secondaryBlue};
    border: 3px solid ${styles.colors.secondaryBlue};
    border-radius: 9%;
    &:hover {
      color: ${styles.colors.mainWhite};
      border: 3px solid ${styles.colors.mainGrey};
      background: ${styles.colors.secondaryBlue};
    }
  }
`
