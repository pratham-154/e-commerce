"use client";
import Image from "next/image";
import "../../../public/sass/pages/product_grid.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductGrid = (props) => {
  const router = useRouter();
  let imageUrl = process.env.mediaUrl;

  const handleClick = () => {
    router.push(`/product/${props.slug}`);
  };

  return (
    <div className="productgrid_parent">
      {props && props.sale && (
        <div className="on_sale_tag">
          <Image
            src={`${imageUrl + props.sale}`}
            alt="on_sale"
            width={115}
            height={40}
          />
        </div>
      )}
      <div className="product_image">
        <Image
          src={`${imageUrl}${props.image[0]}`}
          alt="product_image"
          width={240}
          height={160}
          priority={false}
        />
      </div>
      <div className="productgrid_text">
        <div className="productgrid_tags">
          <div className="hair_product_parent">
            <span className="hair_product">{props.product}</span>
          </div>
          <div className="stock_parent">
            <span
              className={
                props && props.stock === "In Stock"
                  ? "in_stock_text"
                  : "out_stock_text"
              }
            >
              {props.stock}
            </span>
          </div>
        </div>
        <div className="product_description">
          <div className="product_text">
            <h5 onClick={handleClick}>{props.heading}</h5>
            <p>{props.description}</p>
            <div className="price_parent">
              <span className="low_price">{`$${props.low_price}`}</span>
              <span className="high_price">{`$${props.high_price}`}</span>
            </div>
          </div>
          <div className="add_cart">
            <Button variant="outlined">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
