"use client";
import Image from "next/image";
import { Container, Grid, Icon, IconButton } from "@mui/material";
import "../../../public/sass/pages/header.scss";
import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PersonIcon from "@mui/icons-material/Person";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(false);

  const nav = [
    { name: "Home", path: "#" },
    { name: "New Arrivals", path: "#" },
    { name: "Products", path: "#" },
    { name: "Collections", path: "#" },
    { name: "About Us", path: "#" },
  ];

  const pathname = usePathname();

  const menus = [
    {
      icon: <HomeRoundedIcon />,
      name: "Home",
      path: "#",
    },
    {
      icon: <VerifiedUserRoundedIcon />,
      name: "New Arrivals",
      path: "#",
    },
    {
      icon: <InventoryRoundedIcon />,
      name: "Products",
      path: "#",
    },
    {
      icon: <CollectionsRoundedIcon />,
      name: "Collections",
      path: "#",
    },
    {
      icon: <InfoRoundedIcon />,
      name: "About Us",
      path: "#",
    },
    {
      icon: <PersonIcon />,
      name: "My Profile",
      path: ["/dashboard/my-profile", "/dashboard/edit-profile"],
    },
    {
      icon: <ContentPasteIcon />,
      name: "My Order",
      path: ["/dashboard/my-order", "/dashboard/order-details"],
    },
    {
      icon: <FavoriteBorderRoundedIcon />,
      name: "My Wishlist",
      path: "/dashboard/my-wishlist",
    },
    {
      icon: <PersonPinCircleRoundedIcon />,
      name: "Saved Address",
      path: "/dashboard/saved-address",
    },
    {
      icon: <PasswordRoundedIcon />,
      name: "Change Password",
      path: "/dashboard/change-password",
    },
    { icon: <ExitToAppRoundedIcon />, name: "Logout", path: "/homepage" },
  ];

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <div className="header_section">
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="header_parent">
              <div className="logo">
                <Image src={Logo} alt="logo" height={68} width={164} />
              </div>
              <div className="side_tab">
                <div className="left_side_tab">
                  <ul className="left_side_menu">
                    <li className="icons_body">
                      <SearchIcon className="icons" />
                    </li>
                    <li className="icons_body">
                      <FavoriteBorderRoundedIcon className="icons" />
                    </li>
                    <li className="icons_body">
                      <ShoppingCartOutlinedIcon className="icons" />
                    </li>
                  </ul>
                </div>
                <div className="right_side_tab">
                  <ul className="right_side_menu">
                    <li className="login">
                      <Link className="login_btn" href="#">
                        Login
                      </Link>
                    </li>
                    <li className="sign_up">
                      <Link className="sign_up_btn" href="#">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_bar">
                  <Icon onClick={() => setShow(true)}>
                    <Menu />
                  </Icon>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="header_nav">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <ul className="nav_bar">
                {nav.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} onClick={closeMenu}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Container>
        {show ? (
          <div className="responsive_header">
            <Container>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="menu_parent">
                    <div className="menu_header">
                      <div className="menu_logo">
                        <Image src={Logo} alt="logo" height={68} width={164} />
                      </div>
                      <div className="close_btn">
                        <IconButton onClick={closeMenu}>
                          <Close className="close_icon" />
                        </IconButton>
                      </div>
                    </div>
                    <ul className="menu_bar">
                      {menus.map((menu, index) => {
                        const isActive = Array.isArray(menu.path)
                          ? menu.path.some((p) => pathname === p)
                          : pathname === menu.path;

                        return (
                          <li key={index}>
                            <Link
                              href={
                                Array.isArray(menu.path)
                                  ? menu.path[0]
                                  : menu.path
                              }
                              className={isActive ? "active" : ""}
                              onClick={closeMenu}
                            >
                              {menu.icon}
                              {menu.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="menu_side_tab">
                      <ul className="menu_side_menu">
                        <li className="menu_login">
                          <Link className="menu_login_btn" href="#">
                            Login
                          </Link>
                        </li>
                        <li className="menu_sign_up">
                          <Link className="menu_sign_up_btn" href="#">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
