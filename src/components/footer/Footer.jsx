import React from 'react';
import './Footer.scss';
import Wrapper from '../wrapper/Wrapper';
import Img1 from '../../assets/logoFooter.png';
import Img2 from '../../assets/fblog.png';
import Img3 from '../../assets/instlog.png';

const Footer = () => {
return (
    <section className="Footer" style={{ backgroundColor: '#0a0a2b', color: '#fff' }}>
    <Wrapper className="Footer_container">
        <div className="footer-column left-column">
        <img src={Img1} alt="Logo" />
        </div>
        <div className="footer-column center-column">
        <div className="search-box">
            <h2>Suscribete</h2>
            <input type="text" placeholder="Email" />
            <button>Suscribirse</button>
        </div>
        <div className="social-media">
            <p>Síguenos en nuestras redes sociales:</p>
            <div className="social-icons">
                <img src={Img2} alt="Facebook" />
                <img src={Img3} alt="Instagram" />
            </div>
        </div>
        </div>
        <div className="footer-column right-column">
        <h2>Contacto</h2>
        <p>601 3647500 Cra 65 B No. 13-13 Zona industrial Montevideo, Bogotá</p>
        <p>Email: servicioalcliente@lasante.com.co</p>
        <p>Política de protección de datos personales</p>
        <p>Código de ética y cumplimiento</p>
        </div>
    </Wrapper>
    </section>
);
};

export default Footer;
