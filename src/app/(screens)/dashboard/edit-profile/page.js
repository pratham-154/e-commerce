import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ProfileImage from "../../../../../public/images/profile_image.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Container, Grid, Button, TextField } from "@mui/material";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";

const EditProfile = () => {
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
                              <Link href="#">
                                <CancelRoundedIcon />
                              </Link>
                              <Image
                                src={ProfileImage}
                                alt="profile_image"
                                width={85}
                                height={85}
                              />
                            </div>
                          </div>
                          <h4>Charles </h4>
                          <h6>Edit your personal information</h6>
                        </div>
                        <form>
                          <div className="edit_profile_form">
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="First Name"
                                variant="standard"
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Last Name"
                                variant="standard"
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Email"
                                variant="standard"
                              />
                            </div>
                            <div className="edit_profile_form_field">
                              <TextField
                                id="standard-basic"
                                placeholder="Phone Number"
                                variant="standard"
                              />
                            </div>
                          </div>
                          <div className="button_parent">
                            <Button variant="text">Cancel</Button>
                            <Button variant="contained">Save Changes</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <div className="my_profile_parent address_parent">
                    <div className="address_heading">
                      <h3>Saved Address</h3>
                    </div>
                    <div className="address_select_parent">
                      <div className="address_select">
                        <div className="address_radio">
                          <Radio
                            checked={selectedValue === "a"}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ "aria-label": "A" }}
                          />
                        </div>
                        <div className="address_details_parent">
                          <div className="address_details">
                            <h5>Charles Smith</h5>
                            <span>Home</span>
                          </div>
                          <h6>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </h6>
                        </div>
                        <div className="address_icons">
                          <EditCalendarIcon />
                          <DeleteIcon />
                        </div>
                      </div>
                      <div className="address_select">
                        <div className="address_radio">
                          <Radio
                            checked={selectedValue === "b"}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ "aria-label": "B" }}
                          />
                        </div>
                        <div className="address_details_parent">
                          <div className="address_details">
                            <h5>Charles Smith</h5>
                            <span>Office</span>
                          </div>
                          <h6>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </h6>
                        </div>
                        <div className="address_icons">
                          <EditCalendarIcon />
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  </div> */}
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
