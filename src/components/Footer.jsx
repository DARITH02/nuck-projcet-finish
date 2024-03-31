import { Copyright, Facebook, Factory, Globe } from "lucide-react";
import location from "../assets/pic icon footer/location.png";
import phone from "../assets/pic icon footer/phone-call.png";
import telegram from "../assets/pic icon footer/telegram.png";
import wesite from "../assets/pic icon footer/website.png";
import facebook from "../assets/pic icon footer/facebook.png";
import email from "../assets/pic icon footer/email.png";
import Logo_footer from "../assets/LOGO NUCK.png";
const Footer = () => {
  return (
    <div className="footer container-width">
      <img src={Logo_footer} alt="" />
      <h2>NATIONALE UNIVERSITY OF CHEASIM KAMCHAYMEAR</h2>
      <div className="fooer-grid-1x2">
        <span className="footer-left">
          <h2>OUR ADDREES</h2>
          <p>
            National Road 8, Thnal Keng Village, Smoang Cheung
            Commune,Kamchaymear District, Prey Veng Province, CAMBODIA.
          </p>
        </span>
        <span className="footer-right">
          <h2>OUR SOCIAL MEDIA</h2>
          <ul>
            <li>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={email} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={wesite} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={location} alt="" />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Footer;
