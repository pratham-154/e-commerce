"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import {
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sidebar from "@/app/components/sidebar";
import { useEffect, useState } from "react";
import { getApi, deleteApi } from "../../../../helpers/General";
import Filter from "@/app/components/filter";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const MyWishlist = () => {
  const searchParams = useSearchParams();

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

  const defaultData = { data: [], totalCount: 0, totalPages: 0 };

  const defaultFilter = {
    stockSelect: searchParams.get("stock") || "",
    selectedCategories: searchParams.get("categories")
      ? searchParams.get("categories") &&
        searchParams.get("categories").split(",")
      : [],
    onSale: searchParams.get("onSale") === "1" ? true : false,
    sort: searchParams.get("sort") || "",
    direction: searchParams.get("direction") || "",
    limit: parseInt(searchParams.get("limit")) || 5,
    page: parseInt(searchParams.get("page")) || 1,
  };

  const [showComponent, setShowComponent] = useState(false);
  const [pageData, setPageData] = useState(defaultData);
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
    console.log("Updating URL with filter data:", filterData);
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

  let getData = async () => {
    let resp = await getApi("user/wishlist", {
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
    console.log("resp", resp);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setPageData({
          data: data.data,
          totalCount: data.totalCount,
          totalPages: data.totalPages,
        });
      }
    }
  };

  const handleProductDelete = async (slug) => {
    let resp = await deleteApi(`user/removeLike/${slug}`);
    if (resp.status) {
      toast.success(resp.message);
      setPageData((prevData) => ({
        ...prevData,
        data: prevData.data.filter((item) => item.slug !== slug),
        totalCount: prevData.totalCount - 1,
      }));
    } else {
      toast.error(resp.message || "Failed to delete the product");
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
              (category) => category !== chipData
            ),
          };

        case "onSale":
          return { ...prevState, onSale: "" };

        default:
          return prevState;
      }
    });
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
    console.log("filterData", filterData);
    updateUrl();
    getData();
  }, [filterData]);

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
        {showComponent && (
          <Filter
            setShowComponent={setShowComponent}
            filterData={filterData}
            setFilterData={setFilterData}
            categories={categories}
          />
        )}
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
                          My Wishlist (<span>{pageData.totalCount}</span>)
                        </h3>
                      </div>
                      <div className="filter_parent">
                        <div className="filter_button">
                          <Button
                            variant="contained"
                            className={filter_btn}
                            onClick={() => setShowComponent(!showComponent)}
                          >
                            Filter
                          </Button>
                        </div>
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
                      </div>
                    </div>
                    <div className="product_chips_parent">
                      <div className="product_chips">
                        {filterData.stockSelect && (
                          <Chip
                            label={`${filterData.stockSelect}`}
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
                    <div className="ordergrid_parent">
                      {pageData.data.map((data, index) => (
                        <div className="ordergrid_child" key={index}>
                          <div className="ordergrid_image">
                            <Image
                              src={data.image[0]}
                              alt="order_image"
                              width={120}
                              height={110}
                            />
                            {data.sale && (
                              <div className="on_sale_image">
                                <Image
                                  src={data.sale}
                                  alt="on_sale_image"
                                  width={120}
                                  height={40}
                                />
                              </div>
                            )}
                            {data.status === 1 && (
                              <div className="heart_icon">
                                <FavoriteRoundedIcon />
                              </div>
                            )}
                          </div>
                          <div className="ordergrid_text_parent">
                            <div className="ordergrid_text">
                              <div className="product_tag_parent">
                                <div className="product_tag">
                                  <span>{data.category_id.title}</span>
                                </div>
                                <div className="stock_tag">
                                  <span
                                    className={
                                      data.stock === "Out Stock"
                                        ? "out_stock"
                                        : "out_stock in_stock"
                                    }
                                  >
                                    {data.stock}
                                  </span>
                                </div>
                              </div>
                              <div className="product_description">
                                <h4>{data.title}</h4>
                              </div>
                              <div className="product_price_parent">
                                <div className="product_price_child">
                                  <div className="product_price">
                                    <span className="low_price">
                                      {`$${data.discount}`}
                                    </span>
                                    <span className="high_price">
                                      {`$${data.price}`}
                                    </span>
                                  </div>
                                  {/* <div className="product_shipping">
                                    <LocalShippingOutlinedIcon className="icon" />
                                    <h6>{data.delivered}</h6>
                                  </div> */}
                                </div>
                                <div className="move_cart_parent">
                                  {/* <div className="move_cart">
                                    <Button variant="outlined">
                                      Move to Cart
                                    </Button>
                                  </div> */}
                                  <div className="delete_icon">
                                    <DeleteIcon
                                      onClick={() =>
                                        handleProductDelete(data.slug)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pagenation">
                      <Pagination
                        count={pageData.totalPages}
                        variant="outlined"
                        onChange={handlePageChange}
                        page={filterData.page}
                      />
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
