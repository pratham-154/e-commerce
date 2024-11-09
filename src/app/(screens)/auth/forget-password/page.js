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
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { emailRegex } from "../../../../helpers/General";
import { postApi } from "../../../../helpers/General";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";
const Validator = require("validatorjs");

const ForgetPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  let defaultValue = {
    email: "",
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
    };

    const validationErrorMessages = {
      "required.email": "The field is required.",
      "emailRegex.email": "The email format is invalid.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await postApi("user/forget-password", formData);
        if (response && response.status) {
          setFormData(defaultValue);
          toast.success(response.message);
          dispatch(setAuthUserData(response.data.token));
          router.push("/auth/otp-verification?redirectTo=/auth/reset-password");
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
                    <Typography variant="h5">ForgetPassword?</Typography>
                  </div>
                  <div className="login_description">
                    <Typography variant="h6">
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
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        variant="standard"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email[0] : ""}
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
                    <Button variant="contained" type="submit">
                      Submit
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

export default ForgetPassword;
