// import logo from "../../assets/logo/shopifyLogo.svg";
// import notificationIcon from "../../assets/icons/notificationIcon.svg";
// import searchIcon from "../../assets/icons/searchIcon.svg";
// import profileButton from "../../assets/icons/mystoreButton.svg";
import homeIcon from "../../assets/icons/Home icon.svg";
import orderIcon from "../../assets/icons/orders icon.svg";
import partnershipIcon from "../../assets/icons/partnership icon.svg";
import discountsIcon from "../../assets/icons/Discounts icon.svg";
import marketingIcon from "../../assets/icons/Marketing icon.svg";
import analyticsIcon from "../../assets/icons/Analytics icon.svg";
import contentIcon from "../../assets/icons/Content icon.svg";
import customersIcon from "../../assets/icons/Customer icon.svg";
import productsIcon from "../../assets/icons/Products icon.svg";
import arrowIcon from "../../assets/icons/arrow icon.svg";
import onlinestoreIcon from "../../assets/icons/Online store.svg";
import pointofsaleIcon from "../../assets/icons/point of sale icon.svg";
import addappsIcon from "../../assets/icons/add app icon.svg";
import "./Leftbar.scss";

function Leftbar() {
  return (
    <>
      <div className="leftbar">
        <ul className="leftbar__list1">
          <li className="leftbar__listoption">
            <img src={homeIcon} alt="home icon" className="leftbar__icon"></img>
            Home
          </li>
          <li className="leftbar__listoption">
            <img
              src={orderIcon}
              alt="order icon"
              className="leftbar__icon"
            ></img>
            Orders
          </li>
          <li className="leftbar__listoption">
            <img
              src={productsIcon}
              alt="products icon"
              className="leftbar__icon"
            ></img>
            Products
          </li>
          <li className="leftbar__listoption">
            <img
              src={customersIcon}
              alt="customer icon"
              className="leftbar__icon"
            ></img>
            Customers
          </li>
          <li className="leftbar__listoption">
            <img
              src={contentIcon}
              alt="content icon"
              className="leftbar__icon"
            ></img>
            Content
          </li>
          <li className="leftbar__listoption">
            <img
              src={analyticsIcon}
              alt="analytics icon"
              className="leftbar__icon"
            ></img>
            Analytics
          </li>
          <li className="leftbar__listoption">
            <img
              src={marketingIcon}
              alt="marketing icon"
              className="leftbar__icon"
            ></img>
            Marketing
          </li>
          <li className="leftbar__listoption">
            <img
              src={discountsIcon}
              alt="discounts icon"
              className="leftbar__icon"
            ></img>
            Discounts
          </li>
        </ul>
        <li className="leftbar__listoption partnership">
          <img
            src={partnershipIcon}
            alt="partnership icon"
            className="leftbar__icon"
          ></img>
          Partnerships
        </li>
        <ul className="leftbar__list2">
          <div className="leftbar__listtitle">
            Sales channels{" "}
            <img
              src={arrowIcon}
              alt="arrow icon"
              className="leftbar__arrow"
            ></img>
          </div>
          <li className="leftbar__list2option">
            <img
              src={onlinestoreIcon}
              alt="onlinestore icon"
              className="leftbar__icon"
            ></img>
            Online Store
          </li>
          <li className="leftbar__list2option">
            <img
              src={pointofsaleIcon}
              alt="pointofsale icon"
              className="leftbar__icon"
            ></img>
            Point of Sale
          </li>
        </ul>
        <ul className="leftbar__list3">
          <div className="leftbar__listtitle">
            Apps
            <img
              src={arrowIcon}
              alt="arrow icon"
              className="leftbar__arrow"
            ></img>
          </div>
          <li className="leftbar__list3option">
            <img
              src={addappsIcon}
              alt="add apps icon"
              className="leftbar__addappsIcon"
            ></img>
            Add apps
          </li>
        </ul>
      </div>
    </>
  );
}
export default Leftbar;

/* <div className="topbar">
<img className="topbar__logo" src={logo} alt="shopify logo"></img>
<div className="topbar__text">Unsaved collection</div>
<div className="topbar__discardbutton">Discard</div>
<div className="topbar__savebutton">Save</div>
</div> */
