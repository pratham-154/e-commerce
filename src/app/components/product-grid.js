"use client";
import Image from "next/image";
import "../../../public/sass/pages/product_grid.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Button } from "@mui/material";
import { useState } from "react";

const ProductGrid = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="productgrid_parent">
      {props && props.sale && (
        <div className="on_sale_tag">
          <Image src={props.sale} alt="on_sale" width={115} height={40} />
        </div>
      )}
      <div className="product_image">
        <Image
          src={props.image}
          alt="product_image"
          width={240}
          height={160}
          priority={false}
        />
        <div className="heart_icon">
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
            <h5>{props.heading}</h5>
            <h6>{props.description}</h6>
            <div className="price_parent">
              <span className="low_price">{props.low_price}</span>
              <span className="high_price">{props.high_price}</span>
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
