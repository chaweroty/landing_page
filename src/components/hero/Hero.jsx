import React, { useState, useEffect } from 'react';
import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/hero-1.jpg";
import Img2 from "../../assets/hero-2.jpg";
import Img3 from "../../assets/hero-3.jpg";
import Img4 from "../../assets/hero-4.jpg";
import Img5 from "../../assets/hero-5.jpeg";
import Img6 from "../../assets/hero-6.jpeg";

const Hero = () => {
    const images = [Img1,Img3,Img4,Img5,Img6];
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="hero">
        <Wrapper className="hero_container">
          <div className="hero_right">
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
            
          </div>
        </Wrapper>
      </section>
    );
  };
  
  export default Hero;