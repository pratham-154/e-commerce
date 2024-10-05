"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
} from "@mui/material";
import "../../../../../public/sass/pages/t&c.scss";
import Image from "next/image";
import TopEffect from "../../../../../public/images/top_effect.png";
import BottomEffect from "../../../../../public/images/bottom_effect.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useEffect, useState } from "react";
import { getApi } from "../../../../helpers/General";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  const [faqData, setfaqData] = useState([]);

  const handleAccordion = (val) => {
    if (expanded === val) {
      setExpanded(null);
    } else {
      setExpanded(val);
    }
  };

  let getFaqData = async () => {
    let resp = await getApi("faqs/index");
    console.log("resp", resp);
    if (resp && resp.status) {
      let { data } = resp;
      if (data && data.data) {
        setfaqData(data.data);
      }
    }
  };

  useEffect(() => {
    getFaqData();
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
              <div className="cms_child faq_child">
                <div className="title_area">
                  <h1>FAQs</h1>
                </div>
                <div className="accordion_area">
                  {faqData.map((item, index) => (
                    <Accordion
                      expanded={expanded === "panel" + index}
                      onChange={() => handleAccordion("panel" + index)}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded === "panel" + index ? (
                            <RemoveRoundedIcon />
                          ) : (
                            <AddRoundedIcon />
                          )
                        }
                        aria-controls="panel-content"
                        id={"panel" + index + "-header"}
                      >
                        {item.title}
                      </AccordionSummary>
                      <AccordionDetails>{item.description}</AccordionDetails>
                    </Accordion>
                  ))}
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

export default FAQ;
