import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "@emotion/styled"
import { styles } from "../../utils"
import Img from "gatsby-image"

const PROMO = graphql`
  {
    allContentfulPromotion {
      edges {
        node {
          id
          promotionName
          promotionDescription {
            promotionDescription
          }
          price
          time
          promotionImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Promotion() {
  return (
    <Section>
      <Title title="promotion" message="check out our" />
      <div>
        <StaticQuery
          query={PROMO}
          render={data => {
            const promos = data.allContentfulPromotion.edges
            return promos.map(item => {
              return (
                <PromoWrapper key={item.node.id}>
                  <Img
                    className="image"
                    fluid={item.node.promotionImage.fluid}
                  />
                  <h3 className="promoName">{item.node.promotionName}</h3>
                  <p className="price">${item.node.price}</p>
                  <p className="desc">
                    {item.node.promotionDescription.promotionDescription}
                  </p>
                  <p className="time">{item.node.time}</p>
                  <SectionButton className="btn">
                    {" "}
                    <a href="https://www.massagebook.com/profiles/publicBooking/6602415?src=external">
                      book intro!
                    </a>
                  </SectionButton>
                </PromoWrapper>
              )
            })
          }}
        />
      </div>
    </Section>
  )
}

const PromoWrapper = styled.div`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 1rem;
  width: 100%;
  grid-template-areas:
    "img"
    "title"
    "desc"
    "price"
    "time"
    "btn";
  .image {
    /* border: 1px solid red; */
    width: 200px;
    height: 250px;
    object-fit: cover;
    display: block;
    grid-area: img;
    align-self: center;
    justify-self: center;
    margin: -2.5rem auto;
    z-index: -1111111;
  }
  .promoName {
    grid-area: title;
    /* border: 1px solid pink; */
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 2.5rem;
    text-transform: capitalize;
    color: ${styles.colors.mainBlue};
    background: ${styles.colors.mainWhite};
  }
  .desc {
    grid-area: desc;
    /* border: 1px solid red; */
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    word-spacing: 0.3rem;
    color: ${styles.colors.mainBlack};
    text-align: center;
    padding: 0.5rem;
  }
  .price {
    grid-area: price;
    color: ${styles.colors.secondaryBlue};
    font-size: 7rem;
    font-weight: 700;
    align-self: center;
    justify-self: center;
  }
  .time {
    grid-area: time;
    color: ${styles.colors.secondaryBlue};
    font-size: 5rem;
    height: 50%;
    /* border: 1px solid red; */
    font-weight: 700;
    ${styles.textSlanted};
    align-self: center;
    justify-self: center;
    text-align: center;
    margin-top: -6rem;
  }

  .btn {
    margin-top: 3.5rem;
    grid-area: btn;
    color: ${styles.colors.secondaryBlue};
    border: 5px solid ${styles.colors.secondaryBlue};
    /* background: ${styles.colors.mainBlack}; */
    font-size: 2.5rem;
    &:hover {
      color: ${styles.colors.mainWhite};
      background: ${styles.colors.secondaryBlue};
      border: 5px solid ${styles.colors.secondaryBlue};
    }
    @media (min-width: 992px) {
      width: 60%;
    }
  }
  @media (min-width: 576px) {
    grid-template-columns: 95%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    width: 85%;
    grid-template-areas:
    'img title'
    'price time'
    'desc desc'
    'btn btn';
    justify-items: center;
    justify-content: center;
    grid-gap: 2rem;
  }
`
