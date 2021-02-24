import React from "react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./Card";
import data from "../../projects.json";
import styles from "./styles.module.css";

SwiperCore.use([Navigation, EffectCoverflow]);

export default function Projects() {
  return (
    <div className="styles.swiper-container bg-gray-100 pt-10">
      <div className="flex w-full justify-center text-2xl mb-10">
        <h1>Featured Projects</h1>
      </div>
      <div className="styles.swiper-wrapper">
        <Swiper
          navigation
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 5,
            slideShadows: true,
          }}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
        >
          {data.map((d) => (
            <SwiperSlide key={d.id}>
              <Card
                title={d.title}
                description={d.description}
                image={d.image}
                github_link={d.github_link}
                deploy_link={d.deploy_link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
