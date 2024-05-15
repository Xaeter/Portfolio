import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placeholder from "../images/img_placeholder.jpg";
import art_squat from "../images/art-squat.png";
import art_tea from "../images/art-tea.png";
import art_smoke from "../images/art-smoke.png";
import art_more1 from "../images/art-more1.png";
import art_more2 from "../images/art-more2.png";
import art_more3 from "../images/art-more3.jpg";
import t1 from "../images/tendir/1.jpg";
import t2 from "../images/tendir/2.jpg";
import t3 from "../images/tendir/3.jpg";
import t4 from "../images/tendir/4.jpg";
import t5 from "../images/tendir/5.jpg";
import b1 from "../images/bank/1.jpg";
import b2 from "../images/bank/2.jpg";

export default function Works() {
  return (
    <Container>
      <h2>My Works</h2>
      <WorksContainer>
        <Work>
          <img src={art_squat} alt="" />
          <Description>
            <h3>Squat - Full body practice</h3>
            <p>
              Full body practice sketch no. 3
              <br />
              SQUATS BABY!!
            </p>
          </Description>
        </Work>
        <Work>
          <img src={art_tea} alt="" />
          <Description>
            <h3>Tea party parfait</h3>
            <p>tteeaaAAAA (⪰0⪯)</p>
          </Description>
        </Work>
        <Work>
          <img src={art_smoke} alt="" />
          <Description>
            <h3>Smoke from out of nowhere</h3>
            <p>
              Meika
              <br />
              She's a kinda-ghost who eats ghost.
            </p>
          </Description>
        </Work>
        <Work>
          {/* <img src={placeholder} alt="" /> */}
          <ImageSlider images={[art_more1, art_more2, art_more3]} />
          <Description>
            <h3>More atworks</h3>
            <p>
              Check out my{" "}
              <a href="https://www.deviantart.com/xaeter/">DevianArt</a>
            </p>
          </Description>
        </Work>
        <Work>
          <ImageSlider images={[t1,t2,t3,t4,t5]} />
          <Description>
            <h3>Tendir</h3>
            <p>Connecting vendors and tenders with a spark</p>
          </Description>
        </Work>
        <Work>
          <ImageSlider images={[b1,b2]} />
          <Description>
            <h3>Edge Bank</h3>
            <p>Empowering your financial edge</p>
          </Description>
        </Work>
      </WorksContainer>
    </Container>
  );
}
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Reset fade effect after image change
      }, 500); // Wait for 0.5s before changing image
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`image-slider ${fade ? "fade" : ""}`}>
      <img src={images[currentImageIndex]} alt="" />
    </div>
  );
};

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
  width: 300px;
  height: 300px;
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

  a {
    color: white;
    font-style: italic;
  }

  .fade img {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .unfade img:first-child {
    opacity: 1;
  }
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
