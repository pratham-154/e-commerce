"use client";
import Image from "next/image";
import { Button, Container, Grid } from "@mui/material";
import "../../../../public/sass/pages/about_us.scss";
import DoubleQuotes from "../../../../public/images/double_quotes.png";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi, renderHtml } from "../../../helpers/General";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const AboutUs = () => {
  const sectionRef = useRef(null);

  const defaultValue = {
    aboutUsData: [],
    feedbackData: [],
    partnerData: [],
  };

  const [pageData, setPageData] = useState(defaultValue);

  let getData = async () => {
    let resp = await getApi("about-us/view/672dc3c0e6f5944c42f78970");
    console.log(resp);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setPageData((prevData) => ({
          ...prevData,
          aboutUsData: data.data,
          feedbackData: data.feedbackData,
          partnerData: data.partnerData,
        }));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about_us_section">
      <div className="about_us_top_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="about_us_top_parent">
                <div className="about_us_image">
                  <Image
                    src={pageData.aboutUsData.image}
                    alt="about_us_image"
                    width={650}
                    height={450}
                  />
                </div>
                <div className="about_us_detail_area">
                  <div className="icon_heading">
                    <h6>About Us</h6>
                  </div>
                  <div className="about_us_details">
                    <h3>{pageData.aboutUsData.title}</h3>
                    <p>{pageData.aboutUsData.description}</p>
                  </div>
                  <div className="about_us_btn">
                    <Button
                      variant="contained"
                      onClick={() => scrollToSection("section1")}
                    >
                      Our Partners
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => scrollToSection("section2")}
                    >
                      Testimonials
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="about_us_middle_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="about_us_middle_parent">
                <ul>
                  <li>
                    <h3>Vision</h3>
                    <div
                      className="about_us_middle_description"
                      dangerouslySetInnerHTML={renderHtml(
                        pageData.aboutUsData.vision
                      )}
                    ></div>
                  </li>
                  <li>
                    <h3>Ethics</h3>
                    <div
                      className="about_us_middle_description"
                      dangerouslySetInnerHTML={renderHtml(
                        pageData.aboutUsData.ethics
                      )}
                    ></div>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        className="about_us_testimonials_section"
        id="section2"
        ref={sectionRef}
      >
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="about_us_testimonials_parent">
                <div className="testimonials_heading">
                  <h3>What our customers are</h3>
                  <h3>saying us?</h3>
                </div>
                <div className="testimonials_side_text_parent">
                  <div className="testimonials_side_text_subparent">
                    <span className="testimonials_side_count">
                      {`${pageData.aboutUsData.users}m+`}
                    </span>
                    <span className="testimonials_side_text">Happy People</span>
                  </div>
                  <div className="testimonials_side_text_subparent">
                    <span className="testimonials_side_count">
                      {pageData.aboutUsData.rating}
                    </span>
                    <span className="testimonials_side_text">
                      Overall rating
                    </span>
                    <ul>
                      {Array(Math.ceil(pageData.aboutUsData.rating) || 0)
                        .fill()
                        .map((_, index) => (
                          <li key={index}>
                            <StarIcon />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="testimonials_slider_parent">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    667: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1366: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  autoplay={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {pageData.feedbackData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonials_slider">
                        <div className="testimonials_user_heading">
                          <div className="user_image">
                            <Image
                              src={item.image}
                              alt="user_image"
                              width={90}
                              height={90}
                            />
                          </div>
                          <div className="user_details">
                            <h5>{item.title}</h5>
                            <h6>{item.designation}</h6>
                          </div>
                          <div className="double_quotes">
                            <Image src={DoubleQuotes} alt="double_quotes" />
                          </div>
                        </div>
                        <div className="user_review">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="about_us_bottom_section" id="section1" ref={sectionRef}>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="about_us_bottom_parent">
                <div className="about_us_bottom_heading">
                  <h3>Our Partners</h3>
                </div>
                <div className="about_us_partners">
                  <Grid container spacing={4}>
                    {pageData.partnerData.map((item, index) => (
                      <Grid item xl={2} lg={2} md={2} sm={3} xs={4} key={index}>
                        <div className="partner_logo">
                          <Image
                            src={item.image}
                            alt="partner_logo"
                            width={300}
                            height={100}
                          />
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
