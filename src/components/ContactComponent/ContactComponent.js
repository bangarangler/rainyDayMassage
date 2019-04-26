import React from "react"
import { Section, Title } from "../../utils"
import styled from "@emotion/styled"
import { styles } from "../../utils"
import img from "../../images/gridTableShop.jpg"
import shop from "../../images/rainydaysign.jpg"

const ContactComponent = props => {
  return (
    <Section>
      <Title message="please reach out any time" title="Rainy Day Massage" />
      <LocationWrapper>
        <div className="shop">
          <img src={shop} alt="Rainy day massage shop sign" />
        </div>
        <div className="details">
          <h4 className="address">
            3816 South New Hope Rd Suite 4, Gastonia, NC 28056
          </h4>
          <p className="phone">(704) 964-8414</p>
          <p className="license">License: #lmt #13280</p>
        </div>
      </LocationWrapper>
      <ContactWrapper>
        <h2 className="heading">Kaitlyn Hofmann</h2>
        <div className="table">
          <img src={img} alt="Kaitlyn Hofmann" className="kat" />
        </div>
        <p className="owner">Owner of Rainy Day Massage</p>
        <div className="textContainer">
          <p className="text">
            Things to do, places to go, time flying by, waking up tired,
            repeating the cycle. Even when you have down time, you're so keyed
            up it takes you a long time to let the tension go. That&#39;s what I
            hear again and again. I see what this does to a body, and it isn't a
            good thing. I am a <big>re-set</big> button. I&#39;ll get your
            &#34;old&#34; self back in your body and your mind. I know where to
            find the kid in you. I know how to remove layers of tension and
            stress, how to take you from tight to &#34;alright!&#34;, how to get
            you breathing deeply and openly again. Holding your breath right
            now? Then you&#39;re worse off than I thought - come right on in! I
            love what I do so let me show you how you can love it too!
          </p>
        </div>
      </ContactWrapper>
    </Section>
  )
}

export default ContactComponent

const ContactWrapper = styled.div`
  //border: 1px solid purple;
  width: 90%;
  display grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr;
  margin-top: 8%;
  margin-left: auto;
  margin-right: auto;
  place-items: center;
  grid-gap: 2%;
  grid-template-areas:
  'katImg'
  'head'
  'sub'
  'body';
  @media (min-width: 768px) {
    margin-top: -100px;
    grid-template-columns: 1fr, 1fr, 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    'katImg head sub'
    'body body body';
  }
  .heading {
  grid-area: head;
    font-size: 2.5rem;
    padding: 3%;
    color: ${styles.colors.secondaryBlue};
    text-align: center;
    @media (min-width: 768px) {
      text-align: center;
      padding: 1%;
      font-size: 3rem;
      //text-decoration: underline;
    }
  }
  .table {
  grid-area: katImg;
    display: flex;
    align-items: center;
    justify-content: center;
    .kat{
      width: 250px;
      display: block;
      object-fit: contain;
      @media (min-width: 576px) {
        width: 200px;
        height: 200px;
      }
    }
  }
  .textContainer {
    grid-area: body;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid blue;
    margin-bottom: 21%;
    @media (min-width: 576px) {
      margin-top: -100px;
      margin-bottom: 3%;
      @media (min-width: 768px) {
        margin-top: -90px;
      }
      @media (min-width: 992px) {
        margin-top: -70px;
      }
    }
    .text {
    grid-area: body;
      font-size: 1rem;
      letter-spacing: .1rem;
      word-spacing: .1rem;
      text-align: center;
      line-height: 1.5rem;
      padding: 3%;
      @media (min-width: 576px) {
        font-size: 1.5rem;
        letter-spacing: .1rem;
        word-spacing: .3rem;
        line-height: 2rem;
      }
    }
  }
  .owner {
  grid-area: sub;
    font-size: 1.5rem;
    color: ${styles.colors.secondaryBlue};
    padding: 2%;
    text-align: center;
    ${styles.textSlanted};
    @media (min-width: 576px) {
      //text-decoration: underline;
      font-size: 2rem;
    }
  }
`

const LocationWrapper = styled.div`
  //border: 1px solid blue;
  margin-top: 8%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-gap: 3%;
  place-items: center;
  grid-template-areas:
    "shpImg"
    "info";
  @media (min-width: 576px) {
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "info shpImg";
    margin-bottom: 8%;
  }
  .shop {
    //max-height: 300px;
    //border: 1px solid green;
    grid-area: shpImg;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
      display: block;
      max-width: 250px;
      margin-bottom: 5%;
      @media (min-width: 576px) {
        width: 220px;
        height: 220px;
      }
    }
  }
  .details {
    grid-area: info;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .address {
      color: ${styles.colors.secondaryBlue};
      font-size: 1rem;
      text-align: center;
      word-spacing: 0.1rem;
      line-height: 1.5rem;
      @media (min-width: 576px) {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }
    .phone {
      ${styles.textSlanted};
      color: ${styles.colors.mainGrey};
      margin: 2% auto;
      font-size: 1.3rem;
      @media (min-width: 576px) {
        font-size: 2rem;
        margin: 3% auto;
      }
    }
    .license {
      color: ${styles.colors.mainGrey};
      font-size: 1.5rem;
      margin: 2% auto;
      @media (min-width: 576px) {
        font-size: 2.5rem;
        margin: 1% auto;
      }
    }
  }
`
