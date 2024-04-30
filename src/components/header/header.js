import "./header.scss";
import homeIcon from "../../assets/homeIcon.svg";

const header = () => {
   return (
      <div className="header">
         <a href="/" className="header__logo">
            <img src={homeIcon} className="homeIcon" alt="home icon" />
         </a>
         <div className="header__navbar">
            <a href="/" className="navbarItem">
               Compare
            </a>
            <a href="/" className="navbarItem">
               Login
            </a>
         </div>
      </div>
   );
};

export default header;
