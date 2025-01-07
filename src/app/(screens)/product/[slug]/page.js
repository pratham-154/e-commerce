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
import { useEffect, useRef, useState } from "react";
import { getApi, postApi, renderHtml } from "../../../../helpers/General";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productData, setProductData] = useState([]);
  const [similarProductData, setSimilarProductData] = useState([]);
  const [like, setLike] = useState(false);
  const [productState, setProductState] = useState({
    count: 1,
    action: "increment",
  });
  let imageUrl = process.env.mediaUrl;
  const { slug } = useParams();
  const isFirstRender = useRef(true);
  const pendingLikeUpdate = useRef(false);

  let getProductData = async () => {
    let resp = await getApi(`product/view/${slug}`);
    console.log("resp", resp);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        const product = data.data;
        setProductData(product);
        setSimilarProductData(data.similarProduct);
        setLike(data.like);
        setProductState({
          count: product.count || 1,
          action: "increment",
        });
        await updateData(1);
      }
    }
  };

  const updateData = async (newCount) => {
    try {
      const data = {
        count: newCount,
      };
      await postApi(`product/update/${slug}`, data);
    } catch (error) {
      console.error("Error updating product count:", error);
      toast.error("An error occurred while updating product count.");
    }
  };

  const putLike = async () => {
    try {
      let data = { like, slug };
      let resp = await postApi("user/like", data);
      if (resp.status) {
        toast.success(resp.message);
      } else {
        toast.error(resp.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      toast.error("Something went wrong while updating like status.");
    } finally {
      pendingLikeUpdate.current = false;
    }
  };

  const handleLike = () => {
    if (!pendingLikeUpdate.current) {
      const updatedLike = !like;
      setLike(updatedLike);
      pendingLikeUpdate.current = true;
    }
  };

  const handleCountChange = (type) => {
    let newCount = productState.count;

    if (type === "increment" && productState.count < productData.quantity) {
      newCount++;
    } else if (type === "decrement" && productState.count > 1) {
      newCount--;
    } else {
      toast.error(
        type === "increment"
          ? "Cannot exceed available quantity."
          : "Count cannot be less than 1."
      );
      return;
    }

    setProductState({
      count: newCount,
      action: type,
    });

    updateData(newCount);
  };

  const handleBuyNow = async () => {
    try {
      const orderData = {
        item: productState.count,
      };

      const response = await postApi(`order/add/${slug}`, orderData);

      if (response && response.status) {
        toast.success("Order placed successfully!");
        router.push(`/dashboard/my-order`);
      } else {
        toast.error(response.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing your order.");
    }
  };

  const updateURL = () => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams();
      searchParams.set("count", productState.count);
      searchParams.set("like", like);
      const queryString = `?${searchParams.toString()}`;
      window.history.replaceState(null, "", queryString);
      console.log("Updated query string:", queryString);
    }
  };

  useEffect(() => {
    getProductData();
  }, [slug]);

  useEffect(() => {
    if (productData.count !== 1 || productState.count !== 1) {
      setProductState((prevState) => ({
        ...prevState,
        count: 1,
        action: "increment",
      }));
    }
  }, [productData]);

  useEffect(() => {
    updateURL();
  }, [productState.count]);

  useEffect(() => {
    updateURL();
  }, [like]);

  useEffect(() => {
    if (!isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (pendingLikeUpdate.current) {
      putLike();
    }
  }, [like]);

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
                              {like ? (
                                <FavoriteRoundedIcon
                                  className="active"
                                  onClick={handleLike}
                                />
                              ) : (
                                <FavoriteBorderRoundedIcon
                                  className="active inactive"
                                  onClick={handleLike}
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
                    <span
                      className={
                        productData && productData.stock === "In Stock"
                          ? "in_stock_text"
                          : "out_stock_text"
                      }
                    >
                      {productData.stock}
                    </span>
                    <div className="counter_parent">
                      <RemoveRoundedIcon
                        className={`icons ${
                          productState.action === "decrement" ? "active" : ""
                        }`}
                        onClick={() => handleCountChange("decrement")}
                        style={{
                          pointerEvents:
                            productState.count <= 1 ? "none" : "auto",
                          opacity: productState.count <= 1 ? 0.5 : 1,
                        }}
                      />
                      <span className="counter">{productState.count}</span>
                      <AddRoundedIcon
                        className={`icons ${
                          productState.action === "increment" ? "active" : ""
                        }`}
                        onClick={() => handleCountChange("increment")}
                        style={{
                          pointerEvents:
                            productState.count === productData.quantity
                              ? "none"
                              : "auto",
                          opacity:
                            productState.count === productData.quantity
                              ? 0.5
                              : 1,
                        }}
                      />
                    </div>
                  </div>
                  <div className="button_parent">
                    <Button variant="contained" onClick={handleBuyNow}>
                      Buy Now
                    </Button>
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
                        slug={item.slug}
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
