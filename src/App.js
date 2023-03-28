import React from 'react';
import Header from './components/Header';
import "./App.css";
import SmallCard from './components/SmallCard';
import BigCard from './components/BigCard';


const App = () => {
  return (
    <>
      <div className='main'>
      <Header/>
      <div style={{color: "#AED8EA",textAlign:"center"}} className='text'> 
      <h1>I gave her my heart, she gave me a meme.</h1>
      </div>
      
      <div className='main-container'>
      
      <h4 className='tags'>EXPLORE TAGS</h4>
      <SmallCard/>
      <h4 className='more'>MORE TAGS +</h4>
      </div>
      </div>
      
      
      <BigCard/>
      
      
      
    </>
  );
}

export default App;
