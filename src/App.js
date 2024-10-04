import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar'
import Banner from './components/banner';
import Items from './components/item';
import Bannerhead from './components/banner_head';
import Footers from './components/footer'
import Swiperss from './components/swipers'
import Scroller from './components/scroller';
import './App.css';



function App() {
  return (
    <div>
      <Navbar/>
     <Banner/>
     <Items/> 
      <Swiperss/>
     <Footers/>

      

    </div>
  );
}

export default App;
