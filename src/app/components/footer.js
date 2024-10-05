import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";
import "../../../public/sass/pages/footer.scss";
import FooterLogo from "../../../public/images/footer_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer_section">
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="footer_parent">
              <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                  <div className="footer_logo">
                    <Image
                      src={FooterLogo}
                      alt="footer_logo"
                      height={160}
                      width={139}
                    />
                  </div>
                </Grid>
                <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                      <div className="footer_content social_icons">
                        <h3 className="heading">Follow US</h3>
                        <ul className="heading_list">
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              <FacebookIcon className="facebook_icon" />
                              Facebook
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              <InstagramIcon className="instagram_icon" />
                              Instagram
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              <TwitterIcon className="twitter_icon" />
                              Twitter
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                      <div className="footer_content">
                        <h3 className="heading">Services</h3>
                        <ul className="heading_list">
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              {/* <KeyboardDoubleArrowRightRoundedIcon className="arrow_icon" /> */}
                              Products
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              Collections
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                      <div className="footer_content">
                        <h3 className="heading">Useful Links</h3>
                        <ul className="heading_list">
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              Terms & Conditions
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              FAQ's
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                      <div className="footer_content">
                        <h3 className="heading">Quick Links</h3>
                        <ul className="heading_list">
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              Cancellations
                            </Link>
                          </li>
                          <li className="heading_list_items">
                            <Link className="heading_list_content" href="#">
                              Returns
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
