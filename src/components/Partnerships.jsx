// import MerchantList from "./MerchantList/MerchantList";
import Topbar from "./Topbar/Topbar";
import Leftbar from "./Leftbar/Leftbar";
import "../components/Partnerships.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Partnerships() {
  const { id } = useParams();
  const [partnershipData, setMerchantData] = useState([]);
  const [productData, setProductData] = useState();

  useEffect(() => {
    const getMerchantData = async () => {
      const response = await axios.get("http://3.20.237.64/partnerships/3");
      setMerchantData(response.data);
      // console.log(response.data);
    };
    getMerchantData();
  }, []);

  return (
    <>
      <Topbar></Topbar>
      <div className="mainbody">
        <Leftbar></Leftbar>
        <div className="mainbody__content">
          <div className="mainbody__heading">Partnerships</div>
          <div className="mainbody__box">
            <div className="mainbody__header-container">
              <h2 className="mainbody__box-header">Active</h2>
              <Link to="/add-partnership">
                <button className="mainbody__button">Add Partner</button>
              </Link>
            </div>
            <div className="mainbody__info-container">
              <div className="mainbody__info-row1">
                <ul className="mainbody__info-list">
                  <li className="mainbody__list-item">Store</li>
                  {/* <li className="mainbody__list-item">Status</li> */}
                </ul>
                <ul className="mainbody__product-list">
                  {partnershipData?.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="mainbody__product-item">
                        <img className="mainbody__logo" src="http://3.20.237.64:80/public/logo.png"></img>
                        <p className="mainbody__itemname">{item.name}</p>
                        <p className="mainbody__itemstatus">{item.status}</p>
                        <p className="mainbody__button mainbody__linkbtn">See Performance</p>
                      </li>
                    </React.Fragment>
                  ))}
                  {/* {merchantData.map((item, index) => ( */}
                  {/* <li className="mainbody__product-item" key={index}> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Partnerships;
