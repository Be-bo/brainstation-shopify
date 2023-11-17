import "./PartnershipCard.scss";
import leftBlackArrow from "../../assets/images/leftarrow.jpg";
import rightBlackArrow from "../../assets/images/rightarrow.jpg";

const PartnershipCard = ({merchant}) => {
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
            <img className="partnership-card__img" src={merchant.logo} alt="Logo" />
          </div>
          <div className="partnership-card__name-container">
            <p className="partnership-card__name">{merchant.name}</p>
            <p className="partnership-card__description">{merchant.description}</p>
          </div>
        </div>
        <div className="partnership-card__container-right">
          <div className="partnership-card__background">
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
              <p className="partnership-card__productName">Product Name</p>
              <p className="partnership-card__description">
                product description
              </p>
              <p className="partnership-card__categoryButton">Category</p>
            </div>
            <div className="partnership-card__arrow-container">
              <img
                className="partnership-card__arrow"
                src={rightBlackArrow}
                alt="leftArrow"
              />
            </div>
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
