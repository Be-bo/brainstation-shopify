import React from "react";
import PartnershipCard from "./PartnershipCard/PartnershipCard";
import BasicSlider from "./slide-test/slide";
// import merchantsData from "../Data/merchants.json";
import productsData from "../Data/products.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AddPartnerships() {
  //merchant data

  const { id } = useParams();
  const [merchantData, setMerchantData] = useState([]);
  const [productData, setProductData] = useState(productsData);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    // merchat data
    const getMerchantsData = async () => {
      const response = await axios.get("http://3.20.237.64/merchants");
      setMerchantData(response.data);
      console.log(response.data);
    };
    getMerchantsData();
  }, []);

  useEffect(() => {
    // merchat data
    const getProductData = async () => {
      const response = await axios.get(
        `http://3.20.237.64/merchant/products/${id}`
      );
      setProductData(response.data);
      console.log(response.data);
    };
    getProductData();
  }, []);

  return (
    <div>
      <PartnershipCard />
      {merchantData.map((merchant, index) => {
        const suggestedMerchant = merchantData.filter((merchant) => {
          return merchant.merchant_id === merchant.pertnership_suggestions;
        });
        // const merchantProduct = productData.filter((product) => {
        //   return product.merchant_id === merchant.merchant_id;
        // });

        return (
          <BasicSlider key={index} merchant={merchant} products={productData} />
        );
      })}
    </div>
  );
}

export default AddPartnerships;
