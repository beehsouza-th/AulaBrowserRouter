import React from 'react';
import Header from "../Components/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

    export default function Home(){
    return(
        <>
        <Header/>
        <div class='carousel-principal'>
        <Carousel 
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
                <div id='carousel-home'>
                    <img src="" alt="Slide 1" />
                </div>

                <div id='carousel-home'>
                    <img src="" alt="Slide 2" />
                </div>
                  
                <div id='carousel home'>
                    <img src="" alt="Slide 3" />
                </div>

                <div id='carousel-home'>
                    <img src="[]" alt="Slide 4" />
                </div>
      
            </Carousel>
        </div>
        </>
    );
    }