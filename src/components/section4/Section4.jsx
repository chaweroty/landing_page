import React from 'react';
import './Section4.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/bg-image.jpg';

const Section4 = () => {
    return (
        <section className="section4">
            <Wrapper className="section4_container" style={{ backgroundImage: `url(${Img1})` }}>

                <div className="overlay">
                    <h2>Más de 30 años trabajando para tu salud</h2>
                    <p>Más de 3 décadas de investigación, desarrollo y comercialización de medicamentos genéricos y de marca. </p>
                    <button className="button-primary">EXPERIENCIA LA SANTÉ</button>
                </div>
            </Wrapper>
        </section>
    );
};

export default Section4;
