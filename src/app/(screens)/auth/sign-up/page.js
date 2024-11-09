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
import {
  postApi,
  emailRegex,
  phoneNumberRegex,
  passwordRegex,
} from "../../../../helpers/General";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";
const Validator = require("validatorjs");

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  let defaultValue = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
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
      "emailRegex",
      (value) => emailRegex.test(value),
      "The email format is invalid."
    );

    Validator.register(
      "phoneNumberRegex",
      (value) => {
        return phoneNumberRegex.test(value);
      },
      "The :attribute must be a valid phone number."
    );

    Validator.register(
      "passwordRegex",
      (value) => passwordRegex.test(value),
      "The password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
    );

    const rules = {
      first_name: "required",
      last_name: "required",
      phone_number: "required|phoneNumberRegex|min:10|max:10",
      email: "required|emailRegex",
      password: "required|passwordRegex|min:8|max:20|confirmed",
      password_confirmation: "required",
    };

    const validationErrorMessages = {
      "required.first_name": "The field is required.",
      "required.last_name": "The field is required.",
      "required.phone_number": "The field is required.",
      "phoneNumberRegex.phone_number": "The phonenumber format is invalid.",
      "min.phone_number": "The phonenumber must be at least 10 characters.",
      "max.phone_number":
        "The phonenumber may not be greater than 10 characters.",
      "required.email": "The field is required.",
      "emailRegex.email": "The email format is invalid.",
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
        const response = await postApi("user/sign-up", formData);
        if (response && response.status) {
          toast.success(response.message);
          setFormData(defaultValue);
          dispatch(setAuthUserData(response.data.token));
          router.push("/auth/otp-verification?redirectTo=/auth/login");
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
                    <Typography variant="h5">Lets Start!</Typography>
                  </div>
                  <div className="login_description">
                    <Typography variant="h6">
                      Already have an account?{" "}
                      <Link href="/auth/login">Sign In</Link>
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials">
                      <InputLabel required>First Name</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter First Name"
                        name="first_name"
                        value={formData.first_name || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.first_name}
                        helperText={
                          errors.first_name ? errors.first_name[0] : ""
                        }
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Last Name</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Last Name"
                        name="last_name"
                        value={formData.last_name || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.last_name}
                        helperText={errors.last_name ? errors.last_name[0] : ""}
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Contact Number</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Contact Number"
                        name="phone_number"
                        value={formData.phone_number || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.phone_number}
                        helperText={
                          errors.phone_number ? errors.phone_number[0] : ""
                        }
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Email Address</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Email Address"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email[0] : ""}
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password[0] : ""}
                      />
                    </div>
                    <div className="login_credentials">
                      <InputLabel required>Confirm Password</InputLabel>
                      <TextField
                        required
                        id="standard-required"
                        placeholder="Re-enter Password"
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
                      />
                    </div>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
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
