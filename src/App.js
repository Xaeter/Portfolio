import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Hero from './components/hero';
import styled from 'styled-components';
import AboutMe from './components/aboutme';

function App() {
  return (
    <Container>
      <HHContainer>
        <Heading />
        <Hero />
      </HHContainer>
      <div id='about_me'>
        <AboutMe />
      </div>
    </Container>
  );
}

export default App;
const Container = styled.div`
  scroll-behavior: smooth;
`;

const HHContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  &>div:nth-child(2){
    flex-grow: 1;
  }

  @media screen and (max-width: 800px) {
      height: 200vh;
  }
`;


