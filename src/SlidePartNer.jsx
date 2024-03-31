import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SlidePartNer = () => {
  return (
    <div className="partner container-width">
      <h2 className="partner">OUR PARTNERS</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/03/university-of-worcester-logo-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/05/tvu-london-logo.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/05/tvu-london-logo.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/05/tvu-london-logo.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/03/university-of-worcester-logo-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/03/university-of-worcester-logo-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/03/university-of-worcester-logo-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.hru.edu.kh/wp-content/uploads/2018/03/university-of-worcester-logo-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "co" }}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="https://rule.edu.kh/wp-content/uploads/2019/11/slide1.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide> */}
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlidePartNer;
