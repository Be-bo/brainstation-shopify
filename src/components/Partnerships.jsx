// import MerchantList from "./MerchantList/MerchantList";
import Topbar from "./Topbar/Topbar";
import Leftbar from "./Leftbar/Leftbar";
import "../components/Partnerships.scss";

function Partnerships() {
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
              <button className="mainbody__button">Add Partner</button>
            </div>
            <div className="mainbody__info-container">
              <div className="mainbody__info-row1">
                <ul className="mainbody__info-list">
                  <li className="mainbody__list-item">Store</li>
                  <li className="mainbody__list-item">Product</li>
                  <li className="mainbody__list-item">Product Type</li>
                  <li className="mainbody__list-item">Status</li>
                </ul>
                <ul className="mainbody__product-list">
                  <li className="mainbody__product-item">Store Name</li>
                  <li className="mainbody__product-item">Products</li>
                  <li className="mainbody__product-item">Type</li>
                  <li className="mainbody__product-item">jjsjsjs</li>
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
