import React, { useState } from 'react'
import CardsOnHome from '../product/CardsOnHome';
import CarouselOnHome from '../product/CarouselOnHome';
import Welcome from '../Welcome';


function Home(props) {
  return (
    <div className="">
      

                <br/>
                
                <CarouselOnHome />
                <br />
                <CardsOnHome />

                <br/>
                <br/>
                <br/>
                <hr/>
                
                
            </div>
  )
}
export default Home;
