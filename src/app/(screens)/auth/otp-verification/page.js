"use client";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import OtpInput from "react-otp-input";
import "../../../../../public/sass/pages/login.scss";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";

const OtpVerification = () => {
  const [otp, setOtp] = useState('');

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
                    <Typography variant="h5">OTP Verification</Typography>
                  </div>
                  <div className="login_description">
                    <Typography varient="h6">
                      Please enter the OTP sent to your registered Email Address
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials otp_input">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputStyle={"inputstyle"}
                        containerStyle={"containerstyle"}
                        inputType="tel"
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>
                  </div>
                  <div className="forget_pass_section">
                    <Link href="#">Resend OTP</Link>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained">Submit</Button>
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

export default OtpVerification;
