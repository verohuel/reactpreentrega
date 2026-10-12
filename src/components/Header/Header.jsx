
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./Header.css";
import { Nav } from "../nav/nav";

export const Header = () => {
    return (
    <   header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="logo Tecno" />
                    <span>Tecno</span>
                </Link>
            </div>
            <Nav />
        </header>
    );
};
