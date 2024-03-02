import React from 'react';
import './Section7.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/card1ss6.jpg';
import Img2 from '../../assets/card2ss6.jpg';
import Img3 from '../../assets/card3ss6.jpg';
import Img4 from '../../assets/card4ss6.jpg';
import Img5 from '../../assets/card5ss6.jpg';
import Img6 from '../../assets/card6ss6.jpg';
import Img7 from '../../assets/card7ss6.jpg';
import Img8 from '../../assets/card8ss6.jpg';
import Img9 from '../../assets/card9ss6.jpg';

const Section7 = () => {
  const cardsData = [
    { image: Img1 },
    { image: Img2 },
    { image: Img3 },
    { image: Img4 },
    { image: Img5 },
    { image: Img6 },
    { image: Img7 },
    { image: Img8 },
    { image: Img9 }
  ];

  return (
    <section className="Section7">
      <Wrapper className="Section7_container">
        <div className='title-container2'>
          <div className="title-box">
            <h1 className="title">Últimas publicaciones</h1>
          </div>
        </div>
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <div key={index} className="custom-card">
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Section7;
