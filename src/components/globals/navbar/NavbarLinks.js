import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/blog",
        name: "blog",
      },
      {
        id: 2,
        path: "/contact",
        name: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="navLink">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style: none;
  }
  .navLink {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.secondaryBlue};
    font-weight: 700;
    font-size: 2rem;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainBlue};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .navLink:hover {
      background: ${styles.colors.mainBlack};
      opacity: 0.8;
      padding: 0.5rem 1rem;
    }
  }
`
