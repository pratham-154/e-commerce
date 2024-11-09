"use client";
import Image from "next/image";
import "../../../public/sass/pages/product.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Product = (props) => {
  const router = useRouter();
  let imageUrl = process.env.mediaUrl;

  const handleButtonClick = () => {
    router.push(`/product/${props.slug}`);
  };

  return (
    <div className="product_card">
      <div className="product_card_effect">
        <Button variant="contained" onClick={handleButtonClick}>
          Add to Cart
        </Button>
      </div>
      <div className="product_card_image">
        <Image
          src={`${imageUrl}${props.image[0]}`}
          alt="product_image"
          width={340}
          height={220}
          priority={false}
        />
        {props && props.sale && (
          <div className="on_sale_image">
            <Image
              src={`${imageUrl + props.sale}`}
              alt="on_sale_image"
              width={120}
              height={40}
            />
          </div>
        )}
      </div>
      <div className="product_card_text">
        <div className="product_text">
          <span>{props.product}</span>
        </div>
        <div className="description_text_parent">
          <h5>{props.heading}</h5>
          <p>{props.description}</p>
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
            <span className="high_price">{`$${props.high_price}`}</span>
            <span className="low_price">{`$${props.low_price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
