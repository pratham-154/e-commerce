"use client";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import "../../../public/sass/pages/error.scss";
import PageNotFound from "../../../public/images/page_not_found.png";
import TopDesign from "../../../public/images/error_top_design.png";
import BottomDesign from "../../../public/images/error_bottom_design.png";

const NotFound = () => {
  return (
    <div className="error_section">
      <div className="error_top_design">
        <Image
          src={TopDesign}
          alt="top_design"
          width={620}
          height={1050}
          priority={false}
        />
      </div>
      <div className="error_bottom_design">
        <Image
          src={BottomDesign}
          alt="bottom_design"
          width={620}
          height={1150}
          priority={false}
        />
      </div>
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="error_parent page_parent">
              <div className="error_content">
                <h1>No Data Found!</h1>
                <p>Sorry ! We could not found any match for your Search</p>
                <p>Try Searching again</p>
              </div>
              <div className="error_image_parent">
                <div className="error_image">
                  <Image
                    src={PageNotFound}
                    alt="error_image"
                    width={570}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NotFound;
