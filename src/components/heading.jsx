import React from 'react'
import styled from 'styled-components';
import AboutMe from './aboutme';

export default function Heading() {
  return (
  <Container>
    <Logo></Logo>
    <Navigation>
        <a href="#about_me">About Me</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
    </Navigation>
    
  </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    padding: 0em 2em;
    box-sizing: border-box;

    color: #1C1D21;

    @media screen and (max-width: 350px) {
        gap: 1em;
        padding: 0em 0.5em;
    }
`;

const Logo = styled.div`
    background-color: #2F3137;
    border-radius: 50%;
    width: 40px;
    height: 40px;
`;

const Navigation = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;

    a{
        text-decoration: none;
        color: #2F3137;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 3px;
        
    }

    a:hover{
        border-bottom: 10px solid #999AC6;
        box-sizing: border-box;
        /* transition: 300ms ease-in-out; */
        transition: border-bottom 300ms cubic-bezier(.05,1.47,.93,1.1);
    }


    @media screen and (max-width: 600px) {
        a{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 420px) {
        a{
            font-size: 10px;
        }
    }

    @media screen and (max-width: 350px) {
        gap: 1em;
    }
`;