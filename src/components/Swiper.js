"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
} from "swiper/modules";

const SwiperComponent = () => {
  const data = [
    {
      portfolio_id: "100127",
      title: "檢定證照",
      type: ["檢定證照檢定證照檢定證照檢定證照"],
      thumbnail: "/images/portfolio/100127.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學王同學王同學王同學王同學王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school:
        "北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農北科桃農",
    },
    {
      portfolio_id: "100331",
      title: "多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定",
      type: ["高中自主學習計畫與成果"],
      thumbnail: "/images/portfolio/100331.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school: "新興高中",
    },
    {
      portfolio_id: "100331",
      title: "多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定",
      type: ["高中自主學習計畫與成果"],
      thumbnail: "/images/portfolio/100331.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school: "新興高中",
    },
    {
      portfolio_id: "100331",
      title: "多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定",
      type: ["高中自主學習計畫與成果"],
      thumbnail: "/images/portfolio/100331.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school: "新興高中",
    },
    {
      portfolio_id: "100331",
      title: "多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定",
      type: ["高中自主學習計畫與成果"],
      thumbnail: "/images/portfolio/100331.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school: "新興高中",
    },
    {
      portfolio_id: "100331",
      title: "多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定多益檢定",
      type: ["高中自主學習計畫與成果"],
      thumbnail: "/images/portfolio/100331.jpg",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/undefined.jpg",
      author_name: "王同學",
      author_profile_url: "https://cloud-library.luckertw.com/user/undefined",
      school: "新興高中",
    },
  ];
  function calculateStretchAndDepth() {
    if (typeof window !== "undefined") {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const result = {
        stretch: screenWidth > 768 ? 365 : 130,
        depth: screenWidth > 768 ? 305 : 250,
      };
      return result;
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        loopAdditionalSlides={1}
        coverflowEffect={{
          rotate: 0,
          stretch: calculateStretchAndDepth()?.stretch,
          depth: calculateStretchAndDepth()?.depth,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Scrollbar, Autoplay, EffectCoverflow, Pagination, Navigation]}
        speed={1000}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        onBeforeResize={(swiper) => {
          const { stretch, depth } = calculateStretchAndDepth();
          swiper.params.coverflowEffect.stretch = stretch;
          swiper.params.coverflowEffect.depth = depth;
          swiper.update();
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <a
              href={`/portfolio/${slide.portfolio_id}`}
              className={`swiper-slide-container swiper-slide-${
                index % 2 === 1 ? "even" : "odd"
              }`}
            >
              <Image
                width={365}
                height={365}
                src={`https://cloud-library.luckertw.com/images/portfolio/100127.jpg`}
                alt=""
                className="image"
              />
              <div className="info">
                <div className="rank">{index + 1}</div>
                <div className="title">{slide.title}</div>
                <div className="type">{slide.type}</div>
                <div className="author">
                  <div className="profile">
                    <Image
                      width={30}
                      height={30}
                      src={`https://cloud-library.luckertw.com/images/user/author_k.png`}
                      alt=""
                    />
                    <div className="name">{slide.author_name}</div>
                  </div>
                  <div className="department">{slide.school}</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <IconArrowLeft className="swiper-button-prev" />
          <div className="swiper-pagination"></div>
          <IconArrowRight className="swiper-button-next" />
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperComponent;
