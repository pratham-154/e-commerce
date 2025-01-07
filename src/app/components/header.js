"use client";
import Image from "next/image";
import { Container, Grid, Icon, IconButton } from "@mui/material";
import "../../../public/sass/pages/header.scss";
import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import ProfileImage from "../../../public/images/profile_image.png";
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
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "../../helpers/General";
import { toast } from "react-toastify";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const user = useSelector((state) => state.auth.data);
  const login_token = user?.login_token;
  let imagePath =
    user?.image && user.image !== ""
      ? `http://localhost:4001/${user.image}`
      : ProfileImage;

  const handleLogout = async () => {
    let resp = await postApi("user/logout");
    console.log("resp", resp);
    if (resp.status) {
      toast.success(resp.message);
      dispatch(
        setAuthUserData({
          token: resp.data.token,
          login_expiry_at: resp.data.login_expiry_at,
          login_token: resp.data.login_token,
        })
      );
      router.push("/homepage");
    } else {
      toast.error(resp.message);
    }
  };

  const nav = [
    { name: "Home", path: "/homepage" },
    // { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Products", path: "/products" },
    // { name: "Collections", path: "/collection" },
    { name: "About Us", path: "/about-us" },
  ];

  const menus = [
    {
      icon: <HomeRoundedIcon />,
      name: "Home",
      path: "/homepage",
    },
    // {
    //   icon: <VerifiedUserRoundedIcon />,
    //   name: "New Arrivals",
    //   path: "/new-arrivals",
    // },
    {
      icon: <InventoryRoundedIcon />,
      name: "Products",
      path: "/products",
    },
    // {
    //   icon: <CollectionsRoundedIcon />,
    //   name: "Collections",
    //   path: "/collection",
    // },
    {
      icon: <InfoRoundedIcon />,
      name: "About Us",
      path: "/about-us",
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
    {
      icon: <ExitToAppRoundedIcon />,
      name: "Logout",
      path: "/homepage",
      onClick: handleLogout,
    },
  ];

  const closeMenu = () => {
    setShow(false);
  };

  const handleLinkClick = (path) => {
    setActivePath(path);
    closeMenu();
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
                    {/* <li className="icons_body">
                      <SearchIcon className="icons" />
                    </li> */}
                    <li className="icons_body">
                      <FavoriteBorderRoundedIcon
                        className="icons"
                        onClick={() => router.push("/dashboard/my-wishlist")}
                      />
                    </li>
                    <li className="icons_body">
                      <ShoppingCartOutlinedIcon
                        className="icons"
                        onClick={() => router.push("/my-cart")}
                      />
                    </li>
                  </ul>
                </div>
                <div className="right_side_tab">
                  <ul className="right_side_menu">
                    {!login_token ? (
                      <>
                        <li className="login">
                          <Link className="login_btn" href="/auth/login">
                            Login
                          </Link>
                        </li>
                        <li className="sign_up">
                          <Link className="sign_up_btn" href="/auth/sign-up">
                            Sign Up
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          className="profile_btn"
                          href="/dashboard/my-profile"
                          passHref
                        >
                          <div className="profile_image">
                            <Image
                              src={imagePath}
                              alt="profile_image"
                              width={20}
                              height={20}
                              priority={false}
                            />
                          </div>
                          Hi, {user.first_name}
                        </Link>
                      </li>
                    )}
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
                    <Link
                      href={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={activePath === item.path ? "active" : ""}
                    >
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
                          ? menu.path.includes(activePath)
                          : activePath === menu.path;
                        return (
                          <li key={index}>
                            <Link
                              href={
                                Array.isArray(menu.path)
                                  ? menu.path[0]
                                  : menu.path
                              }
                              className={isActive ? "active" : ""}
                              onClick={(e) => {
                                if (menu.onClick) {
                                  e.preventDefault();
                                  menu.onClick();
                                } else {
                                  handleLinkClick(
                                    Array.isArray(menu.path)
                                      ? menu.path[0]
                                      : menu.path
                                  );
                                }
                              }}
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
                        {!login_token ? (
                          <>
                            <li className="menu_login">
                              <Link
                                className="menu_login_btn"
                                href="/auth/login"
                              >
                                Login
                              </Link>
                            </li>
                            <li className="menu_sign_up">
                              <Link
                                className="menu_sign_up_btn"
                                href="/auth/sign-up"
                              >
                                Sign Up
                              </Link>
                            </li>
                          </>
                        ) : (
                          <li>
                            <Link
                              className="profile_btn"
                              href="/dashboard/my-profile"
                              passHref
                            >
                              <div className="profile_image">
                                <Image
                                  src={imagePath}
                                  alt="profile_image"
                                  width={20}
                                  height={20}
                                  priority={false}
                                />
                              </div>
                              Hi, {user.first_name}
                            </Link>
                          </li>
                        )}
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
