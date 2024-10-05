"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import { Button, Container, Grid, TextField } from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Sidebar from "@/app/components/sidebar";

const ChangePassword = () => {
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
                  <div className="my_profile_parent change_password_parent">
                    <div className="change_password_heading">
                      <h3>Change Password</h3>
                    </div>
                    <form>
                      <div className="change_password_form">
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-password-input"
                            label="Old Password"
                            type="password"
                            placeholder="Old Password"
                            autoComplete="current-password"
                            variant="standard"
                          />
                        </div>
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-password-input"
                            label="New Password"
                            type="password"
                            placeholder="New Password"
                            autoComplete="current-password"
                            variant="standard"
                          />
                        </div>
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm Password"
                            autoComplete="current-password"
                            variant="standard"
                          />
                        </div>
                        <div className="change_password_button">
                          <Button variant="text">Cancel</Button>
                          <Button variant="contained">Submit</Button>
                        </div>
                      </div>
                    </form>
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

export default ChangePassword;
