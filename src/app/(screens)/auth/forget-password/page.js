"use client";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import "../../../../../public/sass/pages/login.scss";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const ForgetPassword = () => {
  return (
    <div className="login_section">
      <div className="top_effect">
        <Image src={TopEffect} alt="top_effect" />
      </div>
      <Container>
        <Grid container>
          <Grid items xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="login_parent">
              <div className="login_box">
                <form>
                  <div className="login_text">
                    <Typography variant="h5">ForgetPassword?</Typography>
                  </div>
                  <div className="login_description">
                    <Typography varient="h6">
                      Please enter the email address you use when creating your
                      account, We'll send you the instructions to reset your
                      password
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials">
                      <InputLabel required>Email Address</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Email Address"
                        variant="standard"
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <MailOutlineRoundedIcon />
                              </InputAdornment>
                            ),
                          }}
                      />
                    </div>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained">Submit</Button>
                  </div>
                  <div className="login_btn cancel_btn">
                    <Button variant="contained">Cancel</Button>
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="bottom_effect">
        <Image src={BottomEffect} alt="top_effect" />
      </div>
    </div>
  );
};

export default ForgetPassword;
