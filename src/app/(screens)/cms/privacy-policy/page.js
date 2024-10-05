"use client";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import "../../../../../public/sass/pages/t&c.scss";
import Image from "next/image";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import { getApi, renderHtml } from "../../../../helpers/General";

const PrivacyPolicy = () => {
  const [pageData, setPageData] = useState([]);

  let getData = async () => {
    let resp = await getApi("cms/view/66f7c18a0b96290322137b8c");

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

  return (
    <div className="cms_section">
      <div className="top_effect">
        <Image src={TopEffect} alt="top_effect" />
      </div>
      <Container>
        <Grid container>
          <Grid items xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="cms_parent">
              <div className="cms_child">
                <div className="title_area">
                  <h1>{pageData.title}</h1>
                </div>
                <div
                  className="detail_area"
                  dangerouslySetInnerHTML={renderHtml(pageData.description)}
                >
                  {/* <div className="table">// Create table inside this div</div> */}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="bottom_effect">
        <Image src={BottomEffect} alt="top_effect" />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
