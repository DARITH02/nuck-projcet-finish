import { AlignJustify, ChevronDown, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [IsOpneMenuList, SetIsOpenMenuList] = useState(false);

  const [IsShowAboutList, SetIsShoAboutList] = useState(false);
  function heandlAbout() {
    SetIsShoAboutList(!IsShowAboutList);
  }
  return (
    <div className="nav-bar container-width">
      <ul>
        <li className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo university" />
          </Link>
        </li>
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"academic"}>
            ACADEMIC <ChevronDown size={18} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"aboutus"}>
            ABOUT US <ChevronDown size={18} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"contactus"}>CONTACT US</NavLink>
        </li>
      </ul>
      <NavLink to={"/"}>
        <img className="logo-sm" src={logo} alt="Logo university" />
      </NavLink>
      <span className="icon" onClick={() => SetIsOpenMenuList(!IsOpneMenuList)}>
        {IsOpneMenuList ? <X size={36} /> : <AlignJustify size={36} />}
      </span>
      <div className={IsOpneMenuList ? "slid-menu active" : "slid-menu"}>
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"academic"}>
              ACADEMIC <ChevronDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={"aboutus"}>
              ABOUT US <ChevronDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={"contactus"}>CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
