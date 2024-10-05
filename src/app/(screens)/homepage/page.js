"use client";
import Image from "next/image";
import "../../../../public/sass/pages/homepage.scss";
import Arrow from "../../../../public/images/arrow.png";
import Threelines from "../../../../public/images/threelines.png";
import CircleTick from "../../../../public/images/circle_tick.png";
import Free from "../../../../public/images/free.png";
import ShieldTick from "../../../../public/images/shield_tick.png";
import DoubleQuotes from "../../../../public/images/double_quotes.png";
import WilliamRog from "../../../../public/images/william_rog.png";
import KamesRoger from "../../../../public/images/kames_roger.png";
import MarkHenry from "../../../../public/images/mark_henry.png";
import Triangles from "../../../../public/images/triangles.png";
import SemiCircle from "../../../../public/images/semi_circle.png";
import HairExtension from "../../../../public/images/hair_extension.png";
import CurlEnhancing from "../../../../public/images/curl_enhancing.png";
import HairBrush from "../../../../public/images/hair_brush.png";
import TopDesign from "../../../../public/images/top_design.png";
import BottomDesign from "../../../../public/images/bottom_design.png";
import RightDesign from "../../../../public/images/right_design.png";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import PlaceIcon from "@mui/icons-material/Place";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import StarIcon from "@mui/icons-material/Star";
import { Container } from "@mui/system";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="main_home_section">
      <Swiper
        pagination={true}
        autoplay={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="home_section"
            style={{
              backgroundImage: `url(../images/homepage.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="home_text">
                    <h1>Transform Your Locks with Our Big Hair Collection</h1>
                    <h6>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu
                    </h6>
                    <div className="buttons">
                      <Button variant="outlined">Shop Now</Button>
                      <div className="explore_btn">
                        <Button variant="contained">Explore More</Button>
                        <div className="threelines">
                          <Image
                            src={Threelines}
                            alt="threelines"
                            width={120}
                            height={120}
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_arrow">
                    <Image src={Arrow} alt="arrow" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="home_section"
            style={{
              backgroundImage: `url(../images/homepage.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="home_text">
                    <h1>Transform Your Locks with Our Big Hair Collection</h1>
                    <h6>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu
                    </h6>
                    <div className="buttons">
                      <Button variant="outlined">Shop Now</Button>
                      <div className="explore_btn">
                        <Button variant="contained">Explore More</Button>
                        <div className="threelines">
                          <Image
                            src={Threelines}
                            alt="threelines"
                            width={120}
                            height={120}
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_arrow">
                    <Image src={Arrow} alt="arrow" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="home_section"
            style={{
              backgroundImage: `url(../images/homepage.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="home_text">
                    <h1>Transform Your Locks with Our Big Hair Collection</h1>
                    <h6>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu
                    </h6>
                    <div className="buttons">
                      <Button variant="outlined">Shop Now</Button>
                      <div className="explore_btn">
                        <Button variant="contained">Explore More</Button>
                        <div className="threelines">
                          <Image
                            src={Threelines}
                            alt="threelines"
                            width={120}
                            height={120}
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_arrow">
                    <Image src={Arrow} alt="arrow" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="sales_offer">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            736: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          pagination={false}
          modules={[Pagination, Autoplay]}
          speed={10000}
          autoplay={{
            delay: 0,
          }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>SAVE 50% OFF</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home_middle_section">
        <div className="top_design">
          <Image src={TopDesign} alt="top_design" height={600} width={300} />
        </div>
        <div className="bottom_design">
          <Image
            src={BottomDesign}
            alt="bottom_design"
            height={730}
            width={370}
          />
        </div>
        <div className="right_design">
          <Image
            src={RightDesign}
            alt="right_design"
            height={630}
            width={370}
          />
        </div>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <h3>
                OUR <span>PRODUCTS</span>
              </h3>
              <div className="hair_items_swiper">
                <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  navigation={{
                    nextEl: ".next1",
                    prevEl: ".prev1",
                  }}
                  modules={[Navigation]}
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="hair_items_parent curls">
                      <div className="hair_items">
                        <Image
                          src={CurlEnhancing}
                          alt="curl_enhancing"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Curl Enhancing</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="hair_items_parent brush">
                      <div className="hair_items">
                        <Image
                          src={HairBrush}
                          alt="hair_Brush"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Hair Brush</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="hair_items_parent">
                      <div className="hair_items">
                        <Image
                          src={HairExtension}
                          alt="hair_extension"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Hair Extension</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="hair_items_parent curls">
                      <div className="hair_items">
                        <Image
                          src={CurlEnhancing}
                          alt="curl_enhancing"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Curl Enhancing</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="hair_items_parent brush">
                      <div className="hair_items">
                        <Image
                          src={HairBrush}
                          alt="hair_Brush"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Hair Brush</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="hair_items_parent">
                      <div className="hair_items">
                        <Image
                          src={HairExtension}
                          alt="hair_extension"
                          height={350}
                          width={350}
                        />
                      </div>
                      <h3>Hair Extension</h3>
                    </div>
                  </SwiperSlide>
                  <div className="prev1">
                    <WestIcon />
                  </div>
                  <div className="next1">
                    <EastIcon />
                  </div>
                </Swiper>
              </div>
              <div className="middle_bottom_section">
                <h3>
                  EVERYTHING DELIVERED <span>AT YOUR DOORSTEP</span>
                </h3>
                <Grid container spacing={7}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <div className="icons_parent">
                      <div className="icons">
                        <Image
                          src={CircleTick}
                          alt="circle_tick"
                          height={60}
                          width={60}
                        />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit
                        adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. adipiscing Nunc.
                      </p>
                    </div>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <div className="icons_parent">
                      <div className="icons free">
                        <Image src={Free} alt="free" height={60} width={114} />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit
                        adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. adipiscing Nunc.
                      </p>
                    </div>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <div className="icons_parent">
                      <div className="icons shield">
                        <Image
                          src={ShieldTick}
                          alt="shield_tick"
                          height={60}
                          width={56}
                        />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit
                        adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. adipiscing Nunc.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="feedback_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <h3>
                CUSTOMER <span>FEEDBACKS</span>
              </h3>
              <div className="feedback_section_swiper">
                <Swiper
                  navigation={{
                    nextEl: ".next2",
                    prevEl: ".prev2",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={3}
                  autoplay={true}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={KamesRoger}
                          alt="kamas_roger"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>Kames Roger</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>4 months ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={MarkHenry}
                          alt="mark_henry"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>Mark Henry</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>4 weeks ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={WilliamRog}
                          alt="william_rog"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>William Rog</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>2 months ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={KamesRoger}
                          alt="kamas_roger"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>Kames Roger</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>4 months ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={MarkHenry}
                          alt="mark_henry"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>Mark Henry</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>4 weeks ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feedback_text">
                      <div className="user_image">
                        <Image
                          src={WilliamRog}
                          alt="william_rog"
                          height={46}
                          width={46}
                        ></Image>
                      </div>
                      <div className="double_quotes">
                        <Image
                          src={DoubleQuotes}
                          alt="double_quotes"
                          height={33}
                          width={44}
                        ></Image>
                      </div>
                      <h4>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                      </h4>
                      <div className="user_feedback">
                        <div className="user_name">
                          <h3>William Rog</h3>
                        </div>
                        <div className="user_rating">
                          <ul className="user_stars">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <h6>2 months ago</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="prev2">
                  <WestIcon />
                </div>
                <div className="next2">
                  <EastIcon />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="form_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="triangle">
                <Image
                  src={Triangles}
                  alt="triangles"
                  height={120}
                  width={150}
                />
              </div>
              <div className="semi_circle">
                <Image
                  src={SemiCircle}
                  alt="semi_circle"
                  height={175}
                  width={350}
                />
              </div>
              <div className="form_parent">
                <div className="form_area">
                  <form>
                    <h3>Get in Touch</h3>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur elit adipie
                      litelitscing elit litelitscing elit litelitscing elit.
                    </h4>
                    <Grid container columnSpacing={2}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="First Name"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </div>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Last Name"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Email"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Contact No."
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Message"
                            multiline
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MessageIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <div className="submit_button">
                      <Button variant="contained">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="contact_area">
                <div className="circle"></div>
                <h3>Contact us</h3>
                <h4>Lorem ipsum dolor sit amet, elit litelitscing elit.</h4>
                <ul className="contact_type">
                  <li>
                    <Link href="#">
                      <PhoneIcon />
                      +1 784-5120-5431
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <MailIcon />
                      support@fitiehair.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <PlaceIcon />
                      Lorem ipsum dolor sit amet, consectetur elit adipielit
                      elit. Nunc.
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
