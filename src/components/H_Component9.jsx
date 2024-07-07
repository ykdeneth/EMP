import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { FreeMode, Pagination } from "swiper/modules";

const H_Component9 = () => {
  return (
    <div className="mb-5 lg:px-10 lg:py-10">
      <div className="flex flex-row items-center justify-center w-full px-2 py-5 text-2xl poppins_m lg:text-5xl md:text-3xl lg:text-start md:text-center md:items-center md:justify-center lg:justify-start lg:items-center">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Practical Applications
        </motion.div>
      </div>
      <div className="hidden md:hidden lg:flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper aswiper"
        >
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                A business model helps in setting clear objectives and strategies for achieving them, guiding the long-term planning process
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm ">
                <b>Strategic Planning</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                It aids in determining where to allocate resources efficiently to maximize returns and minimize waste.
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm ">
                <b>Resource Allocation</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                A robust business model attracts investors by demonstrating how the business will generate revenue and achieve profitability.
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm ">
                <b>Investment Attraction</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm ">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm ">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper aswiper"
        >
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="block md:hidden lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper aswiper"
        >
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="aswiper-slide">
            <div className="flex flex-col items-start justify-center px-5 py-5 border-r-2 border-gray-200">
              <span className="px-5 py-5 text-sm text-black md:text-sm champ">
                dciuhdciujhghujghujgjgjhbjhbhjbjhjhbhjbhjhjbbhjb
                hhguyghuyguygyuguyguygyuggyggyugyuguygyugy gsdvsdsdcscscscs
                dscsdcsdcsdcsdcsdc dscsdcsdcsdc
              </span>
              <span className="px-5 py-5 text-sm text-black md:text-sm">
                <b>Jhone Brook</b>
              </span>

            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default H_Component9;
