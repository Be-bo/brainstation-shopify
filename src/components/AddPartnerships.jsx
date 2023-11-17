import React from "react";
// import PartnershipCard from "./PartnershipCard/PartnershipCard";
import Topbar from "./Topbar/Topbar";
import Leftbar from "./Leftbar/Leftbar";

import "../components/AddPartnerships.scss";

function AddPartnerships() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="mainbody">
        <Leftbar></Leftbar>
        <div className="mainbody__content">
          <div className="mainbody__heading">Add New Partners</div>
          <div className="mainbody__box"></div>
        </div>
      </div>
    </div>
  );
}

export default AddPartnerships;
