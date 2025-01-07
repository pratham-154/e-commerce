"use client";
import "../../../../public/sass/pages/my_cart.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Save from "../../../../public/images/save.png";
import CartDesign from "../../../../public/images/cart_design.png";
import JudaBun from "../../../../public/images/juda_bun.png";
import HairExtension from "../../../../public/images/hair_extension.png";
import HairWig from "../../../../public/images/hair_wig.png";
import Image from "next/image";
import { useState } from "react";

const MyCart = () => {
  const products = [
    {
      image: JudaBun,
      product: "Hair Product",
      heading: "Messy Juda Bun Extension Lorem ipsum dolor sit ",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
    {
      image: HairWig,
      product: "Hair Product",
      heading: "Messy Juda Bun Extension",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
    {
      image: HairExtension,
      product: "Hair Product",
      heading: "Clip Ear to Ear Volumizer",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
    {
      image: JudaBun,
      product: "Hair Product",
      heading: "Messy Juda Bun Extension Lorem ipsum dolor sit ",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
    {
      image: HairWig,
      product: "Hair Product",
      heading: "Messy Juda Bun Extension",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
    {
      image: HairExtension,
      product: "Hair Product",
      heading: "Clip Ear to Ear Volumizer",
      description: "Lorem ipsum dolor sit amet....",
      low_price: "$150",
      high_price: "$200",
    },
  ];

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const years = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];

  const [count, setCount] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setMonth(event.target.value);
    setYear(event.target.value);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cart_section">
      <div className="cart_heading_parent">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="cart_heading">
                <KeyboardBackspaceIcon />
                <h3>
                  My Cart (<span>6</span>)
                </h3>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="cart_body_parent">
        <div className="cart_design">
          <Image
            src={CartDesign}
            alt="cart_design"
            width={450}
            height={900}
            priority={false}
          />
        </div>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="cart_body">
                <div className="accordion_section">
                  <div className="accordion_parent">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        Delivery Address
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accordion_inner_parent">
                          <div className="accordion_content">
                            <div className="address_content">
                              <h6>Charles John </h6>
                              <p>+1-80225678</p>
                              <p>
                                123 CA Electric avenue, Los Angeles, California
                                90008
                              </p>
                            </div>
                            <div className="edit_icon">
                              <EditCalendarIcon />
                            </div>
                            <div className="icon_parent">
                              <div className="radio_button">
                                <Radio
                                  checked={selectedValue === "a"}
                                  onChange={handleChange}
                                  value="a"
                                  name="radio-buttons"
                                  inputProps={{ "aria-label": "A" }}
                                />
                              </div>
                              <div className="delete_icon">
                                <DeleteIcon />
                              </div>
                            </div>
                          </div>
                          <div className="accordion_content add_address_parent">
                            <div className="address_content">
                              <h6>Add New Address </h6>
                              <div className="add_icon">
                                <AddCircleOutlineRoundedIcon />
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        Order Summary
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accordion_inner_parent order_summary_section">
                          {products.map((product, index) => (
                            <div className="order_summary_parent" key={index}>
                              <div className="product_image">
                                <Image
                                  src={product.image}
                                  alt="product_image"
                                  width={80}
                                  height={80}
                                />
                              </div>
                              <div className="product_description">
                                <div className="hair_product_parent">
                                  <span className="hair_product">
                                    {product.product}
                                  </span>
                                </div>
                                <h4>{product.heading}</h4>
                                <p>{product.description}</p>
                                <div className="counter_section">
                                  <div className="counter_parent">
                                    <RemoveRoundedIcon
                                      className="icons"
                                      onClick={decrement}
                                    />
                                    <span className="counter">{count + 1}</span>
                                    <AddRoundedIcon
                                      className="icons"
                                      onClick={increment}
                                    />
                                  </div>
                                  <div className="product_price">
                                    <span className="low_price">
                                      {product.low_price}
                                    </span>
                                    <span className="high_price">
                                      {product.high_price}
                                    </span>
                                  </div>
                                </div>
                                <Button variant="text">Remove</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        Payment Method
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accordion_inner_parent payment_method_parent">
                          <h4>Debit / Credit Card</h4>
                          <div className="saved_card_section">
                            <div className="radio_button">
                              <Radio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ "aria-label": "A" }}
                              />
                            </div>
                            <div className="saved_card_parent">
                              <div className="saved_card">
                                <span>56**************34</span>
                                <span>06/23</span>
                              </div>
                              <div className="circle_parent">
                                <div className="red_circle"></div>
                                <div className="red_circle green_circle"></div>
                              </div>
                            </div>
                          </div>
                          <h4>Add New Card</h4>
                          <div className="card_parent">
                            <form>
                              <div className="card_textfield">
                                <TextField
                                  id="standard-basic"
                                  placeholder="Card Number"
                                  variant="standard"
                                />
                              </div>
                              <div className="valid_section">
                                <div className="valid_parent">
                                  <h6>Valid thru</h6>
                                  <div className="card_textfield_parent">
                                    <div className="card_textfield">
                                      <TextField
                                        id="standard-select-currency"
                                        select
                                        label="MM"
                                        variant="standard"
                                        value={month}
                                        onChange={handleChange}
                                      >
                                        {months.map((month, index) => (
                                          <MenuItem key={index} value={index}>
                                            {month}
                                          </MenuItem>
                                        ))}
                                      </TextField>
                                    </div>
                                    <div className="card_textfield">
                                      <TextField
                                        id="standard-select-currency"
                                        select
                                        label="YY"
                                        variant="standard"
                                        value={year}
                                        onChange={handleChange}
                                      >
                                        {years.map((year, index) => (
                                          <MenuItem key={index} value={index}>
                                            {year}
                                          </MenuItem>
                                        ))}
                                      </TextField>
                                    </div>
                                  </div>
                                </div>
                                <div className="card_textfield">
                                  <TextField
                                    id="input-with-icon-textfield"
                                    placeholder="CVV"
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <ErrorOutlineOutlinedIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                    variant="standard"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div className="shop_button">
                    <Button variant="outlined">Continue Shopping</Button>
                  </div>
                </div>
                <div className="price_details_section">
                  <div className="price_details_parent">
                    <h3>Price Details</h3>
                    <div className="price_details">
                      <div className="price_tag_parent">
                        <span className="price_tag">Price(3 items)</span>
                        <span className="price_tag">$3200</span>
                      </div>
                      <div className="price_tag_parent">
                        <span className="price_tag">Discount</span>
                        <span className="price_tag discount_price">-$1800</span>
                      </div>
                      <div className="price_tag_parent">
                        <span className="price_tag">Tax</span>
                        <span className="price_tag tax_price">+$18</span>
                      </div>
                      <div className="price_tag_parent">
                        <span className="price_tag">Delivery Charges</span>
                        <span className="price_tag discount_price">Free</span>
                      </div>
                    </div>
                    <div className="total_amount_parent">
                      <div className="total_amount">
                        <span className="amount_tag">Total Amount</span>
                        <span className="amount_price">$1400</span>
                      </div>
                      <h6>Estimated shipping time: 2 days</h6>
                    </div>
                    <div className="save_parent">
                      <div className="save_image">
                        <Image
                          src={Save}
                          alt="save_image"
                          width={22}
                          height={22}
                        />
                      </div>
                      <h3>You will save $1800 on this order</h3>
                    </div>
                  </div>
                  <div className="button_parent">
                    <Button variant="contained">Proceed to Checkout</Button>
                    <Button variant="outlined">Cancel</Button>
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

export default MyCart;
