import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import Model1m from "../assets/Pic/IMG-20240302-WA0010cp.jpg";
import Model2 from "../assets/Pic/IMG-20240707-WA0005-cp.jpg";
import Model3 from "../assets/Pic/IMG-20240707-WA0004cp.jpg";
import Model4 from "../assets/Pic/IMG-20240707-WA0014cp.jpg";
import "../components/Fonts.css";
const H_Component2 = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen lg:h-auto px-5 py-5 text-white bg-white lg:px-20 lg:py-10 md:px-10 md:py-10 lg:flex lg:flex-col md:flex md:flex-col lg:gap-y-10">
      <div className="relative flex flex-col w-screen h-screen px-5 py-5 text-white bg-white lg:px-20 lg:py-20 md:px-10 md:py-10 lg:flex lg:flex-row md:flex md:flex-col">
        <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
          <div className="flex w-full px-2 lg:pb-20">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={Model1m}
                alt=""
                className="z-0 object-cover w-screen h-full md:h-full scale-[0.9]"
              />
            </motion.div>
          </div>
          <div className="flex w-full px-2 py-2 text-black lg:py-10 champ">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              The business model dummy features a modern and futuristic architectural design, reflecting our commitment to innovation and forward-thinking
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
          <span className="flex w-full px-2 py-2 text-3xl font-extrabold text-black You lg:pb-5 lg:text-5xl md:text-2xl">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <b className="popins_m"> Our Model Structres From Outside</b>
            </motion.div>
          </span>
          <div className="flex w-full px-2 py-2 text-black lg:pb-5 champ">
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              It includes a multi-story structure with visually appealing elements such as large glass panels and dynamic shapes that symbolize transparency and adaptability. Realistic

            </motion.div>
          </div>
          <div className="flex w-full px-2 py-2 lg:py-10">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={Model2}
                alt=""
                className="z-0 object-cover w-screen h-full md:h-full scale-[0.9]"
              />
            </motion.div>
          </div>
        </div>

      </div>
      <div className="relative flex flex-col w-screen h-screen px-5 py-5 text-white bg-white lg:px-20 lg:py-20 md:px-10 md:py-10 lg:flex lg:flex-row md:flex md:flex-col">
        <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
          <div className="flex w-full px-2 lg:pb-20">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={Model3}
                alt=""
                className="z-0 object-cover w-screen h-full md:h-full scale-[0.9]"
              />
            </motion.div>
          </div>
          <div className="flex w-full px-2 py-2 text-black lg:py-10 champ">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >

            </motion.div>
          </div>
        </div>
        <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
          <span className="flex w-full px-2 py-2 text-3xl font-extrabold text-black You lg:pb-5 lg:text-5xl md:text-2xl">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <b className="popins_m"> Our Model Structres From Inside</b>
            </motion.div>
          </span>
          <div className="flex w-full px-2 py-2 text-black lg:pb-5 champ">
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >

            </motion.div>
          </div>
          <div className="flex w-full px-2 py-2 lg:py-10">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={Model4}
                alt=""
                className="z-0 object-cover w-screen h-full md:h-full scale-[0.9]"
              />
            </motion.div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default H_Component2;
