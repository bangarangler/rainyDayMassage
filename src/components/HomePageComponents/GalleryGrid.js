import React from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "gridGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  let gridWord = [
    { id: 1, name: "therapy" },
    { id: 2, name: "rdm" },
    { id: 3, name: "i made this" },
    { id: 4, name: "health" },
    { id: 5, name: "massage" },
    { id: 6, name: "kaitlyn" },
    { id: 7, name: "happy" },
    { id: 8, name: "life" },
  ]
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className={`item item${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    {gridWord.map((w, i) => {
                      return (
                        <p key={w.id} className="info">
                          {gridWord.map((w, i) => {
                            let word = w.name.concat("")[i + 1]
                            {
                              console.log(word)
                            }
                            return <p className="info">{word}</p>
                          })}
                        </p>
                      )
                    })}
                  </div>
                )
              })}
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-row-gap: 1rem;
  grid-template-areas:
    /* "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight"; */
    "one two three four"
    "five six seven eight";
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
      "seven seven four four"
      "five three eight eight";
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
    /* img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    } */
    /* .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    } */
    grid-template-areas:
      "one one five five three three"
      "four four four seven seven seven"
      "two two six six eight eight";
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
