import React from 'react';
import './Section8.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/c1.png';
import Img2 from '../../assets/c2.png';
import Img3 from '../../assets/c3.png';
import Img4 from '../../assets/c4.png';
import Img5 from '../../assets/c5.png';
import Img6 from '../../assets/c6.png';

const Section8 = () => {

  return (
    <section className="Section8">
      <Wrapper className="Section8_container">
        <div className='title-container3'>
          <div className="title-box">
            <h1 className="title">Nuestros aliados</h1>
          </div>
        </div>
        <div className="empresas_aliadas">
            <img src={Img1} alt= "" />
            <img src={Img2} alt= "" />
            <img src={Img3} alt= "" />
            <img src={Img4} alt= "" />
            <img src={Img5} alt= "" />
            <img src={Img6} alt= "" />
        </div>
    
      </Wrapper>
    </section>
  );
};

export default Section8;
