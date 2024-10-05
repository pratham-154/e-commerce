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

const AddAddress = () => {
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
                    <Link href="#">
                      <CloseRoundedIcon />
                    </Link>
                  </div>
                  <div className="right_area_form">
                    <h3>Add New Address</h3>
                    <form>
                      <div className="address_credentials_parent">
                        <div className="address_credentials">
                          <InputLabel>Apartment/House #</InputLabel>
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Enter Apartment/House #"
                            variant="standard"
                          />
                        </div>
                        <div className="address_credentials">
                          <InputLabel>Street Name</InputLabel>
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Street Name"
                            variant="standard"
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
                            variant="standard"
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
                            variant="standard"
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
                          <InputLabel>Pin code</InputLabel>
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Pin code"
                            variant="standard"
                          />
                        </div>
                        <div className="address_credentials">
                          <InputLabel>Phone Number</InputLabel>
                          <TextField
                            required
                            id="standard-required"
                            placeholder="Phone Number"
                            variant="standard"
                          />
                        </div>
                      </div>
                      <div className="submit_button">
                        <Button variant="contained">Submit</Button>
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

export default AddAddress;
