"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApi } from "../../../../helpers/General";

const MyOrder = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortSelect = [
    {
      title: "Product Title (A-Z)",
      sort: "product_id.title",
      direction: "asc",
    },
    {
      title: "Product Title (Z-A)",
      sort: "product_id.title",
      direction: "desc",
    },
    {
      title: "Product Price (Low-High)",
      sort: "product_id.price",
      direction: "asc",
    },
    {
      title: "Product Price (High-Low)",
      sort: "product_id.price",
      direction: "desc",
    },
  ];

  const defaultOrder = {
    data: [],
    totalCount: "",
    totalPages: "",
  };

  const defaultFilter = {
    sort: searchParams.get("sort") || "",
    direction: searchParams.get("direction") || "",
    limit: parseInt(searchParams.get("limit")) || 3,
    page: parseInt(searchParams.get("page")) || 1,
  };

  const [pageData, setPageData] = useState(defaultOrder);
  const [filterData, setFilterData] = useState(defaultFilter);

  const updateUrl = () => {
    const params = new URLSearchParams();
    if (filterData.sort) params.set("sort", filterData.sort);
    if (filterData.direction) params.set("direction", filterData.direction);
    params.set("limit", filterData.limit);
    params.set("page", filterData.page);

    const queryString = `?${params.toString()}`;
    window.history.replaceState(null, "", queryString);
  };

  let getData = async () => {
    let resp = await getApi("order/index", {
      params: {
        sort: filterData.sort,
        direction: filterData.direction,
        limit: filterData.limit,
        page: filterData.page,
      },
    });

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

  useEffect(() => {
    updateUrl();
    getData();
  }, [filterData]);

  const handleClick = (slug) => {
    router.push(`/dashboard/order-details/${slug}`);
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
                          My Orders (<span>{pageData.totalCount}</span>)
                        </h3>
                      </div>
                      {/* <div className="filter_parent">
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
                      </div> */}
                    </div>
                    <div className="ordergrid_parent">
                      {pageData.data.map((data, index) => (
                        <div className="ordergrid_child" key={index}>
                          <div className="ordergrid_image">
                            <Image
                              src={data.product_id.image[0]}
                              alt="order_image"
                              width={120}
                              height={110}
                              onClick={() => handleClick(data.product_id.slug)}
                            />
                          </div>
                          <div className="ordergrid_text_parent">
                            <div className="ordergrid_text">
                              <div className="product_description">
                                <h4
                                  onClick={() =>
                                    handleClick(data.product_id.slug)
                                  }
                                >
                                  {data.product_id.title} (
                                  <span>{data.item}</span>)
                                </h4>
                                <h6>{data.product_id.short_description}</h6>
                              </div>
                              <div className="product_price">
                                <span className="low_price">
                                  {`$${data.product_id.discount}`}
                                </span>
                                <span className="high_price">
                                  {`$${data.product_id.price}`}
                                </span>
                              </div>
                              <div className="product_shipping_parent">
                                <div className="product_shipping">
                                  <InventoryOutlinedIcon className="icon" />
                                  <h6>Ordered on {data.created_at}</h6>
                                </div>
                                <div className="product_shipping">
                                  <LocalShippingOutlinedIcon className="icon shipping" />
                                  <h6>Delivered on {data.delivered_at}</h6>
                                </div>
                              </div>
                              {/* {data.status === 1 ? (
                                <Button variant="outlined">Return</Button>
                              ) : (
                                <Button variant="contained">
                                  Cancellation
                                </Button>
                              )} */}
                            </div>
                            <div className="shipping_tag">
                              <span
                                className={
                                  data.status === 1 ? "delivered" : "shipped"
                                }
                              >
                                {data.status === 1 ? "Delivered" : "Shipped"}
                              </span>
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

export default MyOrder;
