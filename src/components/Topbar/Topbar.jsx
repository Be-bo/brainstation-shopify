import logo from "../../assets/logo/shopifyLogo.svg";
import notificationIcon from "../../assets/icons/notificationIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import profileButton from "../../assets/icons/mystoreButton.svg";

import "./Topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <img className="topbar__logo" src={logo} alt="shopify logo"></img>
      <div className="topbar__searchbox">
        <img
          className="topbar__searchicon"
          alt="search icon"
          src={searchIcon}
        ></img>
        <input
          type="search"
          placeholder="Search"
          className="topbar__searchinput"
        ></input>
      </div>
      <img
        className="topbar__notificationicon"
        alt="notification icon"
        src={notificationIcon}
      ></img>
      <img
        className="topbar__profileButton"
        alt="profile button"
        src={profileButton}
      ></img>
    </div>
  );
}

export default Topbar;
