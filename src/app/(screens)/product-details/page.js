"use client";
import Image from "next/image";
import "../../../../public/sass/pages/product_details.scss";
import { Button, Container, Grid } from "@mui/material";
import OnSale from "../../../../public/images/on_sale.png";
import HairWigBrown from "../../../../public/images/hair_wig_brown.png";
import Volumizer from "../../../../public/images/volumizer.png";
import BrownExtension from "../../../../public/images/brown_extension.png";
import BrownWig from "../../../../public/images/brown_wig.png";
import BunExtension from "../../../../public/images/bun_extension.png";
import DetailTopDesign from "../../../../public/images/detail_top_design.png";
import DetailBottomDesign from "../../../../public/images/detail_bottom_design.png";
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
import { Thumbs } from "swiper/modules";
import { useState } from "react";

const ProductDetails = () => {
  const [count, setCount] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const products = [
    {
      sale: OnSale,
      product: "Hair Product",
      image: BrownExtension,
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
      image: Volumizer,
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
      image: BrownWig,
      heading: "Full Lace Hair Volumizer Wig Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      product: "Hair Product",
      image: Volumizer,
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
      image: BrownExtension,
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
      image: BrownWig,
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
      image: BrownWig,
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
      image: BunExtension,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
    {
      product: "Hair Product",
      image: BrownExtension,
      heading: "Messy Juda Bun Extension Brown",
      description:
        "Lorem ipsum dolor sit ame ipsum dol siet amet orem ipsum dolor sit ame.",
      stock: "In Stock",
      high_price: "$ 200.00",
      low_price: "$ 150.00",
    },
  ];

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
            <div className="product_parent">
              <div className="product_image_parent">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={3}
                  freeMode={true}
                  modules={[Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
                        alt="product_image"
                        width={160}
                        height={110}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
                        alt="product_image"
                        width={160}
                        height={110}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
                        alt="product_image"
                        width={160}
                        height={110}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
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
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
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
                  <SwiperSlide>
                    <div className="product_image">
                      <Image
                        src={HairWigBrown}
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
                </Swiper>
              </div>
              <div className="product_text">
                <div className="product_name">
                  <h3>Full Lace Hair Volumizer Wig Brown </h3>
                  <span className="hair_product">Hair Product</span>
                </div>
                <div className="product_price">
                  <span className="high_price">$ 200</span>
                  <span className="low_price">$ 150</span>
                </div>
                <div className="stock_parent">
                  <span className="stock_tag">In Stock</span>
                  <div className="counter_parent">
                    <RemoveRoundedIcon className="icons" onClick={decrement} />
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
              <div className="product_description_text">
                <h3>Description </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  posuere nisl ac enim pellentesque semper. Duis ultrices, massa
                  ut eleifend volutpat, lectus metus rutrum urna, eget tempus
                  nisl mi eu mi.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In posuere nisl ac enim pellentesque semper.
                  Duis ultrices, massa ut eleifend volutpat, lectus metus rutrum
                  urna, eget tempus nisl mi eu mi.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. In posuere nisl ac enim
                  pellentesque semper. Duis ultrices, massa ut eleifend
                  volutpat, lectus metus rutrum urna, eget tempus nisl mi eu mi.
                </p>
              </div>
              <div className="product_description_text">
                <h3>Highlights</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  posuere nisl ac enim pellentesque semper. Duis ultrices, massa
                  ut eleifend volutpat, lectus metus rutrum urna, eget tempus
                  nisl mi eu mi.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In posuere nisl
                </p>
                <ul>
                  <li>Origin: U.S</li>
                  <li>Human Hair</li>
                  <li>Chemicals Free</li>
                </ul>
                <ol>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ol>
                <table>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Centro comercial Moctezuma</td>
                      <td>Francisco Chang</td>
                      <td>Mexico</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="similar_product_parent">
              <h3>Similar Products</h3>
              <div className="product_list">
                <Grid container spacing={2}>
                  {products.map((product, index) => (
                    <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
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
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;
