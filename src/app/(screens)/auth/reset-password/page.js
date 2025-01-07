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
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { passwordRegex } from "../../../../helpers/General";
import { postApi } from "../../../../helpers/General";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";
const Validator = require("validatorjs");

const ResetPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let defaultValue = {
    token: "",
    password: "",
    password_confirmation: "",
  };

  let [formData, setFormData] = useState(defaultValue);
  let [errors, setErrors] = useState({});
  let token = useSelector((state) => state.auth.data);

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
      token: "required",
      password: "required|passwordRegex|min:8|max:20|confirmed",
      password_confirmation: "required",
    };

    const validationErrorMessages = {
      "required.token": "The token field is required.",
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
        const response = await postApi("user/reset-password", formData);
        if (response && response.status) {
          setFormData(defaultValue);
          toast.success(response.message);
          dispatch(setAuthUserData(response.data.token));
          router.push("/auth/login");
        } else {
          console.log(response.message);
        }
      } catch (error) {
        toast.error(" Something went wrong please try after some time ");
        console.error("Error submitting form:", error);
      }
    }
  };

  useEffect(() => {
    setFormData({ ...formData, token: token });
  }, [token]);

  return (
    <div className="login_section">
      <div className="top_effect">
        <Image src={TopEffect} alt="top_effect" />
      </div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="login_parent">
              <div className="login_box">
                <form onSubmit={handleSubmit}>
                  <div className="login_text">
                    <Typography variant="h5">ResetPassword</Typography>
                  </div>
                  <div className="login_description">
                    <Typography variant="h6">
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
                    <div className="login_credentials">
                      <InputLabel required>Confirm Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Confirm Password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password[0] : ""}
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
                  </div>
                  <div className="login_btn">
                    <Button variant="contained" type="submit">
                      reset
                    </Button>
                  </div>
                  <div className="login_btn cancel_btn">
                    <Button
                      variant="contained"
                      type="button"
                      onClick={() => router.push("/auth/login")}
                    >
                      Cancel
                    </Button>
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
