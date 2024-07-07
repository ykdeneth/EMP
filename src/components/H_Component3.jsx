import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import "../components/Fonts.css";
import Logo from "../assets/Pic/logo.jpg";
import Model3 from "../assets/Pic/trans.png";
const H_Component3 = () => {
  return (
    <div className="relative flex flex-col w-screen py-20 lg:flex lg:flex-col md:flex md:flex-col lg:py-10 md:py-5">

      <div className="relative w-screen">
        <img
          src={Logo}
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-screen "
        />
        <div className="absolute bg-[#000000e8] w-full h-full top-0 flex flex-row">
          <div className="w-full h-full justify-center items-start px-20 flex flex-col gap-y-10">
            <h1 className="poppins_m text-white text-4xl">Introduction</h1>
            <span className="poppins_m text-white text-xl w-[70%]">
              Tecxone Software Solution is a reputed software company known for its innovative and customer-centric approach to software development and IT services. As part of our efforts to showcase our capabilities and innovative approach, we developed a business model dummy that highlights our unique value propositions and operational strategies.
            </span>
          </div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={Model3}
              alt=""
              className="z-0 object-cover w-screen h-full md:h-full scale-[0.5]"
            />
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default H_Component3;
