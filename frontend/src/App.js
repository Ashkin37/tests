import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <>
    <Header/>
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
