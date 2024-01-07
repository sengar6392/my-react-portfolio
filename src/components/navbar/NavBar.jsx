/* eslint-disable react/prop-types */
import { Mail, Person } from "@mui/icons-material";
import "./navbar.scss";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SHIV@M$ENG@R
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>6392926094</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>shivamsengar995627@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
