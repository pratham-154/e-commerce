"use client";
import React, { useEffect, useState } from "react";
import { getApi } from "../../../helpers/General";
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
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Product from "@/app/components/product";
import Filter from "@/app/components/filter";
import ProductGrid from "@/app/components/product-grid";
import { useSearchParams } from "next/navigation";

const ProductListing = () => {
  const searchParams = useSearchParams();

  const productSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sortSelect = [
    {
      title: "Product Category (A-Z)",
      sort: "category_id.title",
      direction: "asc",
    },
    {
      title: "Product Category (Z-A)",
      sort: "category_id.title",
      direction: "desc",
    },
    {
      title: "Product Title (A-Z)",
      sort: "title",
      direction: "asc",
    },
    {
      title: "Product Title (Z-A)",
      sort: "title",
      direction: "desc",
    },
    {
      title: "Product Price (Low-High)",
      sort: "price",
      direction: "asc",
    },
    {
      title: "Product Price (High-Low)",
      sort: "price",
      direction: "desc",
    },
  ];
  const [categories, setCategories] = useState([]);

  const defaultProduct = {
    data: [],
    totalCount: "",
    totalPages: "",
  };

  const defaultFilter = {
    stockSelect: searchParams.get("stock") || "",
    selectedCategories: searchParams.get("categories")
      ? searchParams.get("categories") &&
        searchParams.get("categories").split(",")
      : [],
    onSale: searchParams.get("onSale") === "1" ? true : false,
    sort: searchParams.get("sort") || "",
    direction: searchParams.get("direction") || "",
    limit: parseInt(searchParams.get("limit")) || 9,
    page: parseInt(searchParams.get("page")) || 1,
  };

  const [gridList, setGridList] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [productData, setProductData] = useState(defaultProduct);
  const [filterData, setFilterData] = useState(defaultFilter);
  const [categoriesMap, setCategoriesMap] = useState({});

  let getCategories = async () => {
    let resp = await getApi("product-category/index");

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setCategories(data.data);
      }
    }
  };

  const updateUrl = () => {
    const params = new URLSearchParams();
    if (filterData.stockSelect) params.set("stock", filterData.stockSelect);
    if (filterData.selectedCategories.length)
      params.set("categories", filterData.selectedCategories.join(","));
    if (filterData.onSale) params.set("onSale", filterData.onSale ? 1 : 0);
    if (filterData.sort) params.set("sort", filterData.sort);
    if (filterData.direction) params.set("direction", filterData.direction);
    params.set("limit", filterData.limit);
    params.set("page", filterData.page);

    const queryString = `?${params.toString()}`;
    window.history.replaceState(null, "", queryString);
  };

  let getProductData = async () => {
    let resp = await getApi("product/index", {
      params: {
        stock: filterData.stockSelect,
        category_id: filterData.selectedCategories,
        sale: filterData.onSale ? 1 : 0,
        sort: filterData.sort,
        direction: filterData.direction,
        limit: filterData.limit,
        page: filterData.page,
      },
    });

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setProductData({
          data: data.data,
          totalCount: data.totalCount,
          totalPages: data.totalPages,
        });
      }
    }
  };

  const handleClick = (chipType, chipData) => {
    console.log(`${chipType} chip clicked: `, chipData);
  };

  const handleDelete = (chipType, chipData) => {
    setFilterData((prevState) => {
      switch (chipType) {
        case "stockSelect":
          return { ...prevState, stockSelect: "" };

        case "category":
          return {
            ...prevState,
            selectedCategories: prevState.selectedCategories.filter(
              (category) => category._id !== chipData._id
            ),
          };

        case "onSale":
          return { ...prevState, onSale: "" };

        default:
          return prevState;
      }
    });
  };

  const handleProductChange = (product) => {
    setFilterData({ ...filterData, limit: product });
  };

  const handleSortChange = (index) => {
    setFilterData({
      ...filterData,
      sort: sortSelect[index].sort,
      direction: sortSelect[index].direction,
    });
  };

  const handlePageChange = (e, value) => {
    setFilterData({ ...filterData, page: value });
  };

  const sortIndex = sortSelect.findIndex(
    (cat) =>
      cat.sort === filterData.sort && cat.direction === filterData.direction
  );

  const filter_btn = showComponent
    ? "filter_btn active"
    : "filter_btn inactive";

  const widgets_icon = gridList
    ? "widgets_icon active"
    : "widgets_icon inactive";
  const list_icon = gridList ? "list_icon inactive" : "list_icon active";

  useEffect(() => {
    let tempMap = {};
    categories.forEach((item) => {
      tempMap[item._id] = item.title;
    });
    setCategoriesMap(tempMap);
  }, [categories]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    updateUrl();
    getProductData();
  }, [filterData]);

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
                  Total number of Products (
                  <span>{productData.totalCount}</span>)
                </h3>
                <div className="page_dropdown_section">
                  <span>Page</span>
                  <Select
                    id="demo-simple-select"
                    value={filterData.limit}
                    onChange={(e) => handleProductChange(e.target.value)}
                  >
                    {productSelect.map((product, index) => (
                      <MenuItem key={index} value={product}>
                        {product}
                      </MenuItem>
                    ))}
                  </Select>
                  <span>of 9</span>
                </div>
              </div>
            </Grid>
          </Grid>
          {showComponent && (
            <Filter
              setShowComponent={setShowComponent}
              filterData={filterData}
              setFilterData={setFilterData}
              categories={categories}
            />
          )}
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
                    value={sortIndex !== -1 ? sortIndex : 0}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    {sortSelect.map((sort, index) => (
                      <MenuItem key={index} value={index}>
                        {sort.title}
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
                  {filterData.stockSelect && (
                    <Chip
                      label="In Stock"
                      onClick={() => handleClick("stockSelect")}
                      onDelete={() => handleDelete("stockSelect")}
                      deleteIcon={<CloseRoundedIcon />}
                      variant="outlined"
                    />
                  )}
                  {filterData.selectedCategories.map((category) => (
                    <Chip
                      key={category}
                      label={categoriesMap && categoriesMap[category]}
                      onClick={() => handleClick("category", category)}
                      onDelete={() => handleDelete("category", category)}
                      deleteIcon={<CloseRoundedIcon />}
                      variant="outlined"
                    />
                  ))}
                  {filterData.onSale && (
                    <Chip
                      label="On Sale"
                      onClick={() => handleClick("onSale")}
                      onDelete={() => handleDelete("onSale")}
                      deleteIcon={<CloseRoundedIcon />}
                      variant="outlined"
                    />
                  )}
                </div>
              </div>
              <div className="product_list">
                {gridList ? (
                  <Grid container spacing={2}>
                    {productData.data.map((item, index) => (
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
                          sale={item.sale}
                          product={item.category_id.title}
                          image={item.image}
                          heading={item.title}
                          description={item.short_description}
                          stock={item.stock}
                          high_price={item.price}
                          low_price={item.discount}
                          slug={item.slug}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Grid container spacing={2}>
                    {productData.data.map((item, index) => (
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
                          sale={item.sale}
                          image={item.image}
                          product={item.category_id.title}
                          heading={item.title}
                          description={item.short_description}
                          stock={item.stock}
                          high_price={item.price}
                          low_price={item.discount}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </div>
              <div className="pagenation">
                <Pagination
                  count={productData.totalPages}
                  variant="outlined"
                  onChange={handlePageChange}
                  page={filterData.page}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProductListing;
