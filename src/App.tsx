import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Content from './Components/Content';
import Footer from './Components/Footer';
import LeftBar from './Components/LeftBar';
function App() {
  return (
    <>
    <main id="container" className="container">
      <LeftBar />
      <Content />
    </main>
    <Footer />
    </>
  );
}

export default App;
