import React from "react";
import Topbar from "./Topbar/Topbar";
import Leftbar from "./Leftbar/Leftbar";
import PartnershipCard from "./PartnershipCard/PartnershipCard";
import searchIcon from "../assets/icons/searchIcon.svg";
import filterIcon from "../assets/icons/filterIcon.svg";
import axios from "axios";
import "../components/AddPartnerships.scss";
import backButton from "../assets/icons/backbutton.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AddPartnerships() {
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [merchants, setMerchants] = useState();
  const [currentMerchants, setCurrentMerchants] = useState();
  const [selectedMerchant, setSelectedMerchant] = useState();

  // const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const selectedMerchantResponse = await axios.get(
        "http://3.20.237.64:80/merchants/3"
      );
      setSelectedMerchant(selectedMerchantResponse.data);

      const categoryResponse = await axios.get(
        "http://3.20.237.64:80/categories"
      );
      setCategories(categoryResponse.data);

      const merchantsResponse = await axios.get(
        "http://3.20.237.64:80/merchants"
      );
      setMerchants(merchantsResponse.data);

      let temp = [];
      for (
        let i = 0;
        i < selectedMerchantResponse.data.partnership_suggestions.length;
        i++
      ) {
        temp.push(
          merchantsResponse.data[
            selectedMerchantResponse.data.partnership_suggestions[i]
          ]
        );
      }

      setCurrentMerchants(temp);
    }
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    let temp = [];
    for (let i = 0; i < merchants.length; i++) {
      if (merchants[i].categories.includes(value)) temp.push(merchants[i]);
    }
    setCurrentMerchants(temp);
  };

  return (
    <div>
      <Topbar></Topbar>
      <div className="mainbody">
        <Leftbar></Leftbar>
        <div className="mainbody__content">
          <div className="mainbody__topgroup">
            <Link to="/">
              <img
                src={backButton}
                alt="back button"
                className="mainbody__backbutton"
              ></img>
            </Link>
            <div className="mainbody__heading">Add New Partners</div>
          </div>
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
              {/* <img
                className="mainbody__filtericon"
                alt="filter icon"
                src={filterIcon}
              ></img> */}

              <select
                className="newInv__item-input"
                value={selectedCategory}
                name="category"
                onChange={handleCategoryChange}
              >
                {categories?.map((category, index) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="mainbody__title">Suggested Merchant</div>
            {currentMerchants?.map((merchant, index) => (
              <PartnershipCard merchant={merchant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPartnerships;
