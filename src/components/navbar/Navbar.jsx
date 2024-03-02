import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper.scss";
import Logo from "../../assets/logo.svg";
import {FaBars} from "react-icons/fa";
import {useState} from "react";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <nav className="navbar">
        <Wrapper className="navbar_container">
            <a href="#" className="navbar_logo">
                <img src={Logo} alt="" />
            </a>
        </Wrapper>

    </nav>
    
)
}

export default Navbar