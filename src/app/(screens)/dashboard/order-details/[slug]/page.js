"use client";
import Image from "next/image";
import "../../../../../../public/sass/pages/my_profile.scss";
import { Container, Grid } from "@mui/material";
import TopDesign from "../../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../../public/images/account_bottom_design.png";
import JudaBun from "../../../../../../public/images/juda_bun.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Sidebar from "@/app/components/sidebar";
import { useEffect, useState } from "react";
import { getApi } from "../../../../../helpers/General";
import { useParams } from "next/navigation";

const OrderDetails = () => {
  const { slug } = useParams();

  const defaultOrder = {
    data: [],
    productData: [],
  };

  const [pageData, setPageData] = useState(defaultOrder);

  let getData = async () => {
    let resp = await getApi(`order/view/${slug}`);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setPageData({
          data: data.data,
          productData: data.productData,
        });
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const price = pageData.productData.discount * pageData.data.item;

  const discount =
    pageData.productData.price * pageData.data.item -
    pageData.productData.discount * pageData.data.item;

  const delivery =
    pageData.productData.sale === "" ? pageData.productData.delivery : "FREE";

  const totalAmount = typeof delivery === "number" ? price + delivery : price;

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
                  <div className="my_profile_parent order_details_parent">
                    <div className="order_details_heading">
                      <h3>Order Details</h3>
                      <span
                        className={
                          pageData.data.status === 1 ? "delivered" : "shipped"
                        }
                      >
                        {pageData.data.status === 1 ? "Delivered" : "Shipped"}
                      </span>
                    </div>
                    <div className="order_details_product_parent">
                      <div className="order_details_product">
                        <div className="product_image">
                          {pageData.productData.image &&
                            pageData.productData.image.length > 0 && (
                              <Image
                                src={pageData.productData.image[0]}
                                alt="product_image"
                                width={120}
                                height={110}
                              />
                            )}
                        </div>
                        <div className="product_description">
                          <h4>{pageData.productData.title}</h4>
                          <h6>{pageData.productData.short_description}</h6>
                          <div className="product_price">
                            <span className="low_price">{`$${pageData.productData.discount}`}</span>
                            <span className="high_price">{`$${pageData.productData.price}`}</span>
                          </div>
                        </div>
                      </div>
                      <div className="order_information_parent">
                        <div className="order_information">
                          <h5>Order Information</h5>
                          <div className="order_information_details">
                            <div className="information_tag_parent">
                              <span className="information_tag">
                                Order Id :
                              </span>
                              <span className="information_tag">
                                Ordered on :
                              </span>
                              <span className="information_tag">
                                Delivered on :
                              </span>
                              <span className="information_tag">
                                Payment Status :
                              </span>
                              <span className="information_tag">Address :</span>
                            </div>
                            <div className="information_description_parent">
                              <span className="information_description">
                                {pageData.data._id}
                              </span>
                              <span className="information_description">
                                {pageData.data.created_at}
                              </span>
                              <span className="information_description">
                                {pageData.data.delivered_at}
                              </span>
                              <span className="information_description">
                                {pageData.data.status === 1
                                  ? "Paid"
                                  : "Pending"}
                              </span>
                              <span className="information_description">
                                2722 Ponce De Leon Blvd Coral Gables State
                                Florida, 3134
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order_information_parent price_details_parent">
                        <div className="order_information">
                          <h5>Price Detail</h5>
                          <div className="order_information_details">
                            <div className="information_tag_parent">
                              <span className="information_tag">
                                Price ({pageData.data.item} items)
                              </span>
                              <span className="information_tag">Discount</span>
                              <span className="information_tag">
                                Delivery Charges
                              </span>
                              <span className="information_tag">
                                Total Amount
                              </span>
                            </div>
                            <div className="information_description_parent">
                              <span className="information_description">
                                {`$${price}`}
                              </span>
                              <span className="information_description">
                                {`-$${discount}`}
                              </span>
                              <span className="information_description">
                                {typeof delivery == "number"
                                  ? `+$${delivery}`
                                  : delivery}
                              </span>
                              <span className="information_description">
                                {`$${totalAmount}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default OrderDetails;
