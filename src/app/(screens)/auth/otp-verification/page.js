"use client";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import OtpInput from "react-otp-input";
import "../../../../../public/sass/pages/login.scss";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import { postApi } from "../../../../helpers/General";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";
const Validator = require("validatorjs");

const OtpVerification = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/auth/login";
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  let defaultValue = {
    token: "",
    otp: "",
  };

  const [formData, setFormData] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [resendCount, setResendCount] = useState(0);
  const MAX_RESEND_ATTEMPTS = 5;
  const token = useSelector((state) => state.auth.data);

  const handleChange = (otpValue) => {
    setOtp(otpValue);
    setFormData((prevData) => ({
      ...prevData,
      otp: otpValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      otp: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rules = {
      token: "required",
      otp: "required",
    };

    const validationErrorMessages = {
      "required.token": "The token field is required.",
      "required.otp": "The OTP field is required.",
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      setErrors(validation.errors.all());
    } else {
      try {
        const response = await postApi("user/verify-otp", {
          ...formData,
          isResetPassword: redirectTo === "/auth/reset-password",
        });
        if (response && response.status) {
          setOtp("");
          setFormData(defaultValue);
          toast.success(response.message);
          console.log(response.data.email_verified);
          if (redirectTo === "/auth/login") {
            dispatch(setAuthUserData(response.data.login_token));
            router.push("/auth/login");
          } else if (redirectTo === "/auth/reset-password") {
            dispatch(setAuthUserData(response.data.token));
            router.push("/auth/reset-password");
          }
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Something went wrong, please try again later.");
      }
    }
  };

  const handleResendOTP = async () => {
    if (resendCount >= MAX_RESEND_ATTEMPTS) {
      toast.error(
        "Maximum OTP resend attempts reached. Please check your email."
      );
      return;
    }

    try {
      const response = await postApi("user/resend-otp", {
        token: formData.token,
      });
      if (response && response.data.status) {
        setResendCount(resendCount + 1);
        toast.success("OTP has been resent to your email.");
      } else {
        toast.error("Failed to resend OTP.");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
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
                    <Typography variant="h5">OTP Verification</Typography>
                  </div>
                  <div className="login_description">
                    <Typography variant="h6">
                      Please enter the OTP sent to your registered Email Address
                    </Typography>
                  </div>
                  <div className="login_credentials_parent">
                    <div className="login_credentials otp_input">
                      <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        inputStyle="inputstyle"
                        containerStyle="containerstyle"
                        inputType="tel"
                        renderInput={(props) => <input {...props} />}
                      />
                      {errors.otp && (
                        <Typography color="error" variant="body2">
                          {errors.otp}
                        </Typography>
                      )}
                    </div>
                  </div>
                  <div className="forget_pass_section">
                    <Link href="#" onClick={handleResendOTP}>
                      Resend OTP
                    </Link>
                  </div>
                  <div className="login_btn">
                    <Button variant="contained" type="submit">
                      Submit
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

export default OtpVerification;
