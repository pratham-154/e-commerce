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
import "../../../../../public/sass/pages/login.scss";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import Google from "../../../../../public/images/google.png";
import Facebook from "../../../../../public/images/facebook.png";

const SignUp = () => {
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
                    <Typography variant="h5">Lets Start!</Typography>
                  </div>
                  <div className="login_description">
                    <Typography varient="h6">
                      Already have an account?{" "}
                      <Link href="/auth/login">Sign In</Link>
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials">
                      <InputLabel required>Name</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Name"
                        variant="standard"
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Contact Number</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Contact Number"
                        variant="standard"
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Email Address</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Email Address"
                        variant="standard"
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Password"
                        variant="standard"
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>confirm Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Re-enter Password"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained">Submit</Button>
                  </div>
                  <div className="lined_or">
                    <Typography variant="h6">or</Typography>
                  </div>
                  <div className="login_other">
                    <div className="login_other_section">
                      <Link href="https://www.google.com/">
                        <div className="login_other_img">
                          <Image
                            src={Google}
                            alt="google"
                            height={54}
                            width={53.27}
                          />
                        </div>
                        <div className="login_other_text">
                          <Typography variant="h6">
                            Continue with Google
                          </Typography>
                        </div>
                      </Link>
                    </div>
                    <div className="login_other_section">
                      <Link href="https://www.facebook.com/">
                        <div className="login_other_img">
                          <Image
                            src={Facebook}
                            alt="facebook"
                            height={54}
                            width={53.27}
                          />
                        </div>
                        <div className="login_other_text">
                          <Typography variant="h6">
                            Continue with Facebook
                          </Typography>
                        </div>
                      </Link>
                    </div>
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

export default SignUp;
