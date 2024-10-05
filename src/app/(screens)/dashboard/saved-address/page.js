"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import { Container, Grid, Radio } from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "@/app/components/sidebar";
import { useState } from "react";

const SavedAddress = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
                  <div className="my_profile_parent address_parent">
                    <div className="address_heading">
                      <h3>Saved Address</h3>
                    </div>
                    <div className="address_select_parent">
                      <div className="address_select">
                        <div className="address_radio">
                          <Radio
                            checked={selectedValue === "a"}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ "aria-label": "A" }}
                          />
                        </div>
                        <div className="address_details_parent">
                          <div className="address_details">
                            <h5>Charles Smith</h5>
                            <span>Home</span>
                          </div>
                          <h6>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </h6>
                        </div>
                        <div className="address_icons">
                          <EditCalendarIcon />
                          <DeleteIcon />
                        </div>
                      </div>
                      <div className="address_select">
                        <div className="address_radio">
                          <Radio
                            checked={selectedValue === "b"}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ "aria-label": "B" }}
                          />
                        </div>
                        <div className="address_details_parent">
                          <div className="address_details">
                            <h5>Charles Smith</h5>
                            <span>Office</span>
                          </div>
                          <h6>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </h6>
                        </div>
                        <div className="address_icons">
                          <EditCalendarIcon />
                          <DeleteIcon />
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

export default SavedAddress;
