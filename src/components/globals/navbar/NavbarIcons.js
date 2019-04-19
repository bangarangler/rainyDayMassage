import React, { Component } from "react"
import styled from "@emotion/styled"
import { styles } from "../../../utils"
import { IoIosBook } from "react-icons/io"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaInstagram className="icon instagramIcon" />,
        path: "https://www.instagram.com/rainydaymassage/?hl=en",
      },
      {
        id: 2,
        icon: <FaFacebook className="icon facebookIcon" />,
        path: "https://www.facebook.com/RainyDayMassageNC/",
      },
      {
        id: 3,
        icon: <IoIosBook className="icon massageBookIcon" />,
        path:
          "https://www.massagebook.com/profiles/publicBooking/6602415?src=external",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_default"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 2.5rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .facebookIcon {
    color: #3b579d;
  }
  .instagramIcon {
    color: #8a3ab9;
  }

  .massageBookIcon {
    color: #33ffca;
  }
  .icon:hover {
    color: ${styles.colors.mainBlue};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`
