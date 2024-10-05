"use client";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import "../../../../../public/sass/pages/login.scss";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                    <Typography variant="h5">ResetPassword</Typography>
                  </div>
                  <div className="login_description">
                    <Typography varient="h6">
                      Strong password include numbers, letters and special
                      symbols.
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials">
                      <InputLabel required>New Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter New Password"
                        variant="standard"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Confirm Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Confirm Password"
                        variant="standard"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained">reset</Button>
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

export default ResetPassword;
