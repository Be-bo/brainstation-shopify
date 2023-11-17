import "./Partnerships.scss";
import Logo from "../../src/Shopify_logo_wordmark.png";
import { LOGICAL_OPERATORS } from "@babel/types";
import sideBar from "../../src/Screenshot (24).png";

function Partnerships() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={Logo} alt="shopify logo" />
        <input className="search" type="text" placeholder="Search" />
        <button className="userprofile">My Store</button>
      </div>
      <div className="main-container">
        <div className="sidebar">
          <img className="sidebar__img" src={sideBar} alt="sidebar  image" />
        </div>
        <div className="content">
          <div className="content__sub">
            <h1 className="header">Add New Partnership Page </h1>
          </div>
          <div className="content__sub2">
            <input
              className="content__search"
              type="text"
              placeholder="Search"
            />
            <h2 className="content__header">Suggested Merchant</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partnerships;
