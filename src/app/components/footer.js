"use client";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
import "../../../public/sass/pages/footer.scss";
import FooterLogo from "../../../public/images/footer_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const services = [
    // {
    //   path: "/new-arrivals",
    //   name: "New Arrivals",
    // },
    {
      path: "/products",
      name: "Product",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
  ];

  const usefulLinks = [
    {
      path: "/cms/t&c",
      name: "Terms & Conditions",
    },
    {
      path: "/cms/privacy-policy",
      name: "Privacy Policy",
    },
    {
      path: "/cms/faq",
      name: "FAQ's",
    },
  ];

  const quickLinks = [
    {
      path: "#",
      name: "Cancelations",
    },
    {
      path: "#",
      name: "Returns",
    },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

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
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={6}>
                      <div className="footer_content social_icons">
                        <h3>Follow Us</h3>
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/">
                              <FacebookIcon className="facebook_icon" />
                              Facebook
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/">
                              <InstagramIcon className="instagram_icon" />
                              Instagram
                            </Link>
                          </li>
                          <li>
                            <Link href="https://x.com/?lang=en">
                              <TwitterIcon className="twitter_icon" />
                              Twitter
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={6}>
                      <div className="footer_content">
                        <h3>Services</h3>
                        <ul>
                          {services.map((item, index) => (
                            <li
                              className={
                                activeLink === item.path ? "active" : ""
                              }
                              key={index}
                            >
                              <Link
                                href={item.path}
                                onClick={() => handleLinkClick(item.path)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={6}>
                      <div className="footer_content">
                        <h3>Useful Links</h3>
                        <ul>
                          {usefulLinks.map((item, index) => (
                            <li
                              className={
                                activeLink === item.path ? "active" : ""
                              }
                              key={index}
                            >
                              <Link
                                href={item.path}
                                onClick={() => handleLinkClick(item.path)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Grid>
                    {/* <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                      <div className="footer_content">
                        <h3>Quick Links</h3>
                        <ul>
                          {quickLinks.map((item, index) => (
                            <li
                              className={
                                activeLink === item.path ? "active" : ""
                              }
                              key={index}
                            >
                              <Link
                                href={item.path}
                                onClick={() => handleLinkClick(item.path)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Grid> */}
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
