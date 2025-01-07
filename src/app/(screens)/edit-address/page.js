"use client";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Image from "next/image";
import "../../../../public/sass/pages/address.scss";
import AddressImage from "../../../../public/images/address_image.png";
import AddressDesign from "../../../../public/images/address_design.png";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";
import { getApi, putApi, phoneNumberRegex } from "../../../helpers/General";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Validator = require("validatorjs");

const EditAddress = ({ searchParams }) => {
  const router = useRouter();
  const { _id } = searchParams;

  let defaultValue = {
    house: "",
    street: "",
    state: "",
    city: "",
    pincode: "",
    phone_number: "",
  };

  let [data, setData] = useState(defaultValue);
  let [errors, setErrors] = useState({});

  let getData = async () => {
    let resp = await getApi(`address/view/${_id}`);

    if (resp && resp.status) {
      let { data } = resp;
      if (data && Array.isArray(data.data) && data.data.length > 0) {
        setData(data.data[0]);
      }
    } else {
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
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
    let formData = {
      house: data.house,
      street: data.street,
      state: data.state,
      city: data.city,
      pincode: data.pincode,
      phone_number: data.phone_number,
    };

    Validator.register(
      "phoneNumberRegex",
      (value) => {
        return phoneNumberRegex.test(value);
      },
      "The :attribute must be a valid phone number."
    );

    const rules = {
      house: "required",
      street: "required",
      state: "required",
      city: "required",
      pincode: "required",
      phone_number: "required|phoneNumberRegex|min:10|max:10",
    };

    const validationErrorMessages = {
      "required.house": "The field is required.",
      "required.street": "The field is required.",
      "required.state": "The field is required.",
      "required.city": "The field is required.",
      "required.pincode": "The field is required.",
      "required.phone_number": "The field is required.",
      "phoneNumberRegex.phone_number": "The phonenumber format is invalid.",
      "min.phone_number": "The phonenumber must be at least 10 characters.",
      "max.phone_number":
        "The phonenumber may not be greater than 10 characters.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await putApi(`address/update/${_id}`, formData);
        console.log("response", response);
        if (response && response.status) {
          toast.success(response.message);
          setData(defaultValue);
          router.push("/dashboard/saved-address?redirectTo=/my-cart");
        } else {
          console.log(response.message);
        }
      } catch (error) {
        toast.error(" Something went wrong please try after some time ");
        console.error("Error submitting form:", error);
      }
    }
  };

  const states = [
    {
      value: "State",
      label: "State",
    },
    {
      value: "Jammu & Kashmir",
      label: "Jammu & Kashmir",
    },
    {
      value: "Punjab",
      label: "Punjab",
    },
    {
      value: "Himachal Predesh",
      label: "Himachal Predesh",
    },
    {
      value: "Haryana",
      label: "Haryana",
    },
    {
      value: "UttraKhand",
      label: "UttraKhand",
    },
  ];

  const cities = [
    {
      value: "City",
      label: "City",
    },
    {
      value: "Ludhiana",
      label: "Ludhiana",
    },
    {
      value: "Amritsar",
      label: "Amritsar",
    },
    {
      value: "Jalandhar",
      label: "Jalandhar",
    },
    {
      value: "Kapurthala",
      label: "Kapurthala",
    },
    {
      value: "Pathankot",
      label: "Pathankot",
    },
  ];

  return (
    <div className="address_section">
      <div className="address_design">
        <Image
          src={AddressDesign}
          alt="address_design"
          width={530}
          height={950}
          priority={false}
        />
      </div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="address_parent">
              <div className="address_child">
                <div className="left_area">
                  <div className="left_area_image">
                    <Image
                      src={AddressImage}
                      alt="address_image"
                      width={315}
                      height={215}
                      priority={false}
                    />
                  </div>
                </div>
                <div className="right_area">
                  <div className="right_area_close">
                    <Link href="/dashboard/saved-address">
                      <CloseRoundedIcon />
                    </Link>
                  </div>
                  <div className="right_area_form edit_form">
                    <h3>Edit Address</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="address_credentials_parent">
                        <div className="address_credentials">
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Enter Apartment/House #"
                            name="house"
                            value={data.house || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.house}
                            helperText={errors.house ? errors.house[0] : ""}
                          />
                        </div>
                        <div className="address_credentials">
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Street Name"
                            name="street"
                            value={data.street || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.street}
                            helperText={errors.street ? errors.street[0] : ""}
                          />
                        </div>
                      </div>
                      <div className="address_credentials_parent sub_parent">
                        <div className="address_credentials">
                          <InputLabel>Select State</InputLabel>
                          <TextField
                            id="standard-select-currency"
                            select
                            defaultValue="State"
                            name="state"
                            value={data.state || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.state}
                            helperText={errors.state ? errors.state[0] : ""}
                          >
                            {states.map((state) => (
                              <MenuItem key={state.value} value={state.value}>
                                {state.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                        <div className="address_credentials">
                          <InputLabel>Select City</InputLabel>
                          <TextField
                            id="standard-select-currency"
                            select
                            defaultValue="City"
                            name="city"
                            value={data.city || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.city}
                            helperText={errors.city ? errors.city[0] : ""}
                          >
                            {cities.map((city) => (
                              <MenuItem key={city.value} value={city.value}>
                                {city.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </div>
                      <div className="address_credentials_parent sub_parent">
                        <div className="address_credentials">
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Pin code"
                            name="pincode"
                            value={data.pincode || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.pincode}
                            helperText={errors.pincode ? errors.pincode[0] : ""}
                          />
                        </div>
                        <div className="address_credentials">
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Phone Number"
                            name="phone_number"
                            value={data.phone_number || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.phone_number}
                            helperText={
                              errors.phone_number ? errors.phone_number[0] : ""
                            }
                          />
                        </div>
                      </div>
                      <div className="submit_button">
                        <Button variant="contained" type="submit">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EditAddress;
