"use client";
import Image from "next/image";
import "../../../public/sass/pages/product.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Product = (props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/product-details");
  };

  const [isActive, setIsActive] = useState(false);

  const heart_icon = isActive ? "heart_icon active" : "heart_icon inactive";

  return (
    <div className="product_card">
      <div className="product_card_effect">
        <Button variant="contained" onClick={handleButtonClick}>
          Add to Cart
        </Button>
      </div>
      <div className="product_card_image">
        <Image
          src={props.image}
          alt="product_image"
          width={340}
          height={220}
          priority={false}
        />
        {props && props.sale && (
          <div className="on_sale_image">
            <Image
              src={props.sale}
              alt="on_sale_image"
              width={120}
              height={40}
            />
          </div>
        )}
        <div className={heart_icon}>
          {isActive ? (
            <FavoriteRoundedIcon
              onClick={() => {
                setIsActive(!isActive);
              }}
            />
          ) : (
            <FavoriteBorderRoundedIcon
              onClick={() => {
                setIsActive(!isActive);
              }}
            />
          )}
        </div>
      </div>
      <div className="product_card_text">
        <div className="product_text">
          <span>{props.product}</span>
        </div>
        <div className="description_text">
          <h5>{props.heading}</h5>
          <h6>{props.description}</h6>
        </div>
        <div className="product_bottom_text">
          <span
            className={
              props && props.stock === "In Stock"
                ? "in_stock_text"
                : "out_stock_text"
            }
          >
            {props.stock}
          </span>
          <div className="price_text">
            <span className="high_price">{props.high_price}</span>
            <span className="low_price">{props.low_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
