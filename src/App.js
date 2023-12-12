import React from 'react';
import './App.css';
// import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Features from './containers/features/Features';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import Blog from './containers/blog/Blog';
import Possibility from './containers/possibility/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Header from './containers/header/Header';



const App=()=> {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
       <Features />
      <Possibility />
      <CTA />
      <Blog /> 
      <Footer />   
    </div>
  );
}

export default App;
