import React from 'react';
import Routes from './routes';
import Navbar from './commun/navbar';

import Footer from './commun/footer'; 
const App= ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
      <Footer/> 
    </div>
  );
}

export default App;
