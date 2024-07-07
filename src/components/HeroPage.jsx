import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "../components/Fonts.css";
import Background from "../assets/Pic/bcak.jpeg";
import BgTrans from "../assets/Pic/trans.png";
import Team1 from "../assets/Pic/team1.jpg";
import Team2 from "../assets/Pic/IMG-20240303-WA0016cp.jpg";
import Team3 from "../assets/Pic/IMG-20240707-WA0005-cp.jpg";
import { fadeIn } from "../variants";

import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="relative flex flex-row w-screen h-screen ">
      <div className="absolute w-screen ">
        <img
          src={Background}
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-screen"
        />
      </div>
      <div className="w-screen h-screen absolute bg-[#000000b7] lg:flex lg:flex-col md:flex md:flex-col flex flex-col lg:justify-center lg:items-start md:justify-start md:items-center px-5 py-5 lg:px-20 lg:py-20 md:py-10 md:px-10">
        <div className="">
          <span className="w-full py-10 text-lg text-white lg:text-3xl md:text-lg md:text-center lg:text-start champ">
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={BgTrans}
                alt=""
                className="z-0 object-cover"
              />
            </motion.div>
          </span>
          <span className="text-2xl text-white lg:w-1/3 lg:pl-16 md:w-full md:text-4xl lg:text-3xl md:text-center lg:text-start popins_m text-center">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              Welcome to Tecxone Business Model
            </motion.div>
          </span>
        </div>
      </div>
      <div className="absolute hidden lg:w-screen lg:justify-between lg:flex">
        <div className="hidden lg:flex lg:h-screen lg:flex-row lg:w-1/2 ">
        </div>
        <div className="hidden lg:flex lg:h-screen lg:w-1/2 lg:justify-center lg:items-center lg:flex-col">
          <div className="w-[80%] px-5 py-0 flex flex-row justify-center items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center w-[70%]"
            >
              <img
                src={Team2}
                alt=""
                className="z-0 object-cover w-full shadow-md rounded-lg border-[#ffffff50] border-[5px] hover:scale-[1.05] hover:duration-100 duration-100"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center w-[25%]"
            >
              <img
                src={Team1}
                alt=""
                className="z-0 object-cover w-full shadow-md rounded-lg -translate-x-10 translate-y-10 border-[#ffffff50] border-[5px] hover:scale-[1.05] hover:duration-100 duration-100"
              />
            </motion.div>


          </div>

          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[80%] px-5 flex flex-row justify-center items-center"
          >
            <img
              src={Team3}
              alt=""
              className="z-0 object-cover w-[50%] shadow-md rounded-lg -translate-y-16 border-[#ffffff50] border-[5px] hover:scale-[1.05] hover:duration-100 duration-100 "
            />
          </motion.div>




        </div>
      </div>
    </div>
  );
};

export default HeroPage;
