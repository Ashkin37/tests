import React from 'react';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <>
    <TopHeader/>
    <main>
      <Container>
        <HomePage/>
      </Container>  
    </main>
    <Footer/>      
    </>
  );
}

export default App;
