import "./PartnershipCard.scss";
import leftBlackArrow from "../../Assets/images/leftarrow.jpg";
import rightBlackArrow from "../../Assets/images/rightarrow.jpg";

const PartnershipCard = () => {
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
            <p className="partnership-card__text">Shopify Partners name</p>
            <p className="partnership-card__text">Description</p>
          </div>
        </div>
        <div className="partnership-card__container-right">
          <div className="partnership-card__arrow-container">
            <img
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
            <p className="partnership-card__text">Product name</p>
            <p className="partnership-card__text">Product description</p>
            <p className="partnership-card__text partnership-card__text--category">
              Category
            </p>
          </div>
          <div className="partnership-card__arrow-container">
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
