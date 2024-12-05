import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Adjust import for Swiper 8+
import "swiper/css";
import "swiper/css/pagination";
import jambtes1 from "../assets/jambtes1.jpg"
import jambtes2 from "../assets/jambtes2.jpg"
import jambtest3 from "../assets/jambtest3.jpg"
import jambrecord from "../assets/jambtest3.jpg"

const ImageSlider = ({images}) => {

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          simulateTouch={true} // Ensures touch interaction
          grabCursor={true} // Changes cursor to indicate swipe support
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
