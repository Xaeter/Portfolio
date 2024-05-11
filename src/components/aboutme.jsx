import React from "react";
import styled from "styled-components";
import placeholder from "../images/img_placeholder.jpg";

export default function AboutMe() {
  return (
    <Container>
      <Card>
        <h2>Basta naa</h2>
      </Card>
      <Card>
        <h2>Education</h2>
        <Education>
          <img src={placeholder} alt="" />
          <EDes>
            <h3>Title</h3>
            <p>Description</p>
          </EDes>
        </Education>
        <Education>
          <img src={placeholder} alt="" />
          <EDes>
            <h3>Title</h3>
            <p>Description</p>
          </EDes>
        </Education>
        <Education>
          <img src={placeholder} alt="" />
          <EDes>
            <h3>Title</h3>
            <p>Description</p>
          </EDes>
        </Education>
        <Education>
          <img src={placeholder} alt="" />
          <EDes>
            <h3>Title</h3>
            <p>Description</p>
          </EDes>
        </Education>
        <Education>
          <img src={placeholder} alt="" />
          <EDes>
            <h3>Title</h3>
            <p>Description</p>
          </EDes>
        </Education>
      </Card>
      <Card>
        <h2>Skills</h2>
        <Skills>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Canva</div>
          <div>Photoshop</div>
          <div>Krita</div>
          <div>Python</div>
          <div>Java</div>
          <div>C</div>
          <div>C++</div>
        </Skills>
      </Card>
      <Card>
        <h2>Achievements</h2>
        <Achievements>
          <Achievement>
            <img src={placeholder} alt="" srcset="" />
          </Achievement>
          <Achievement>
            <img src={placeholder} alt="" srcset="" />
          </Achievement>
          <Achievement>
            <img src={placeholder} alt="" srcset="" />
          </Achievement>
          <Achievement>
            <img src={placeholder} alt="" srcset="" />
          </Achievement>
        </Achievements>
      </Card>
    </Container>
  );
}


const Achievements = styled.div`
  display: flex;
  padding: 1em;
  box-sizing: border-box;
  height: 70%;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 1em;
`;

const Achievement = styled.div`
  width: 250px;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  div {
    padding: 1em;
    border-radius: 10px;
    background-color: #80808042;
  }
`;

const Education = styled.div`
  width: 90%;
  height: 100px;
  background-color: #0000001e;
  margin: 0 auto;
  margin-bottom: 1em;
  border-radius: 10px;
  display: flex;
  padding: 1em;
  gap: 1em;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;


const EDes = styled.div`
  
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #b88b4a;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
`;

const Card = styled.div`
  background-color: #fdfff7d3;
  width: 40%;
  height: 45%;
  border-radius: 20px;
  color: #1c1d21;
  overflow: hidden;

  h2 {
    margin-left: 1em;
  }

  &:hover {
    overflow: auto;
  }
`;
