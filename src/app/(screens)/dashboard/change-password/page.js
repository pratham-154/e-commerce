"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Sidebar from "@/app/components/sidebar";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postApi, passwordRegex } from "../../../../helpers/General";
import { useState } from "react";
import { toast } from "react-toastify";
const Validator = require("validatorjs");

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let defaultValue = {
    old_password: "",
    password: "",
    password_confirmation: "",
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
      "passwordRegex",
      (value) => passwordRegex.test(value),
      "The password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
    );

    const rules = {
      old_password: "required",
      password: "required|passwordRegex|min:8|max:20|confirmed",
      password_confirmation: "required",
    };

    const validationErrorMessages = {
      "required.old_password": "The field is required.",
      "required.password": "The field is required.",
      "passwordRegex.password":
        "The password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.",
      "min.password": "The password must be at least 8 characters.",
      "max.password": "The password may not be greater than 20 characters.",
      "required.password_confirmation": "The field is required.",
      "confirmed.password_confirmation":
        "The password confirmation does not match.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await postApi("user/change-password", formData);
        if (response && response.status) {
          toast.success(response.message);
          setFormData(defaultValue);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        toast.error(" Something went wrong please try after some time ");
        console.error("Error submitting form:", error);
      }
    }
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
                  <div className="my_profile_parent change_password_parent">
                    <div className="change_password_heading">
                      <h3>Change Password</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="change_password_form">
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-required"
                            label="Old Password"
                            placeholder="Old Password"
                            name="old_password"
                            value={formData.old_password || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.old_password}
                            helperText={
                              errors.old_password ? errors.old_password[0] : ""
                            }
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
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-required-1"
                            label="New Password"
                            placeholder="New Password"
                            name="password"
                            value={formData.password || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.password}
                            helperText={
                              errors.password ? errors.password[0] : ""
                            }
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
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="change_password_textfield">
                          <TextField
                            id="standard-required-2"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            name="password_confirmation"
                            value={formData.password_confirmation || ""}
                            onChange={handleChange}
                            variant="standard"
                            error={!!errors.password_confirmation}
                            helperText={
                              errors.password_confirmation
                                ? errors.password_confirmation[0]
                                : ""
                            }
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
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="change_password_button">
                          <Button variant="text" type="reset">
                            Cancel
                          </Button>
                          <Button variant="contained" type="submit">
                            Submit
                          </Button>
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
