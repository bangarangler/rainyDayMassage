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
    //console.log(this.state.tagged)
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
          <p className="blogDesc">
            {this.props.singleBlog.node.postDescription}
          </p>
          {this.state.show && (
            <div className="post">
              {this.props.singleBlog.node.blogPost.blogPost}
            </div>
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
  //border: 1px solid green;
  margin: 2rem auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "postImg"
    "info"
    "postDesc";
  @media (min-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    grid-template-areas:
      "postImg"
      "info"
      "postDesc";
  }
  @media (min-width: 550px) {
    margin: 2rem auto;
    width: 100%;
    display: grid;
    //border: 1px solid purple;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr, 1fr;
    grid-template-areas:
      "postImg info info"
      "postDesc postDesc postDesc";
  }
  @media (min-width: 992px) {
    margin: 2rem auto;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "postImg"
      "info"
      "postDesc";
  }
  .postImg {
    grid-area: postImg;
    margin: 2% auto;
    @media (min-width: 400px) {
      margin: 2% auto;
    }
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
      @media (min-width: 400px) {
        width: 100%;
        margin: 1% auto;
        //border: 1px solid purple;
        text-align: center;
        font-size: 2rem;
      }
    }
    .author {
      color: ${styles.colors.secondaryBlue};
      ${styles.textSlanted};
      text-transform: capitalize;
      font-size: 1.2rem;
      @media (min-width: 400px) {
        font-size: 2rem;
      }
    }
    .time {
      color: ${styles.colors.mainGrey};
      ${styles.textSlanted};
      font-size: 1rem;
      @media (min-width: 400px) {
        font-size: 1.3rem;
      }
    }
  }
  .postDesc {
    grid-area: postDesc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .blogDesc {
      color: ${styles.colors.mainBlue};
      letter-spacing: 0.1rem;
      font-size: 2rem;
      margin-bottom: 2%;
      text-align: center;
      @media (min-width: 400px) {
        text-align: center;
      }
    }
    .post {
      //border: 1px solid red;
      padding: 2%;
      letter-spacing: 0.1rem;
      font-size: 1.5rem;
      text-align: center;
      margin: 2% auto;
      transition: transform 1s ease-in-out;
    }
    //.bPost {
    //display: none;
    //}
    //.show {
    //display: flex;
    //}
  }
  .postBtn {
    margin-top: 1rem;
    color: ${styles.colors.secondaryBlue};
    border: 3px solid ${styles.colors.secondaryBlue};
    border-radius: 3%;
    &:hover {
      color: ${styles.colors.mainWhite};
      border: 3px solid ${styles.colors.mainGrey};
      background: ${styles.colors.secondaryBlue};
    }
  }
`
