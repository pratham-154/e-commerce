"use client";
import Image from "next/image";
import "../../../../public/sass/pages/homepage.scss";
import Arrow from "../../../../public/images/arrow.png";
import Threelines from "../../../../public/images/threelines.png";
import DoubleQuotes from "../../../../public/images/double_quotes.png";
import Triangles from "../../../../public/images/triangles.png";
import SemiCircle from "../../../../public/images/semi_circle.png";
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
import {
  postApi,
  getApi,
  emailRegex,
  phoneNumberRegex,
} from "../../../helpers/General";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Validator = require("validatorjs");

const HomePage = () => {
  const defaultHomeData = {
    bannerData: [],
    productData: [],
    homePageData: [],
    feedbackData: [],
  };

  const [pageData, setPageData] = useState(defaultHomeData);
  let imageUrl = process.env.mediaUrl;

  let getHomepageData = async () => {
    let resp = await getApi("homepage/view/6707cfe60b4edc75747b1ddc");

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setPageData((prevData) => ({
          ...prevData,
          homePageData: Array.isArray(data.data) ? data.data : [data.data],
          bannerData: data.bannerData,
          productData: data.productData,
          feedbackData: data.feedbackData,
        }));
      }
    }
  };

  useEffect(() => {
    getHomepageData();
  }, []);

  let defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  let [formData, setFormData] = useState(defaultValue);
  let [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Validator.register(
      "emailRegex",
      (value) => emailRegex.test(value),
      "The email format is invalid."
    );

    Validator.register(
      "phoneNumberRegex",
      (value) => {
        return phoneNumberRegex.test(value);
      },
      "The :attribute must be a valid phone number."
    );

    const rules = {
      first_name: "required",
      last_name: "required",
      email: "required|emailRegex",
      phone_number: "required|phoneNumberRegex|min:10|max:10",
      message: "required",
    };

    const validationErrorMessages = {
      "required.first_name": "The field is required.",
      "required.last_name": "The field is required.",
      "required.email": "The field is required.",
      "emailRegex.email": "The email format is invalid.",
      "required.phone_number": "The field is required.",
      "phoneNumberRegex.phone_number": "The phonenumber format is invalid.",
      "min.phone_number": "The phonenumber must be at least 10 characters.",
      "max.phone_number":
        "The phonenumber may not be greater than 10 characters.",
      "required.subject": "The field is required.",
      "required.message": "The field is required.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await postApi("contact-us/add", formData);
        if (response && response.data.status) {
          setFormData(defaultValue);
          toast.success(response.data.message);
        } else {
          console.log(response.data.message.errors);
        }
      } catch (error) {
        toast.error(" Something went wrong please try after some time ");
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="main_home_section">
      {pageData.bannerData && pageData.bannerData.length > 0 && (
        <Swiper
          pagination={true}
          autoplay={true}
          modules={[Autoplay, Pagination]}
          loop={true}
          className="mySwiper"
        >
          {pageData.bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="home_section"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <div className="home_text">
                        <h1>{item.title}</h1>
                        <h6>{item.description}</h6>
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
          ))}
        </Swiper>
      )}
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
                  {pageData.productData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="hair_items_parent">
                        <div className="hair_items">
                          <Image
                            src={`${imageUrl}${item.image[0]}`}
                            alt="product_image"
                            height={350}
                            width={350}
                          />
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="prev1">
                    <WestIcon />
                  </div>
                  <div className="next1">
                    <EastIcon />
                  </div>
                </Swiper>
              </div>
              {pageData.homePageData.map((item, index) => (
                <div className="middle_bottom_section" key={index}>
                  <h3>
                    EVERYTHING DELIVERED <span>AT YOUR DOORSTEP</span>
                  </h3>
                  <Grid container spacing={7}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <div className="icons_parent">
                        <div className="icons">
                          <Image
                            src={item.text_image_1}
                            alt="circle_tick"
                            height={60}
                            width={60}
                          />
                        </div>
                        <p>{item.text_1}</p>
                      </div>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <div className="icons_parent">
                        <div className="icons free">
                          <Image
                            src={item.text_image_2}
                            alt="free"
                            height={60}
                            width={114}
                          />
                        </div>
                        <p>{item.text_2}</p>
                      </div>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <div className="icons_parent">
                        <div className="icons shield">
                          <Image
                            src={item.text_image_3}
                            alt="shield_tick"
                            height={60}
                            width={56}
                          />
                        </div>
                        <p>{item.text_3}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ))}
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
                  {pageData.feedbackData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="feedback_text">
                        <div className="user_image">
                          <Image
                            src={item.image}
                            alt="user_image"
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
                        <h4>{item.description}</h4>
                        <div className="user_feedback">
                          <div className="user_name">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="user_rating">
                            <ul className="user_stars">
                              {Array(item.rating)
                                .fill()
                                .map((_, index) => (
                                  <li key={index}>
                                    <StarIcon />
                                  </li>
                                ))}
                            </ul>
                            <h6>4 months ago</h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
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
                  <form onSubmit={handleSubmit}>
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
                            name="first_name"
                            value={formData.first_name || ""}
                            onChange={handleChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                            error={!!errors.first_name}
                            helperText={
                              errors.first_name ? errors.first_name[0] : ""
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Last Name"
                            name="last_name"
                            value={formData.last_name || ""}
                            onChange={handleChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                            error={!!errors.last_name}
                            helperText={
                              errors.last_name ? errors.last_name[0] : ""
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                            error={!!errors.email}
                            helperText={errors.email ? errors.email[0] : ""}
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Contact No."
                            name="phone_number"
                            value={formData.phone_number || ""}
                            onChange={handleChange}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                            error={!!errors.phone_number}
                            helperText={
                              errors.phone_number ? errors.phone_number[0] : ""
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="form_area_field">
                          <TextField
                            id="input-with-icon-textfield"
                            placeholder="Message"
                            name="message"
                            value={formData.message || ""}
                            onChange={handleChange}
                            multiline
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MessageIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                            error={!!errors.message}
                            helperText={errors.message ? errors.message[0] : ""}
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <div className="submit_button">
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
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
