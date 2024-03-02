import React from 'react';
import './Hero2.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/img-card1.png';
import Img2 from '../../assets/img-card2.png';
import Img3 from '../../assets/img-card3.png';
import Img4 from '../../assets/img-card4.png';
import Img5 from '../../assets/img-card5.png';

const Hero2 = () => {
  const cardsData = [
    {
      title: 'OFTÁLMICOS',
      text: 'Soluciones oftálmicas para la salud visual...',
      image: Img1,
      color: '#d9ebee'
    },
    {
      title: 'MEDICINA INTERNA',
      text: 'Enfocados en el manejo de los más frecuentes trastornos...',
      image: Img2,
      color: '#f7e3d4'
    },
    {
      title: 'SISTEMA NERVIOSO',
      text: 'Tratamientos dirigidos a los trastornos de sueño, depresión...',
      image: Img3,
      color: '#dcd1de'
    },
    {
      title: 'CALIDAD DE VIDA',
      text: 'Medicamentos contra el dolor y la inflamación, así como...',
      image: Img4,
      color: '#f5e3ec'
    },
    {
      title: 'INFECCIOSOS',
      text: 'Enfocados en el tratamiento de infecciones por...',
      image: Img5,
      color: '#e1efd7'
    }
  ];

  return (
    <section className="hero2">
      <Wrapper className="hero2_container">
        <h2>Contamos con un <strong>portafolio especializado </strong><br></br> para cualquier tipo de necesidad <strong>¡Conócelo!</strong></h2>
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <div key={index} className="custom-card" style={{ backgroundColor: card.color }}>
              <img src={card.image} alt={`Card ${index + 1}`} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero2;
