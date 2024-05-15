import React from "react";
import styled from "styled-components";
import krishia from "../images/krishia_profile.png";
import art1 from "../images/artwork1.png";
import art_squat from "../images/art-squat.png";

export default function Hero() {
  return (
    <Container>
      <Picture>
        <img src={krishia} alt="" />
        <Name>
          <h1>Krishia T. Sayson</h1>
          <AboutMe>
            <a href="#about_me">About Me →</a>
          </AboutMe>
        </Name>
      </Picture>
      <Artworks>
        <Art>
          <div></div>
          <img src={art_squat} alt="" />
        </Art>
        <Art>
          <div></div>
          <img src={art1} alt="" />
        </Art>
      </Artworks>
    </Container>
  );
}

const Art = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  box-sizing: border-box;

  &:nth-child(2){
    transform: scale(0.75, 0.75);
  }
  div {
    width: 150%;
    height: 250px;
    background-color: #999ac6;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 25px;
    z-index: 10;
    box-shadow: 7px 7px 12px -3px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 7px 7px 12px -3px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 7px 7px 12px -3px rgba(0, 0, 0, 0.25);
  }
  img {
    position: absolute;
    z-index: 11;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-filter: drop-shadow(5px 5px 5px #2222227a);
  filter: drop-shadow(5px 5px 5px #2222227a);
    
  }
`;
const AboutMe = styled.div`
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }

  a {
    color: #fdfff7;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const Picture = styled.div`
  align-self: flex-start;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

const Name = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #b88b4a;
  color: #fdfff7;
  text-align: center;
  letter-spacing: 3px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-top-right-radius: 10px;
  box-sizing: border-box;

  h1 {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    font-family: "Briem Hand", cursive;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    text-justify: inter-character;
    font-size: 4vw;
    padding: 0em 10px;
    margin: 0;
    box-sizing: border-box;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 1em;
    height: 200px;
    flex-grow: 0;
    h1{
        font-size: 10vw;
    }
  }
`;

const Artworks = styled.div`
  height: 70%;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 1em 2em;
  display: flex;
  gap: 110px;
  /* align-itemss: center; */
    overflow: hidden;

  @media screen and (max-width: 800px) {
    & > div {
      height: 400px;
    }
  }
`;
