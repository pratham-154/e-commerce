import Image from "next/image";
import "../../../public/sass/pages/product_grid.scss";
import JudaBun from "../../../public/images/juda_bun.png";

const OrderGrid = () => {
  return (
    <div className="productgrid_parent ordergrid_parent">
      <div className="ordergrid_image">
        <Image src={JudaBun} alt="order_image" width={120} height={110} />
      </div>
      <div className="ordergrid_text">
        <div className="product_description">
          <h4>Messy Juda Bun Extension</h4>
          <h6>Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....</h6>
        </div>
        <div className="product_price">
          <span className="low_price">$150</span>
          <span className="high_price">$200</span>
        </div>
        <div className="product_shipping">
          <h6>Ordered on 13th May,2023</h6>
          <h6>Delivered on 13th May, 2023</h6>
        </div>
      </div>
    </div>
  );
};

export default OrderGrid;
