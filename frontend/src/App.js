import React from 'react';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <TopHeader/>
    <main>
      <Container>
        <h1>this is tests</h1>
      </Container>  
    </main>
    <Footer/>      
    </>
  );
}

export default App;
