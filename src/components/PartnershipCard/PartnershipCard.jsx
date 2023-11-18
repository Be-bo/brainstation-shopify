import "./PartnershipCard.scss";
import leftBlackArrow from "../../assets/images/leftarrow.jpg";
import rightBlackArrow from "../../assets/images/rightarrow.jpg";
import bag from "../../assets/images/product.png";
import axios from 'axios';
import { useEffect, useState } from "react";

const PartnershipCard = ({merchant}) => {
  const [products, setProducts] = useState();
  const [currentIndex, setCurrentIndex] = useState(parseInt(1));

  useEffect(() =>{
    async function fetchData(){
      const productsResponse = await axios.get(`http://3.20.237.64:80/merchant/products/${merchant.merchant_id}`);
      setProducts(productsResponse.data);
    }
    fetchData();
  });

  const addPartner = async () => {
    let newPartnership = {
      "status": "Pending",
      "name": `New Partnership with ${merchant.name}`,
      "merchant_ids": [3, merchant.merchant_id]
    }
    const response = await axios.post("http://3.20.237.64:80/partnerships", newPartnership);
    console.log(response);
  }

  const shiftLeft = () =>{
    let temp = currentIndex - 1;
    if(currentIndex < 1) temp = 0;
    setCurrentIndex(temp);
    console.log(temp);
  }

  const shiftRight = () =>{
    let temp = currentIndex + 1;
    if(currentIndex > 1) temp = 2;
    setCurrentIndex(temp);
    console.log(temp);
  }

  return (
    <section className="partnership-card">
      <div className="partnership-card__wrapper">
        <div className="partnership-card__container-left">
          <div className="partnership-card__img-container">
            <img className="partnership-card__img" src={merchant?.logo} alt="Logo" />
          </div>
          <div className="partnership-card__name-container">
            <p className="partnership-card__name">{merchant?.name}</p>
            <p className="partnership-card__description">{merchant?.description}</p>
          </div>
        </div>
        <div className="partnership-card__container-right">
          <div className="partnership-card__background">
            <div className="partnership-card__arrow-container">
              <img
                className="partnership-card__arrow"
                src={leftBlackArrow}
                alt="leftArrow"
                onClick={()=>shiftLeft()}
              />
            </div>
            <div className="partnership-card__product-container">
              <img
                className="partnership-card__product-img"
                src={products && products.length > currentIndex ? products[currentIndex]?.image : bag}
                alt="product img"
              />
            </div>
            <div className="partnership-card__description-container">
              <p className="partnership-card__productName">{products && products.length > currentIndex ? products[currentIndex]?.name : "Product Name"}</p>
              <p className="partnership-card__description">
                {products && products.length > currentIndex ? products[currentIndex]?.description : "Product Description"}
              </p>
              {/* <p className="partnership-card__categoryButton">Category</p> */}
            </div>
            <div className="partnership-card__arrow-container">
              <img
                className="partnership-card__arrow"
                src={rightBlackArrow}
                alt="leftArrow"
                onClick={()=>shiftRight()}
              />
            </div>
          </div>
        </div>

        <div className="partnership-card__btn-container">
          <button className="partnership-card__btn" onClick={()=>addPartner()}>Offer Partnership</button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCard;
