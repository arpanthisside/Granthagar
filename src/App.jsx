import { useState } from 'react';
import './App.css';
import './gul.css';
import './bodypre_1.css'
import BodyPre from './BodyPre'
import Nav from './Nav';
import Entry from './Entry'
import './entry_1.css'
import Footer from './Footer';
import Body from './Body';
import './body_1.css'
import './nav_1.css'

function App() {
  return (
    <>
      <Nav />
      <Entry/>
      <BodyPre/>
      <Body/>
      <Footer />
    </>
  );
}

export default App;
