import styled from "@emotion/styled"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  //justify-content: center;
  //align-items: center;
  //margin: 0 auto;
  color: ${styles.colors.mainBlue};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  border: 3px solid ${styles.colors.mainBlue};
  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainBlue};
    color: ${styles.colors.mainWhite};
    border: ${styles.colors.mainWhite};
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  border: 3px solid ${styles.colors.mainBlack};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainBlue};
  }
`

export { BannerButton, SectionButton }
