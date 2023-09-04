import React from 'react';
import { GlobalStyles } from './global';
import Navigation from 'routes/Navigation';
import "./App.css"


function App() {
  return (
    <div className='app'>
      <GlobalStyles />
      <Navigation />
    </div>
  );
}

export default App;
