import React from 'react';
import './Section6.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/caed1.jpg';
import Img2 from '../../assets/caed2.jpg';
import Img3 from '../../assets/caed3.jpg';

const Section6 = () => {
  const cardsData = [
    {
      title: 'Infecciones virales',
      text: 'Infecciones virales Causadas por virus, que son gérmenes muy pequeños, compuestos de material genético (ADN, ARN) con un recubrimiento de proteínas. Los virus pueden causar enfermedad',
      image: Img1,
      color: '#d9ebee'
    },
    {
      title: 'Bacterias',
      text: 'Son seres vivos que contienen sólo una célula (unicelulares). Solo se pueden observar con un microscopio…',
      image: Img2,
      color: '#f7e3d4'
    },
    {
      title: 'Prevención Covid 19',
      text: 'Tips de prevención Covid 19 en tu vehículo y para tu mascota',
      image: Img3,
      color: '#dcd1de'
    },
  ];

  return (
    <section className="Section6">
      <Wrapper className="Section6_container">
      <div className='title-container'>
  {cardsData.map((card, index) => (
    <div key={index} className="title-wrapper">
      <h1 className="title">{card.title}</h1>
    </div>
  ))}
</div>

        <div className="card-grid">
          {cardsData.map((card, index) => (
            <div key={index} className="custom-card" style={{ backgroundColor: card.color }}>
              <img src={card.image} alt={`Card ${index + 1}`} />
              <div className="card-content">
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          {cardsData.map((card, index) => (
            <div key={index} className="button-wrapper">
              <button className="yellow-button">Leer más</button>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Section6;
