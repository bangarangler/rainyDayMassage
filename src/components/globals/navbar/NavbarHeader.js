import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/rainingTempLogo.svg"
import { TiThLarge } from "react-icons/ti"
import styled from "@emotion/styled"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="rainy day massage" className="logo" />
        </Link>
        <TiThLarge
          className="toggleIcon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggleIcon {
    font-size: 3.5rem;
    color: ${styles.colors.mainBlue};
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .logo {
    max-height: 80px;
    max-width: 120px;
  }
`
