import Header from './components/Homepage/Header';
import React from 'react';
import Main from './pages/Main';
import Home from './pages/home/Home';
import Footer from 'components/Homepage/Footer';
import Blank from 'components/Blank';
import { GlobalStyles } from './global';
import Contact from 'pages/contact/Contact';
import Education from 'pages/education/Education';
import Experience from 'pages/experience/Experience';
import Error404 from 'pages/errors/Errors404';
import Projects from 'pages/projects/Projects';
import Navigation from 'routes/Navigation';
import "./App.css"


function App() {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
    </div>
  );
}

export default App;
