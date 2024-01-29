"use client";
import SwiperComponent from "@/components/Swiper";
import PortfolioCard from "@/components/portfolio-card";
import { useState } from "react";

const Home = () => {
  // const [checkItems, setCheckItems] = useState([]);
  const portfolios = [
    {
      portfolio_id: "100231",
      title: "地方影展製作影片歷程",
      type: ["課程學習成果"],
      thumbnail:
        "https://cloud-library.luckertw.com/images/portfolio/100231.jpg",
      created_at: "2022-12-29",
      author_profile_url: "https://cloud-library.luckertw.com/user/31",
      author_avatar_url:
        "https://cloud-library.luckertw.com/images/user/31.jpg",
      author_name: "劉同學",
      viewed_count: "37",
      like_count: 0,
      comment: 1,
      checkup: -1,
    },
    {
      portfolio_id: "100009",
      title: "校刊編輯與製作心得",
      type: ["非修課紀錄之成果作品"],
      thumbnail:
        "https://cloud-library.luckertw.com/images/portfolio/100009.jpg",
      created_at: "2022-12-29",
      author_profile_url: "https://cloud-library.luckertw.com/user/1",
      author_avatar_url: "https://cloud-library.luckertw.com/images/user/1.jpg",
      author_name: "魏同學",
      viewed_count: "109",
      like_count: "1",
      comment: 0,
      checkup: -1,
    },
    {
      portfolio_id: "100823",
      title: "無所不在的生活金融",
      type: ["課程學習成果"],
      thumbnail:
        "https://cloud-library.luckertw.com/images/portfolio/100823.jpg",
      created_at: "2023-05-31",
      author_profile_url: "https://cloud-library.luckertw.com/user/1",
      author_avatar_url: "https://cloud-library.luckertw.com/images/user/1.jpg",
      author_name: "吳同學",
      viewed_count: "79",
      like_count: "3",
      comment: 0,
      checkup: -1,
    },
    {
      portfolio_id: "100065",
      title: "高一庚 26號 自主學習成果發表-呼吸道過敏",
      type: ["高中自主學習計畫與成果"],
      thumbnail:
        "https://cloud-library.luckertw.com/images/portfolio/100065.jpg",
      created_at: "2022-12-29",
      author_profile_url: "https://cloud-library.luckertw.com/user/1",
      author_avatar_url: "https://cloud-library.luckertw.com/images/user/1.jpg",
      author_name: "蔡同學",
      viewed_count: "170",
      like_count: 0,
      comment: 0,
      checkup: -1,
    },
    {
      portfolio_id: "100101",
      title: "泡泡實驗",
      type: ["課程學習成果"],
      thumbnail:
        "https://cloud-library.luckertw.com/images/portfolio/100101.jpg",
      created_at: "2022-12-29",
      author_profile_url: "https://cloud-library.luckertw.com/user/1",
      author_avatar_url: "https://cloud-library.luckertw.com/images/user/1.jpg",
      author_name: "盧同學",
      viewed_count: "43",
      like_count: "1",
      comment: 0,
      checkup: 0,
    },
  ];
  return (
    <main>
      <section>
        <div className="container mx-auto py-8 overflow-hidden">
          <h2 className="text-3xl text-primary-700 font-bold mb-4">人氣排行</h2>
          <SwiperComponent />
        </div>
      </section>
      <section>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl text-primary-700 font-bold mb-4">猜你喜歡</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard key={index} portfolio={portfolio} mode={1} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl text-primary-700 font-bold mb-4">最新發布</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard key={index} portfolio={portfolio} mode={1} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl text-primary-700 font-bold mb-4">探索更多</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard key={index} portfolio={portfolio} mode={1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
