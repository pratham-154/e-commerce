"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/product_details.scss";
import { Button, Container, Grid } from "@mui/material";
import DetailTopDesign from "../../../../../public/images/detail_top_design.png";
import DetailBottomDesign from "../../../../../public/images/detail_bottom_design.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Product from "@/app/components/product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { getApi, renderHtml } from "../../../../helpers/General";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const [count, setCount] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productData, setProductData] = useState([]);
  const [similarProductData, setSimilarProductData] = useState([]);
  let imageUrl = process.env.mediaUrl;
  const { slug } = useParams();

  let getProductData = async () => {
    let resp = await getApi(`product/view/${slug}`);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setProductData(data.data);
        setSimilarProductData(data.similarProduct);
      }
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product_details_parent">
      <div className="top_design">
        <Image
          src={DetailTopDesign}
          alt="top_design"
          width={565}
          height={1100}
          priority={false}
        />
      </div>
      <div className="bottom_design">
        <Image
          src={DetailBottomDesign}
          alt="bottom_design"
          width={420}
          height={750}
          priority={false}
        />
      </div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="product_section">
              <div className="product_parent">
                <div className="product_image_parent">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {productData.image &&
                      productData.image.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="product_image">
                              <Image
                                src={`${imageUrl}${item}`}
                                alt="product_image"
                                width={160}
                                height={110}
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {productData.image &&
                      productData.image.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="product_image">
                            <Image
                              src={`${imageUrl}${item}`}
                              alt="product_image"
                              width={360}
                              height={360}
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
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="product_text">
                  <div className="product_name">
                    <h3>{productData.title}</h3>
                    {productData.category_id && (
                      <span className="hair_product">
                        {productData.category_id.title}
                      </span>
                    )}
                  </div>
                  <div className="product_price">
                    <span className="high_price">{`$${productData.price}`}</span>
                    <span className="low_price">{`$${productData.discount}`}</span>
                  </div>
                  <div className="stock_parent">
                    <span className="stock_tag">{productData.stock}</span>
                    <div className="counter_parent">
                      <RemoveRoundedIcon
                        className="icons"
                        onClick={decrement}
                      />
                      <span className="counter">{count + 1}</span>
                      <AddRoundedIcon className="icons" onClick={increment} />
                    </div>
                  </div>
                  <div className="button_parent">
                    <Button variant="contained">Buy Now</Button>
                    <Button variant="outlined">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="product_description">
                <div
                  className="product_description_text"
                  dangerouslySetInnerHTML={renderHtml(productData.description)}
                ></div>
              </div>
            </div>

            <div className="similar_product_parent">
              <h3>Similar Products</h3>
              <div className="product_list">
                <Grid container spacing={2}>
                  {similarProductData.map((item, index) => (
                    <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                      <Product
                        sale={item.sale}
                        product={item.category_id.title}
                        image={item.image}
                        heading={item.title}
                        description={item.short_description}
                        stock={item.stock}
                        high_price={item.price}
                        low_price={item.discount}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;
