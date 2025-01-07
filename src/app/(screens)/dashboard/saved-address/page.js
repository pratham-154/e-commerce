"use client";
import Image from "next/image";
import "../../../../../public/sass/pages/my_profile.scss";
import { Button, Container, Grid, Radio } from "@mui/material";
import TopDesign from "../../../../../public/images/account_top_design.png";
import BottomDesign from "../../../../../public/images/account_bottom_design.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "@/app/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getApi, deleteApi } from "../../../../helpers/General";
import { toast } from "react-toastify";

const SavedAddress = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("a");

  let getData = async () => {
    let resp = await getApi("address/view");

    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setPageData(data.data);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (pageData && pageData.length > 0) {
      setSelectedValue(pageData[0]._id);
    }
  }, [pageData]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = async (_id) => {
    let resp = await deleteApi(`address/delete/${_id}`);
    if (resp.status) {
      toast.success(resp.message);
      setPageData((prevData) => prevData.filter((data) => data._id !== _id));
    } else {
      toast.error(resp.message || "Failed to delete the address");
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
                  <div className="my_profile_parent address_parent">
                    <div className="address_heading">
                      <h3>Saved Address</h3>
                    </div>
                    <div className="address_select_parent">
                      {pageData.map((data, index) => (
                        <div className="address_select" key={index}>
                          <div className="address_radio">
                            <Radio
                              checked={selectedValue === data._id}
                              onChange={handleChange}
                              value={data._id}
                              name="radio-buttons"
                              inputProps={{
                                "aria-label": `Address-${index + 1}`,
                              }}
                            />
                          </div>
                          <div className="address_details_parent">
                            <div className="address_details">
                              <h5>{`${data.user_id.first_name} ${data.user_id.last_name}`}</h5>
                              {/* <span>Home</span> */}
                            </div>
                            <h6>
                              {`${data.house}, ${data.street}, ${data.city}, ${data.state} - ${data.pincode}`}
                            </h6>
                          </div>
                          <div className="address_icons">
                            <EditCalendarIcon
                              onClick={() =>
                                router.push(`/edit-address?_id=${data._id}`)
                              }
                            />
                            <DeleteIcon
                              onClick={() => handleDelete(data._id)}
                            />
                          </div>
                        </div>
                      ))}
                      <Button
                        variant="contained"
                        onClick={() => router.push("/add-address")}
                      >
                        Add New Address
                      </Button>
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

export default SavedAddress;
