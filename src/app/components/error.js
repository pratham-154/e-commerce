"use client";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import "../../../public/sass/pages/error.scss";
import ErrorImage from "../../../public/images/error_image.png";
import TopDesign from "../../../public/images/error_top_design.png";
import BottomDesign from "../../../public/images/error_bottom_design.png";

const Error = () => {
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
            <div className="error_parent">
              <div className="error_content">
                <h1>Page not found</h1>
                <p>
                  The Page you are trying to access does not exist or have been
                  removed
                </p>
                <p>Try go back to homepage</p>
              </div>
              <div className="error_button">
                <Button variant="contained">Home</Button>
              </div>
              <div className="error_image_parent">
                <div className="error_image">
                  <Image
                    src={ErrorImage}
                    alt="error_image"
                    width={580}
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

export default Error;
