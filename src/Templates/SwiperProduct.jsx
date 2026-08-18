import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../css/swiperStyle.css";

export default function AccessoriesSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full justify-between items-center flex flex-col">
      <div className="w-full justify-between items-center flex">
        <h3 className="text-[19px] font-extrabold ps-2">Compatible Accessories</h3>
        <div className="flex gap-2 mb-4">
          <button
            ref={prevRef}
            className="w-[34px] h-[34px] rounded-full border border-[#e9e9f1] bg-white flex items-center justify-center text-[#3c3f52] cursor-pointer hover:border-[#3c3f52] transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="w-[34px] h-[34px] rounded-full border border-[#e9e9f1] bg-white flex items-center justify-center text-[#3c3f52] cursor-pointer hover:border-[#3c3f52] transition"
          >
            ›
          </button>
        </div>
      </div>

      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-md">
          <div className="flex flex-col gap-1.5 items-center">
            <div className="lg:w-50 lg:h-42.5 md:w-30 md:h-30 w-25 h-25 bg-[#f7f6fb] rounded-xl "> </div>
            <span className="text-[13px] font-bold mt-3">Deuterium Lamp D2-200</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-md">
           <div className="flex flex-col gap-1.5 items-center">
            <div className="lg:w-50 lg:h-42.5 md:w-30 md:h-30 w-25 h-25 bg-[#f7f6fb] rounded-xl "> </div>
            <span className="text-[13px] font-bold mt-3">Quartz Cuvette 10 mm</span>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-md">
           <div className="flex flex-col gap-1.5 items-center">
            <div className="lg:w-50 lg:h-42.5 md:w-30 md:h-30 w-25 h-25 bg-[#f7f6fb] rounded-xl "> </div>
            <span className="text-[13px] font-bold mt-3">Deuterium Lamp D2-200</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
