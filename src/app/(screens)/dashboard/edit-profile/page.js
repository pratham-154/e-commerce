"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ProfileImage from "../../../../../public/images/profile_image.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Container, Grid, Button, TextField } from "@mui/material";
import Sidebar from "@/app/components/sidebar";
import {
  putApi,
  postApi,
  deleteApi,
  getApi,
  emailRegex,
  phoneNumberRegex,
} from "../../../../helpers/General";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
const Validator = require("validatorjs");

const EditProfile = () => {
  const router = useRouter();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "circle(50%)",
    height: 1,
    width: 1,
    borderRadius: "50%",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
  });

  let defaultValue = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  };

  let [data, setData] = useState(defaultValue);
  let [errors, setErrors] = useState({});
  let imagePath =
    data?.image && data.image !== ""
      ? `http://localhost:4001/${data.image}`
      : ProfileImage;

  let getData = async () => {
    let resp = await getApi("user/view");

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setData(data.data);
      }
    } else {
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const base64File = await getBase64(file);
      const previousImage = data.image;

      if (previousImage) {
        const deleteResponse = await deleteApi("uploads/deleteImage", {
          image: previousImage,
        });

        if (deleteResponse.status) {
          console.log("Previous image deleted successfully!");
        } else {
          console.error(
            "Failed to delete previous image:",
            deleteResponse.message
          );
        }
      }

      const uploadResponse = await postApi("uploads/uploadImage", {
        image: base64File,
        folder_name: "profile_image",
      });

      if (uploadResponse.status) {
        setData((prevData) => ({
          ...prevData,
          image: uploadResponse.imageUrl,
        }));
        toast.success("Image uploaded successfully!");
      } else {
        toast.error(uploadResponse.message);
      }
    } catch (error) {
      console.error("Error handling image change:", error);
      toast.error("Something went wrong during image upload");
    }
  };

  const handleDeleteImage = async () => {
    try {
      const image = data.image;

      if (!image) {
        toast.error("No image to delete");
        return;
      }

      const response = await deleteApi("uploads/deleteImage", {
        image,
      });

      if (response.status) {
        setData((prevData) => ({
          ...prevData,
          image: "",
        }));
        toast.success("Image deleted successfully!");
      } else {
        toast.error(response.message || "Failed to delete image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Something went wrong while deleting the image");
    }
  };

  const getBase64 = (file) =>
    new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
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
    let formData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      image: data.image,
    };

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

    const rules = {
      first_name: "required",
      last_name: "required",
      phone_number: "required|phoneNumberRegex|min:10|max:10",
      email: "required|emailRegex",
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
    };

    const validation = new Validator(formData, rules, validationErrorMessages);
    if (validation.fails()) {
      const validationErrors = validation.errors.all();
      setErrors(validationErrors);
    } else {
      try {
        const response = await putApi("user/update", formData);
        if (response && response.status) {
          toast.success(response.message);
          setData(defaultValue);
          router.push("/dashboard/my-profile");
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
                  <div className="my_profile_parent edit_profile_parent">
                    <div className="edit_profile_child">
                      <div className="edit_profile_heading">
                        <h3>My Profile</h3>
                      </div>
                      <div className="edit_profile_body">
                        <div className="edit_profile">
                          <div className="edit_profile_image_parent">
                            <div className="edit_profile_image">
                              <Button
                                variant="text"
                                onClick={handleDeleteImage}
                              >
                                <CancelRoundedIcon />
                              </Button>
                              <Image
                                src={imagePath}
                                alt="profile_image"
                                width={85}
                                height={85}
                                loading="lazy"
                              />
                              <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                              >
                                <EditRoundedIcon />
                                <VisuallyHiddenInput
                                  type="file"
                                  onChange={handleImageChange}
                                />
                              </Button>
                            </div>
                          </div>
                          <h4>{data.first_name}</h4>
                          <h6>Edit your personal information</h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="edit_profile_form">
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="First Name"
                                name="first_name"
                                value={data.first_name || ""}
                                onChange={handleChange}
                                variant="standard"
                                error={!!errors.first_name}
                                helperText={
                                  errors.first_name ? errors.first_name[0] : ""
                                }
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Last Name"
                                name="last_name"
                                value={data.last_name || ""}
                                onChange={handleChange}
                                variant="standard"
                                error={!!errors.last_name}
                                helperText={
                                  errors.last_name ? errors.last_name[0] : ""
                                }
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Email"
                                name="first_name"
                                value={data.email || ""}
                                onChange={handleChange}
                                variant="standard"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email[0] : ""}
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Phone Number"
                                name="phone_number"
                                value={data.phone_number || ""}
                                onChange={handleChange}
                                variant="standard"
                                error={!!errors.phone_number}
                                helperText={
                                  errors.phone_number
                                    ? errors.phone_number[0]
                                    : ""
                                }
                              />
                            </div>
                          </div>
                          <div className="button_parent">
                            <Button
                              variant="text"
                              type="button"
                              onClick={() =>
                                router.push("/dashboard/my-profile")
                              }
                            >
                              Cancel
                            </Button>
                            <Button variant="contained" type="submit">
                              Save Changes
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default EditProfile;
