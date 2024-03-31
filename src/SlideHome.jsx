import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SlideHome = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="https://nuck.edu.kh/wp-content/uploads/2023/12/nuck_slid1_1-1920x699.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rule.edu.kh/wp-content/uploads/2019/11/slide1.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideHome;
