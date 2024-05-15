import React from "react";
import styled from "styled-components";
import facebook from "../images/facebook.png";
import linked from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import devianart from "../images/devianart.png";

export default function Contact() {
  return (
    <Container>
      <Medias>
        <a href="https://www.facebook.com/K.T.Sayson" target="_blank">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/krishia-T-sayson/" target="_blank">
          <img src={linked} alt="" />
        </a>
        <a href="https://twitter.com/xae_say" target="_blank">
          <img src={twitter} alt="" />
        </a>
        <a href="https://instagram.com/xae_say" target="_blank">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.deviantart.com/xaeter" target="_blank">
          <img src={devianart} alt="" />
        </a>
      </Medias>
      <Navigations>
        <a href="#home">Home</a>
        <a href="#about_me">About Me</a>
        <a href="#works">Works</a>
      </Navigations>
      <Copyright>
        <p>Copyright 2024 | Designed by: Krishia T. Sayson</p>
      </Copyright>
    </Container>
  );
}

const Container = styled.div`
  background-color: #1c1d21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2em;
  box-sizing: border-box;
`;
const Medias = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  box-sizing: border-box;
  a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
    }
  }
`;
const Navigations = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  font-weight: 400;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Copyright = styled.div`
  padding: 1em;
  background-color: #00000015;
  /* width: 100%; */
  p {
    color: white;
    margin: 0;
    text-align: center;
  }
`;
