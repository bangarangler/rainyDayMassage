import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends React.Component {
  render() {
    return (
      <Section>
        <Title message="a little info about" title="rainy day massage" />
        <QuickInfoWrapper>
          <p className="text">
            Hi! I’m Kaitlyn Hofmann LMT#13280 and ACE massage cupping certified
            therapist. I am also the proud mommy of a wonderfully weird 8 year
            old girl and a 4 year old furbaby. I fell in love with massage
            therapy almost 5 years ago during my first class in massage therapy.
            I had no idea what I was getting into or how true to myself this
            profession would be. Over the years I have learned new techniques
            and modalities so that I could customize my clients experience with
            every session. I love what I do and truly enjoy sharing the benefits
            of Massage!
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <SectionButton className="ctBtn">contact</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
    text-align: center;
    font-size: 1.3rem;
    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 2.2rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 80%;
  }

  .ctBtn {
    margin: 2rem auto;
    border: 8px solid;
    background: linear-gradient(
      to bottom right,
      rgba(51, 255, 202),
      rgba(5, 160, 208)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-image: linear-gradient(
        to bottom right,
        rgba(51, 255, 202),
        rgba(5, 160, 208)
      )
      1;
    letter-spacing: 0.2rem;
    font-size: 3rem;
    text-transform: capitalize;
    width: 80%;
    &:hover {
      background: ${styles.colors.secondaryBlue};
      -webkit-text-fill-color: ${styles.colors.mainWhite};
      color: ${styles.colors.mainWhite};
      border: 5px solid ${styles.colors.mainGrey};
    }
  }
`
