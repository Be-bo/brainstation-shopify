import "./slide.scss";
import { useState } from "react";
import leftBlackArrow from "../../assets/images/leftarrow.jpg";
import rightBlackArrow from "../../assets/images/rightarrow.jpg";
import merchantsData from "../../Data/merchants.json";
import { useEffect } from "react";

const PartnershipCard = ({ merchant, products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //merchant data
  // console.log("props", props);

  // const [merchantData, setMerchantData] = useState(merchantsData);

  // const merchant = props.products;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };
  // const [productsData, setProductData] = useState([]);
  // //get single prodct data from backend

  // // get all productsData from Json file on frontend
  // // do I need a truth of data on ShoppingPage?
  // useEffect(() => {
  //   const getProductsData = async () => {
  //     const response = await axios.get(`http://localhost:8085/shopping`);
  //     setProductData(response.data);
  //     // setSelectedProduct(response.data[0]);
  //   };
  //   getProductsData();
  //   // console.log(productsData);
  // }, []);

  return (
    <section className="partnership-card">
      <div className="partnership-card__wrapper">
        <div className="partnership-card__container-left">
          <div className="partnership-card__img-container">
            <img className="partnership-card__img" src="" alt="Logo" />
          </div>
          <div className="partnership-card__name-container">
            <p className="partnership-card__text">{merchant.name}</p>
            <p className="partnership-card__text">{merchant.description}</p>
          </div>
        </div>
        <div className="partnership-card__container-right partnership-card__slide">
          <div className="partnership-card__arrow-container">
            <img
              onClick={prevSlide}
              className="partnership-card__arrow"
              src={leftBlackArrow}
              alt="leftArrow"
            />
          </div>
          <div className="partnership-card__product-container">
            <img
              className="partnership-card__product-img"
              src=""
              alt="product img"
            />
          </div>
          <div className="partnership-card__description-container">
            <p className="partnership-card__text">
              {products[currentSlide] ? products[currentSlide].name : null}
            </p>
            <p className="partnership-card__text">Product description</p>
            <p className="partnership-card__text partnership-card__text--category">
              Category
            </p>
          </div>
          <div
            onClick={nextSlide}
            className="partnership-card__arrow-container"
          >
            <img
              className="partnership-card__arrow"
              src={rightBlackArrow}
              alt="leftArrow"
            />
          </div>
        </div>

        <div className="partnership-card__btn-container">
          <button className="partnership-card__btn">Select</button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCard;

// <div className="partnership-card__container-right">
//   {products.map((product, index) => (
//     <div
//       key={index}
//       className={`partnership-card__slide ${index === currentSlide ? 'partnership-card__slide--visible' : ''}`}
//     >
//       <div className="partnership-card__arrow-container">
//         <img
//           onClick={prevSlide}
//           className="partnership-card__arrow"
//           src={leftBlackArrow}
//           alt="leftArrow"
//         />
//       </div>
//       <div className="partnership-card__product-container">
//         <img
//           className="partnership-card__product-img"
//           src={product.image} // 製品の画像URLを適切に設定してください
//           alt="product img"
//         />
//       </div>
//       <div className="partnership-card__description-container">
//         <p className="partnership-card__text">{product.name}</p>
//         <p className="partnership-card__text">{product.description}</p>
//         <p className="partnership-card__text partnership-card__text--category">{product.category}</p>
//       </div>
//       <div className="partnership-card__arrow-container">
//         <img
//           onClick={nextSlide}
//           className="partnership-card__arrow"
//           src={rightBlackArrow}
//           alt="rightArrow"
//         />
//       </div>
//     </div>
//   ))}
// </div>
