// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import Card from "./Card";

// State
import useStore from "@/store/store";

export default function Carrousel() {
  const personajes = useStore((state) => state.personajes);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#86f54e",
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {personajes.map((character) => {
          return (
            <SwiperSlide key={character.id}>
              <Card character={character} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
