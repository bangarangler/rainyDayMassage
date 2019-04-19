import React from "react"
import styled from "@emotion/styled"
import styles from "../utils"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 98.4px);
  background: url(${props => props.img}) center/cover fixed no-repeat;
  position: cover;
`

export { HomeHeader }
