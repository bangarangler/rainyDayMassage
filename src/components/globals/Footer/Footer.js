import React from "react"
import styled from "@emotion/styled"
import { styles } from "../../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { IoIosBook } from "react-icons/io"

export default class Footer extends React.Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaInstagram className="icon instagramIcon" />,
        path: `https://www.instagram.com/rainydaymassage/?hl=en`,
      },
      {
        id: 2,
        icon: <FaFacebook className="icon facebookIcon" />,
        path: `https://www.facebook.com/RainyDayMassageNC/`,
      },
      {
        id: 3,
        icon: <IoIosBook className="icon massageBookIcon" />,
        path: `https://www.massagebook.com/profiles/publicBooking/6602415?src=external`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">rainy day massage</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; 2017 rainy day massage</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "title"
    "icons"
    "copy";
  justify-items: center;
  align-items: center;
  /* grid-gap: 0.5rem; */
  @media (min-width: 500px) {
    grid-gap: 0.8rem;
  }
  .icons {
    width: 10rem;
    grid-area: icons;
    //border: 1px solid blue;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5%;
  }
  .icon {
    color: #33ffca;
    font-size: 2rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainBlue};
    }
  }
  .title {
    grid-area: title;
    color: ${styles.colors.mainWhite};
    text-align: center;
    margin: 0 auto;
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    border: 8px solid;
    border-image: linear-gradient(
        to bottom right,
        rgba(51, 255, 202),
        rgba(5, 160, 208)
      )
      1;
  }
  .copyright {
    grid-area: copy;
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`
