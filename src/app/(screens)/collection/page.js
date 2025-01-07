"use client";
import Image from "next/image";
import "../../../../public/sass/pages/collection.scss";
import HairExtension from "../../../../public/images/hair_extension.png";
import HairWigBrown from "../../../../public/images/hair_wig_brown.png";
import HairWig from "../../../../public/images/hair_wig.png";
import JudaBun from "../../../../public/images/juda_bun.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Container, Grid } from "@mui/material";

const Collection = () => {
  const swiper = [HairExtension, HairWigBrown, HairWig, JudaBun];

  return (
    <div className="collection_parent">
      <Container>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="collection_inner_parent">
              <Grid container spacing={10}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <Grid item xl={3} lg={3} md={3} sm={4} xs={6} key={index}>
                    <div className="swiper_parent">
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                      >
                        {swiper.map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className="swiper_inner_parent">
                              <Image
                                src={item}
                                alt="product_image"
                                width={270}
                                height={320}
                                priority={true}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <h3>Hair Product</h3>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Collection;
