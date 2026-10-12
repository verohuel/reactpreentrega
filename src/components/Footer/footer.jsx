import "./Footer.css";
import whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/social.png";


export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="nav-list">
          <li>
            <img src={whatsapp} alt="whatsapp" className="icon-whatsapp" />
          </li>
          <li>
            I
            <img src={Instagram} alt="instagram" className="icon-instagram" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};
