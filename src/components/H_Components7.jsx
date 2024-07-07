import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../components/Swicss.css";
import Logo from "../assets/Pic/logo.jpg";

const H_Components7 = () => {
  return (
    <div className="py-5 lg:py-10 md:py-5">
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper wswiper"
        >
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Overview
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                Tecxone Software Solution is a reputed software company known for its innovative and customer-centric approach to software development and IT services. As part of our efforts to showcase our capabilities and innovative approach, we developed a business model dummy that highlights our unique value propositions and operational strategies.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Objective
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The primary objective of this project was to create an attractive and innovative business model dummy for Tecxone Software Solution. This model serves as a visual representation of our business strategies, services, and the value we deliver to our clients.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Innovative Design
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The business model dummy features a modern and futuristic architectural design, reflecting our commitment to innovation and forward-thinking. It includes a multi-story structure with visually appealing elements such as large glass panels and dynamic shapes that symbolize transparency and adaptability. Realistic

                The model incorporates detailed elements such as roads, greenery, and vehicles to provide a realistic depiction of the business environment. The use of lighting within the model highlights key areas, adding to its visual appeal and making it stand out.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Functional Areas
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The business model showcases various functional areas within Tecxone Software Solution, including: Development Centers: Dedicated spaces for software development and testing, equipped with state-of-the-art technology. Client Interaction Zones: Areas designed for client meetings, presentations, and collaborative sessions. Employee Workspaces: Ergonomically designed workstations to ensure productivity and employee well-being. Innovation Labs: Special zones dedicated to research and development, fostering creativity and innovation.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Visual Appeal
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The model is designed to be visually engaging, capturing the attention of stakeholders and potential clients. The use of contrasting colors, dynamic shapes, and interactive elements makes the model both informative and aesthetically pleasing.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Purpose and Benefits
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The business model dummy serves as a powerful marketing tool, showcasing Tecxone Software Solution's capabilities and innovative approach to potential clients and partners. It helps in communicating our business strategies and value propositions effectively.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Client Engagement
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The model provides a tangible representation of our business environment, helping clients visualize our operational processes and the value we deliver. It enhances client engagement during presentations and meetings, making them more interactive and impactful.
                The business model dummy also serves as an internal communication tool, aligning employees with the company's vision and strategies. It fosters a sense of pride and ownership among employees, motivating them to contribute towards the company's goals.
              </span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src={Logo} />
            <div className="absolute flex flex-row w-full h-[55%] top-0 bg-[#000000d8] text-white justify-center items-center poppins_m">
              Conclusion
            </div>
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-full champ">
                The Tecxone Software Solution Business Model dummy is a testament to our commitment to innovation, client-centricity, and operational excellence. It reflects our dedication to delivering high-quality software solutions and IT services that meet the evolving needs of our clients. This project not only enhances our marketing efforts but also strengthens our internal alignment and client engagement, positioning us as a leader in the software industry.
              </span>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default H_Components7;
