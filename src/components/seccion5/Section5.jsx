import React, { useState, useEffect } from 'react';
import "./Section5.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/carrusel2-1.png";
import Img2 from "../../assets/carrusel2-2.png";
import Img3 from "../../assets/carrusel3-3.png";
import Img4 from "../../assets/carrusel2-4.png";
import Img5 from "../../assets/carrusel2-5.png";
import Img6 from "../../assets/carrusel2-6.png";
import Img7 from "../../assets/carrusel2-7.png";

const Section5 = () => {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]; 
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length); 
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section5">
            <Wrapper className="section5_container">
                <div className='title-container3'>
                    <div className="title-box">
                        <h1 className="title">Conoce algunos de nuestros productos</h1>
                    </div>
                </div>
                <div className="section5_right">
                    <div className="image-container">
                        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                    </div>
                    <div className="image-container">
                        <img src={images[(currentIndex + 1) % images.length]} alt={`Image ${(currentIndex + 2) % images.length + 1}`} />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Section5;
