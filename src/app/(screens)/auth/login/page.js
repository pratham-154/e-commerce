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
import { emailRegex, passwordRegex } from "../../../../helpers/General";
import { postApi } from "../../../../helpers/General";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";
const Validator = require("validatorjs");

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  let defaultValue = {
    email: "",
    password: "",
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

    const rules = {
      email: "required|emailRegex",
      password: "required|min:8|max:20",
    };

    const validationErrorMessages = {
      "required.email": "The field is required.",
      "emailRegex.email": "The email format is invalid.",
      "required.password": "The field is required.",
      "min.password": "The password must be at least 8 characters.",
      "max.password": "The password may not be greater than 20 characters.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await postApi("user/sign-in", formData);
        if (response && response.status) {
          setFormData(defaultValue);
          toast.success(response.message);
          dispatch(
            setAuthUserData({
              first_name: response.data.first_name,
              login_expiry_at: response.data.login_expiry_at,
              login_token: response.data.login_token,
              image: response.data.image,
            })
          );
          router.push("/homepage");
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
        <Image src={TopEffect} alt="top_effect" priority={false} />
      </div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="login_parent">
              <div className="login_box">
                <form onSubmit={handleSubmit}>
                  <div className="login_text">
                    <Typography variant="h5">Welcome Back!</Typography>
                  </div>
                  <div className="login_description">
                    <Typography variant="h6">
                      Don't have an account?{" "}
                      <Link href="/auth/sign-up">Sign Up</Link>
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
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
                  </div>
                  <div className="forget_pass_section">
                    <Link href="/auth/forget-password">Forget Password?</Link>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained" type="submit">
                      Login
                    </Button>
                  </div>
                  {/* <div className="lined_or">
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
                  </div> */}
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="bottom_effect">
        <Image src={BottomEffect} alt="top_effect" priority={false} />
      </div>
    </div>
  );
};

export default Login;
