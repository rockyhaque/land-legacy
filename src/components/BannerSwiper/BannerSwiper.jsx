import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-96">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/FXkG0bD/ricardo-gomez-angel-F2i-CP-knaj8-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QK4cxS9/caleb-maxwell-Vex-Huc-E8a-Zk-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/gwNb5cd/zoltan-tasi-Kl-NNqv-HCgw-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Kr3NVLt/boudewijn-boer-q-T515-Jd-ZNy8-unsplash.jpg" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
