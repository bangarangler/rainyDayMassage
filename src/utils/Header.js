import React from "react"
import styled from "@emotion/styled"
import img from "../images/bcg/heroButterfly.jpg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 60px);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url(${props => props.img}) center/cover fixed no-repeat;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-position: center;
  //background-size: cover;
  //background-repeat: no-repeat;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

export { HomeHeader, PageHeader }
