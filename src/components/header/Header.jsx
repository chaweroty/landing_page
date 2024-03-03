import React from 'react';
import './Header.scss';
import Wrapper from '../wrapper/Wrapper';
import Img2 from '../../assets/fblog.png';
import Img3 from '../../assets/instlog.png';

const Header = () => {
return (
    <section className="Header" style={{ backgroundColor: '#eda108', color: '#fff' }}>
    <Wrapper className="Header_container">
    <div className="Header-column left-column">
        <p className="header-text">servicioalcliente@lasante.com.co</p>
    </div>
        <div className="Header-column center-column">
        <div className="social-media">
            <div className="social-icons">
                <img src={Img2} alt="Facebook" />
                <img src={Img3} alt="Instagram" />
            </div>
        <div className="search-box2">
            <input type="text" placeholder="Buscar" />
            <button className='logo-button'>Buscar</button>
        </div>
        
        </div>
        </div>
    </Wrapper>
    </section>
);
};

export default Header;
