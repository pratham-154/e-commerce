"use client";
import "../../../public/sass/pages/sidebar.scss";
import PersonIcon from "@mui/icons-material/Person";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ProfileImage from "../../../public/images/profile_image.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { postApi } from "../../helpers/General";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthUserData } from "@/providers/redux/reducers/authSlice";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    let resp = await postApi("user/logout");
    console.log("resp", resp);
    if (resp.status) {
      toast.success(resp.message);
      dispatch(
        setAuthUserData({
          login_expiry_at: resp.data.login_expiry_at,
          login_token: resp.data.login_token,
        })
      );
      router.push("/homepage");
    } else {
      toast.error(resp.message);
    }
  };

  const links = [
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

  return (
    <div className="sidebar_parent">
      <div className="profile_box">
        <div className="profile_image">
          <Image
            src={ProfileImage}
            alt="profile_image"
            width={60}
            height={60}
          />
        </div>
        <div className="profile_name">
          <h6>Hello,</h6>
          <h5>Charles </h5>
        </div>
      </div>
      <div className="sidebar_box">
        <ul>
          {links.map((link, index) => {
            const isActive = Array.isArray(link.path)
              ? link.path.some((p) => pathname === p)
              : pathname === link.path;

            return (
              <li key={index}>
                {link.name === "Logout" ? (
                  <Link
                    href={Array.isArray(link.path) ? link.path[0] : link.path}
                    className={isActive ? "active" : ""}
                    onClick={link.onClick}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={Array.isArray(link.path) ? link.path[0] : link.path}
                    className={isActive ? "active" : ""}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
