import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logolasante.png";
import {FaBars} from "react-icons/fa";
import {useState} from "react";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
return (
    <nav className="navbar">
        <Wrapper className="navbar_container">
            <a href="#" className="navbar_logo" onClick ={() => setShowNav(false)}>
                
                <img src={Logo} alt="" />
            </a>
            <ul className={`navbar_links ${showNav ? "show-nav" : ""}`}>
                <li onClick = {() => setShowNav(false)}>
                    <a href="#">Somos</a>
                </li>
                <li onClick = {() => setShowNav(false)}>
                    <a href="#">Medicamentos Bioequivalentes</a>
                </li>
                <li onClick = {() => setShowNav(false)}>
                    <a href="#">Farmacovigilancia</a>
                </li>
                <li onClick = {() => setShowNav(false)}>
                    <a href="#">Bog La Santé</a>
                </li><li onClick = {() => setShowNav(false)}>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            {/* <a href="" className="button-primarynavbar_btn"></a> */}
            <div className= {`navabar_menubar $ {showNav ? "bg-color : ""}`}onClick={() => setShowNav(!showNav)}>

                <FaBars/>
            </div>
            </Wrapper>


    </nav>
    
)
}

export default Navbar