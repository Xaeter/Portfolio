import React from "react";
import styled from "styled-components";
import fb_logo from "../images/logo.png";

export default function Contact() {
  return (
    <Container>
      <Medias>
        <a href="">
          <img src={fb_logo} alt="" />
        </a>
        <a href="">
          <img src={fb_logo} alt="" />
        </a>
        <a href="">
          <img src={fb_logo} alt="" />
        </a>
        <a href="">
          <img src={fb_logo} alt="" />
        </a>
        <a href="">
          <img src={fb_logo} alt="" />
        </a>
      </Medias>
      <Navigations>
        <a href="#about_me">About Me</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
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
    overflow: hidden;
    img {
      width: 30px;
      height: 30px;
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
  width: 100%;
  p{
    color: white;
    margin: 0;
    text-align: center;
  }
`;
