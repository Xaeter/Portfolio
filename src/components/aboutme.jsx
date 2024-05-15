import React from "react";
import styled from "styled-components";
import placeholder from "../images/img_placeholder.jpg";
import mcs from "../images/schools/mcs.png";
import jnhs from "../images/schools/jnhs.jpeg";
import ctu from "../images/schools/ctu.png";

import coursera from "../images/certificates/coursera.jpg";
import freecode from "../images/certificates/freecodecamp.png";
import infosession from "../images/certificates//info-session.jpg";
import solutions from "../images/certificates/solutions challenge.jpg";
import techconnect from "../images/certificates/TechConnect.png";
import zuit from "../images/certificates/zuit.jpg";

export default function AboutMe() {
  return (
    <Container>
      <Card>
        <h2>Currently...</h2>
        <p className="currently">
          Passionate Computer Engineering student at Cebu Technological
          University serving as a Creatives Media Officer at the Institute of
          Computer Engineers of the Philippines - Student Edition (ICpEP.SE)
          GDSC member
        </p>
      </Card>
      <Card>
        <h2>Education</h2>
        <Education>
          <img src={ctu} alt="" />
          <EDes>
            <h3>College | Cebu Technological University - Main Campus</h3>
            <p>
              <u> BS in Computer Engineering</u>
            </p>
            <p>
              <i>2021-present</i>
            </p>
          </EDes>
        </Education>
        <Education>
          <img src={jnhs} alt="" />
          <EDes>
            <h3>Senior Highschool | Jagobiao National High School</h3>
            <p>
              <u>STEM - Robotics</u>
            </p>
            <p>
              <i>2018-2020</i>
            </p>
          </EDes>
        </Education>
        <Education>
          <img src={mcs} alt="" />
          <EDes>
            <h3>Highschool | Mandaue City School for the Arts</h3>
            <p>
              <u>With Honors</u>
            </p>
            <p>
              <i>2014-2018</i>
            </p>
          </EDes>
        </Education>
        <Education>
          <img src={mcs} alt="" />
          <EDes>
            <h3>Elementary | Mandaue City School for the Arts</h3>

            <p>
              <i>2008-2014</i>
            </p>
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
            <img src={coursera} alt="" />
          </Achievement>
          <Achievement>
            <img src={freecode} alt="" />
          </Achievement>
          <Achievement>
            <img src={infosession} alt="" />
          </Achievement>
          <Achievement>
            <img src={solutions} alt="" />
          </Achievement>
          <Achievement>
            <img src={techconnect} alt="" />
          </Achievement>
          <Achievement>
            <img src={zuit} alt="" />
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
  justify-content: center;
  align-items: center;
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
  @media screen and (max-width: 400px) {
    width: 90%;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    margin: 0;
    font-size: 15px;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
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

  .currently {
    margin: 0 auto;
    width: 70%;
    text-align: center;
    margin-top: 3em;
  }

  @media screen and (max-width: 400px) {
    gap: 0px;
    height: max-content;
  }

  @media screen and (max-width: 400px) {
    .currently {
      margin: 0 auto;
      width: 70%;
      text-align: center;
      margin-bottom: 2em;
    }
  }
`;

const Card = styled.div`
  background-color: #fdfff7d3;
  min-width: 500px;
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

  @media screen and (max-width: 400px) {
    transform: scale(0.7);
    overflow: auto;
  }
`;
