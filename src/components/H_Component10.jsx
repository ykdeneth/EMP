import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import Team1 from "../assets/Pic/team1.jpg";
import Team2 from "../assets/Pic/IMG-20240303-WA0016cp.jpg";
import Team3 from "../assets/Pic/IMG-20240707-WA0005-cp.jpg";
const H_Component10 = () => {
  return (
    <div className="relative flex w-screen ">
      <div className="relative w-screen">
        <img
          src="./src/assets/sense-pavilion-view-2.jpg"
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-full"
        />
        <div className="absolute bg-[#000000b7] w-full h-full top-0"></div>
      </div>
      <div className="absolute flex flex-col items-center justify-start w-full px-5 py-5 lg:px-20 lg:py-10 md:px-20 md:py-10 ">
        <span className="text-5xl text-orange-300  poppins_m lg:text-4xl md:text-5xl">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.div>
        </span>
        <span className="flex flex-col items-center justify-between w-full py-5 text-sm text-gray-200 lg:flex lg:flex-col md:flex md:flex-col lg:py-20 md:py-10 lg:text-lg md:text-base">
          <span className="w-full py-5 poppins_m text-center">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Tecxone Business Solution specializes in business model development, consultation, and UI/UX design. Our mission is to deliver innovative and tailored solutions to help businesses achieve their goals. With a dedicated team of experts, we provide a cil gprehensive range of services that cater to the un que needs of each client

              Established in 2024, Tecone Business Solution has consistently pushed the boundanies of innovation, providing top-ter services to a diverse clientele. Our approach is centered around understanding the unique challenges faced by businesses today and crafting solutions that drive growth, efficiency, and success.

              Our team is composed of experienced professionals who bring a wealth of knowledge and expertise to every project. From strategic planning to design and implementation, we work closely with our clients to ensure that every aspect of their business is opumized for
              success.
            </motion.div>
          </span>
          <div className="w-full py-10">
            <div className="hidden lg:flex lg:h-screen lg:w-full lg:justify-center lg:items-center lg:flex-col">
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
                    className="z-0 object-cover w-full shadow-md rounded-lg border-[#ffffff50] border-[5px] hover:scale-[0.65] scale-[0.6] hover:duration-100 duration-100"
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
                    className="z-0 object-cover w-full shadow-md rounded-lg -translate-x-52 translate-y-10 border-[#ffffff50] border-[5px] hover:scale-[0.95] scale-[0.9] hover:duration-100 duration-100"
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
                  className="z-0 object-cover w-[50%] shadow-md rounded-lg -translate-y-96 border-[#ffffff50] border-[5px] hover:scale-[0.85] scale-[0.8] hover:duration-100 duration-100 "
                />
              </motion.div>




            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default H_Component10;
