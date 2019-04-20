import React from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "gridGallery/armsOpenSuperKid.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img2: file(relativePath: { eq: "gridGallery/knightGear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img3: file(relativePath: { eq: "gridGallery/babyOnBoard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img4: file(relativePath: { eq: "gridGallery/foggyCliffRain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img5: file(relativePath: { eq: "gridGallery/happyHighFive.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img6: file(relativePath: { eq: "gridGallery/hurtKnee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img7: file(relativePath: { eq: "gridGallery/raindropCapture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img8: file(relativePath: { eq: "gridGallery/sunnyDropCapture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item1">
                <Img fluid={img1} />
                <p className="info">things</p>
              </div>
              <div className="item item2">
                <Img fluid={img2} />
                <p className="info">thii</p>
              </div>
              <div className="item item3">
                <Img fluid={img3} />
                <p className="info">things</p>
              </div>
              <div className="item item4">
                <Img fluid={img4} />
                <p className="info">stuff</p>
              </div>
              <div className="item item5">
                <Img fluid={img5} />
                <p className="info">stuff</p>
              </div>
              <div className="item item6">
                <Img fluid={img6} />
                <p className="info">stuff</p>
              </div>
              <div className="item item7">
                <Img fluid={img7} />
                <p className="info">stuff</p>
              </div>
              <div className="item item8">
                <Img fluid={img8} />
                <p className="info">stuff</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  background: linear-gradient(
    to right bottom,
    rgba(51, 255, 202, 0.4),
    rgba(5, 160, 208, 0.9)
  );
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-row-gap: 1rem;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight";
  /* display: none; */
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    color: ${styles.colors.secondaryBlue};
    font-size: 1.8rem;
    padding: 0.3rem;
    background: white;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 576px) {
    display: grid;
    width: 90%;
    margin: 0 auto;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px;
    /* grid-template-rows: repeat(4, 1fr); */
    grid-template-areas:
      "two two two six"
      "three eight eight eight"
      "seven seven four four";
  }
  @media (min-width: 788px) {
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-gap: 1rem;
    grid-template-areas:
      "one two two two"
      "six two two two"
      "seven seven four three"
      "five five eight eight";
    .item1 {
      grid-area: one;
    }
    .item2 {
      grid-area: two;
    }
    .item3 {
      grid-area: three;
    }
    .item4 {
      grid-area: four;
    }
    .item5 {
      grid-area: five;
    }
    .item6 {
      grid-area: six;
    }
    .item7 {
      grid-area: seven;
    }
    .item8 {
      grid-area: eight;
    }
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* grid-template-rows: repeat(6, 1fr); */
    grid-gap: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    grid-template-areas:
      "one seven seven six six six "
      "four four two two two two "
      "four four two two two two "
      "three three three eight eight eight "
      "five five five eight eight eight ";
    .item1 {
      grid-area: one;
    }
    .item2 {
      grid-area: two;
    }
    .item3 {
      grid-area: three;
    }
    .item3 {
      grid-area: three;
    }
    .item4 {
      grid-area: four;
    }
    .item5 {
      grid-area: five;
    }
    .item6 {
      grid-area: six;
    }
    .item7 {
      grid-area: seven;
    }
    .item8 {
      grid-area: eight;
    }
  }
`
