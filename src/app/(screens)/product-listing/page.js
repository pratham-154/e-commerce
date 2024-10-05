"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../../../public/sass/pages/product_listing.scss";
import {
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import TopDesign from "../../../../public/images/product_top_design.png";
import BottomDesign from "../../../../public/images/product_bottom_design.png";
import RightDesign from "../../../../public/images/product_right_design.png";
import OnSale from "../../../../public/images/on_sale.png";
import HairExtension from "../../../../public/images/hair_extension.png";
import JudaBun from "../../../../public/images/juda_bun.png";
import HairWigBrown from "../../../../public/images/hair_wig_brown.png";
import HairWig from "../../../../public/images/hair_wig.png";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Product from "@/app/components/product";
import Filter from "@/app/components/filter";
import ProductGrid from "@/app/components/product-grid";

const ProductListing = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categories = [
    "Product Category (A-Z)",
    "Product Category (Z-A)",
    "Product Title (A-Z)",
    "Product Title (Z-A)",
    "Product Price (Low-High)",
    "Product Price (Low-High)",
  ];
  const products = [
    {
      sale: OnSale,
      product: "Hair Product",
      image: JudaBun,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: HairExtension,
      heading: "Clip Ear to Ear Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: HairWigBrown,
      heading: "Full Lace Hair Volumizer Wig Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      product: "Hair Product",
      image: HairExtension,
      heading: "Clip Ear to Ear Volumizer",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "Out of Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: JudaBun,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: HairWigBrown,
      heading: "Full Lace Hair Volumizer Wig Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: HairWigBrown,
      heading: "Full Lace Hair Volumizer Wig Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      sale: OnSale,
      product: "Hair Product",
      image: HairWig,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      product: "Hair Product",
      image: JudaBun,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
  ];

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("Product Category (A-Z)");
  const [gridList, setGridList] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  const handleChange = (value) => {
    setPage(value);
    setCategory(value);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const filter_btn = showComponent
    ? "filter_btn active"
    : "filter_btn inactive";

  const widgets_icon = gridList
    ? "widgets_icon active"
    : "widgets_icon inactive";
  const list_icon = gridList ? "list_icon inactive" : "list_icon active";

  return (
    <div className="main_product_listing_section">
      <div
        className="product_listing_section"
        style={{
          backgroundImage: `linear-gradient(82.69deg, #000000 -16.2%, rgba(0, 0, 0, 0.0432178) 73.5%, rgba(0, 0, 0, 0) 100.98%), url(../images/products.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="product_listing_text">
                <h1>Products</h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h6>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="total_product_section">
        <div className="top_design">
          <Image
            src={TopDesign}
            alt="top_design"
            width={580}
            height={1100}
            priority={false}
          />
        </div>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="total_product_text">
                <h3>
                  Total number of Products (<span>6</span>)
                </h3>
                <div className="page_dropdown_section">
                  <span>Page</span>
                  <Select
                    id="demo-simple-select"
                    value={page}
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    {pages.map((page, index) => (
                      <MenuItem key={index} value={page}>
                        {page}
                      </MenuItem>
                    ))}
                  </Select>
                  <span>of 10</span>
                </div>
              </div>
            </Grid>
          </Grid>
          {showComponent && <Filter setShowComponent={setShowComponent} />}
        </Container>
      </div>
      <div className="product_section">
        <div className="bottom_design">
          <Image
            src={BottomDesign}
            alt="bottom_design"
            width={380}
            height={750}
          />
        </div>
        <div className="right_design">
          <Image
            src={RightDesign}
            alt="right_design"
            width={370}
            height={770}
          />
        </div>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="sort_section">
                <div className="sort_select">
                  <Select
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    {categories.map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="filter_section">
                  <div
                    className={widgets_icon}
                    onClick={() => setGridList(true)}
                  >
                    {gridList ? <WidgetsIcon /> : <WidgetsOutlinedIcon />}
                  </div>
                  <div className={list_icon} onClick={() => setGridList(false)}>
                    {gridList ? <ListIcon /> : <ListIcon />}
                  </div>
                  <Button
                    variant="contained"
                    className={filter_btn}
                    onClick={() => setShowComponent(!showComponent)}
                  >
                    Filter
                  </Button>
                  {/* {showComponent && <Filter />} */}
                </div>
              </div>
              <div className="product_chips_parent">
                <div className="product_chips">
                  <Chip
                    label="In Stock"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<CloseRoundedIcon />}
                    variant="outlined"
                  />
                  <Chip
                    label="Min. $60 - $600"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<CloseRoundedIcon />}
                    variant="outlined"
                  />
                  <Chip
                    label="On Sale"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<CloseRoundedIcon />}
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="product_list">
                {gridList ? (
                  <Grid container spacing={2}>
                    {products.map((product, index) => (
                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={6}
                        xs={12}
                        key={index}
                      >
                        <Product
                          sale={product.sale}
                          product={product.product}
                          image={product.image}
                          heading={product.heading}
                          description={product.description}
                          stock={product.stock}
                          high_price={product.high_price}
                          low_price={product.low_price}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Grid container spacing={2}>
                    {products.map((product, index) => (
                      <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        key={index}
                      >
                        <ProductGrid
                          sale={product.sale}
                          image={product.image}
                          product={product.product}
                          heading={product.heading}
                          description={product.description}
                          stock={product.stock}
                          high_price={product.high_price}
                          low_price={product.low_price}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </div>
              <div className="pagenation">
                <Pagination count={10} variant="outlined" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProductListing;
