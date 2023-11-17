import React from "react";
import Topbar from "./Topbar/Topbar";
import Leftbar from "./Leftbar/Leftbar";
import PartnershipCard from "./PartnershipCard/PartnershipCard";
import searchIcon from "../assets/icons/searchIcon.svg";
import filterIcon from "../assets/icons/filterIcon.svg";

import "../components/AddPartnerships.scss";

function AddPartnerships() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="mainbody">
        <Leftbar></Leftbar>
        <div className="mainbody__content">
          <div className="mainbody__heading">Add New Partners</div>
          <div className="mainbody__box">
            <div className="mainbody__searchbox">
              <div className="mainbody__searchgroup">
                <img
                  className="mainbody__searchicon"
                  alt="search icon"
                  src={searchIcon}
                ></img>
                <input
                  type="search"
                  placeholder="Search"
                  className="mainbody__searchinput"
                ></input>
              </div>
              <img
                className="mainbody__filtericon"
                alt="filter icon"
                src={filterIcon}
              ></img>
            </div>
            <div className="mainbody__title">Suggested Merchant</div>
            <PartnershipCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPartnerships;
