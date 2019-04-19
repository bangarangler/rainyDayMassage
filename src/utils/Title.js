import React from "react"
import styled from "@emotion/styled"
import { styles } from "../utils"

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: "our mission",
  title: "rainy day massage",
}
const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: ".5rem" })};
    font-size: 2rem;
    color: ${styles.colors.secondaryBlue};
  }
  .title {
    ${styles.letterSpacing({ spacing: ".5rem" })};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.secondaryBlue};
    margin: 0.5rem auto;
  }
`
