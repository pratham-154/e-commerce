"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import JudaBun from "../../../../../public/images/juda_bun.png";
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import OnSale from "../../../../../public/images/on_sale.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Sidebar from "@/app/components/sidebar";
import { useState } from "react";

const MyWishlist = () => {
  const sort = ["Price", "Popularity", "New Arrival", "Customer Review"];

  const products = [
    {
      image: JudaBun,
      product: "Hair Product",
      stock: "Out of Stock",
      heading: "Messy Juda Bun Extension Lorem ipsum dolor sit ",
      low_price: "$150",
      high_price: "$200",
      delivered: "Delivered on 13th May, 2023",
      shipping: "Delivered",
    },
    {
      image: JudaBun,
      sale: OnSale,
      product: "Hair Product",
      stock: "In Stock",
      heading: "Messy Juda Bun Extension Lorem ipsum dolor sit ",
      low_price: "$150",
      high_price: "$200",
      delivered: "Delivered on 13th May, 2023",
      shipping: "Shipped",
    },
  ];

  const [sortBy, setSortBy] = useState("Price");

  const [isActive, setIsActive] = useState(true);

  const heart_icon = isActive ? "heart_icon active" : "heart_icon inactive";

  const handleChange = (value) => {
    setSortBy(value);
  };

  return (
    <div className="account_section">
      <div className="account_top_design">
        <Image src={TopDesign} alt="top_design" width={450} height={890} />
      </div>
      <div className="account_bottom_design">
        <Image
          src={BottomDesign}
          alt="bottom_design"
          width={470}
          height={920}
        />
      </div>
      <div className="account_parent">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="account_heading">
                <KeyboardBackspaceIcon />
                <h1>My Account</h1>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="account_box_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="account_box_parent">
                <div className="account_box_child">
                  <div className="sidebar">
                    <Sidebar />
                  </div>
                  <div className="my_profile_parent my_order_parent my_wishlist_parent">
                    <div className="my_order_heading_parent">
                      <div className="my_order_heading">
                        <h3>
                          My Wishlist (<span>6</span>)
                        </h3>
                      </div>
                      <div className="filter_parent">
                        <div className="filter_button">
                          <Button variant="contained">Filter</Button>
                        </div>
                        <div className="sort_select">
                          <Select
                            id="demo-simple-select"
                            value={sortBy}
                            onChange={(e) => handleChange(e.target.value)}
                          >
                            {sort.map((sorts, index) => (
                              <MenuItem key={index} value={sorts}>
                                {sorts}
                              </MenuItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="ordergrid_parent">
                      {products.map((product) => (
                        <div className="ordergrid_child">
                          <div className="ordergrid_image">
                            <Image
                              src={product.image}
                              alt="order_image"
                              width={120}
                              height={110}
                            />
                            {product.sale && (
                              <div className="on_sale_image">
                                <Image
                                  src={product.sale}
                                  alt="on_sale_image"
                                  width={120}
                                  height={40}
                                />
                              </div>
                            )}
                            {product.stock === "Out of Stock" && (
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
                            )}
                          </div>
                          <div className="ordergrid_text_parent">
                            <div className="ordergrid_text">
                              <div className="product_tag_parent">
                                <div className="product_tag">
                                  <span>{product.product}</span>
                                </div>
                                <div className="stock_tag">
                                  <span
                                    className={
                                      product.stock === "Out of Stock"
                                        ? "out_stock"
                                        : "out_stock in_stock"
                                    }
                                  >
                                    {product.stock}
                                  </span>
                                </div>
                              </div>
                              <div className="product_description">
                                <h4>{product.heading}</h4>
                              </div>
                              <div className="product_price_parent">
                                <div className="product_price_child">
                                  <div className="product_price">
                                    <span className="low_price">
                                      {product.low_price}
                                    </span>
                                    <span className="high_price">
                                      {product.high_price}
                                    </span>
                                  </div>
                                  <div className="product_shipping">
                                    <LocalShippingOutlinedIcon className="icon" />
                                    <h6>{product.delivered}</h6>
                                  </div>
                                </div>
                                <div className="move_cart_parent">
                                  <div className="move_cart">
                                    <Button variant="outlined">
                                      Move to Cart
                                    </Button>
                                  </div>
                                  <div className="delete_icon">
                                    <DeleteIcon />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pagenation">
                      <Pagination count={10} variant="outlined" />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default MyWishlist;
