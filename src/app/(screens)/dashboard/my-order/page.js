"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import JudaBun from "../../../../../public/images/juda_bun.png";
import HairExtension from "../../../../../public/images/hair_extension.png";
import HairWig from "../../../../../public/images/hair_wig.png";
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
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Sidebar from "@/app/components/sidebar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MyOrder = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/dashboard/order-details");
  };

  const sort = ["Price", "Popularity", "New Arrival", "Customer Review"];

  const products = [
    {
      image: JudaBun,
      heading: "Messy Juda Bun Extension",
      description: "Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....",
      low_price: "$150",
      high_price: "$200",
      ordered: "Ordered on 13th May,2023",
      delivered: "Delivered on 13th May, 2023",
      shipping: "Delivered",
    },
    {
      image: HairExtension,
      heading: "Messy Juda Bun Extension",
      description: "Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....",
      low_price: "$150",
      high_price: "$200",
      ordered: "Ordered on 13th May,2023",
      delivered: "Delivered on 13th May, 2023",
      shipping: "Shipped",
    },
    {
      image: HairWig,
      heading: "Messy Juda Bun Extension",
      description: "Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....",
      low_price: "$150",
      high_price: "$200",
      ordered: "Ordered on 13th May,2023",
      delivered: "Delivered on 13th May, 2023",
      shipping: "Delivered",
    },
  ];

  const [sortBy, setSortBy] = useState("Price");

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
                  <div className="my_profile_parent my_order_parent">
                    <div className="my_order_heading_parent">
                      <div className="my_order_heading">
                        <h3>
                          My Orders (<span>6</span>)
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
                              onClick={handleButtonClick}
                            />
                          </div>
                          <div className="ordergrid_text_parent">
                            <div className="ordergrid_text">
                              <div className="product_description">
                                <h4 onClick={handleButtonClick}>
                                  {product.heading}
                                </h4>
                                <h6>{product.description}</h6>
                              </div>
                              <div className="product_price">
                                <span className="low_price">
                                  {product.low_price}
                                </span>
                                <span className="high_price">
                                  {product.high_price}
                                </span>
                              </div>
                              <div className="product_shipping_parent">
                                <div className="product_shipping">
                                  <InventoryOutlinedIcon className="icon" />
                                  <h6>{product.ordered}</h6>
                                </div>
                                <div className="product_shipping">
                                  <LocalShippingOutlinedIcon className="icon shipping" />
                                  <h6>{product.delivered}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="shipping_tag">
                              <span
                                className={
                                  product.shipping === "Delivered"
                                    ? "delivered"
                                    : "shipped"
                                }
                              >
                                {product.shipping}
                              </span>
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

export default MyOrder;
