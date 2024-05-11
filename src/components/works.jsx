import React from "react";
import styled from "styled-components";
import placeholder from "../images/img_placeholder.jpg";

export default function Works() {
  return (
    <Container>
      <h2>My Works</h2>
      <WorksContainer>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
        <Work>
          <img src={placeholder} alt="" />
          <Description>
            <h3>Title</h3>
            <p>Description</p>
          </Description>
        </Work>
      </WorksContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #999ac6;
  box-sizing: border-box;
  padding: 0.5em 2em;

  h2 {
    font-size: 40px;
    color: white;
  }
`;

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;

const Work = styled.div`
  width: 250px;
  height: 250px;
  background-color: #424141;
  border-radius: 10%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.37);

`;

const Description = styled.div`
  position: absolute;
  padding: 1em;
  bottom: 0;
  left: 0;
  color: white;
  background-color: #00000089;
  width: 100%;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    padding-top: 10px;
  }
`;
