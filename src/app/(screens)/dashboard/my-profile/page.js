"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import { Button, Container, Grid } from "@mui/material";
import ProfileImage from "../../../../../public/images/profile_image.png";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import Sidebar from "@/app/components/sidebar";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/dashboard/edit-profile");
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
                  <div className="my_profile_parent">
                    <div className="my_profile_heading">
                      <h3>My Profile</h3>
                    </div>
                    <div className="my_profile_box">
                      <div className="my_profile_about">
                        <div className="my_profile_image">
                          <Image
                            src={ProfileImage}
                            alt="profile_image"
                            width={80}
                            height={80}
                          />
                        </div>
                        <div className="my_profile_name_parent">
                          <div className="my_profile_name">
                            <h4>Charles</h4>
                            <h6>Manage your personal information</h6>
                          </div>
                          <div className="edit_button">
                            <Button
                              variant="contained"
                              endIcon={<EditCalendarRoundedIcon />}
                              onClick={handleButtonClick}
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="personal_information_parent">
                        <div className="personal_information_heading">
                          <h6>Personal Information</h6>
                          <div className="personal_information_credentials_parent">
                            <div className="personal_information_credentials">
                              <h6>First Name</h6>
                              <h5>Charles</h5>
                            </div>
                            <div className="personal_information_credentials">
                              <h6>Last Name</h6>
                              <h5>Smith</h5>
                            </div>
                          </div>
                          <div className="personal_information_credentials_parent">
                            <div className="personal_information_credentials">
                              <h6>Email Address</h6>
                              <h5>charlesmith@gmail.com</h5>
                            </div>
                            <div className="personal_information_credentials">
                              <h6>Phone</h6>
                              <h5>1234567756</h5>
                            </div>
                          </div>
                        </div>
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

export default MyProfile;
