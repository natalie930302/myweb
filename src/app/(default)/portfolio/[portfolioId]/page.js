"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHeart,
  IconEye,
  IconDots,
  IconBookmark,
  IconEdit,
  IconTrash,
  IconLink,
  IconAlertCircle,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import PortfolioCard from "@/components/portfolio-card";

const Portfolio = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (
        dropdownButtonRef.current &&
        dropdownButtonRef.current.contains(e.target)
      ) {
        setShowDropdown(!showDropdown);
      } else if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    },
    [showDropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  const portfolio = {
    title: "檢定證照",
    thumbnail: "/images/portfolio/100127.jpg",
    description:
      "在⾼中求學段的中除了學普學⼯裝置的基本倫理常識，我覺得把⽇常所學的知識⽤在實的動⼿作上，⽽考國家相關技證照來應證平常所學到的知識是否理解並⽤實作上，從中學到該何⾃⼰改變實驗⼿法使其更順暢和那知識的⽅加補強並改善",
    related_group: [
      [3, 22],
      ["數理化", "化工"],
    ],
    type: [[5], ["檢定證照"]],
    created_at: "2022-12-29",
    viewed_count: 2141,
    like_count: 4,
    save_count: 2,
    author_profile_url: "https://cloud-library.luckertw.com/user/1",
    author_name: "王同學",
    author_avatar_url: "https://cloud-library.luckertw.com/images/user/1.jpg",
    school: "北科桃農",
    award: [["hot"], ["人氣排行"]],
    tag: [],
    page_count: 13,
    comment: null,
    events: [
      {
        ad_id: 6,
        code: "d2d66f37b7334c909ae073b46c2ccc75",
        title: "Python基礎線上自學班（六個月期）",
        tag: ["10/31 報名截止", "課程"],
        img: "https://eporttw.com/uploads/events/d2d66f37b7334c909ae073b46c2ccc75/1699674765900.jpg",
        time: "2023/11/11（六） ~ 2024/10/31（四）",
        venue: "線上",
        fee: "3750",
        link: "https://eporttw.com/event/d2d66f37b7334c909ae073b46c2ccc75?utm_source=lucker&utm_medium=recommend&utm_campaign=d2d66f37b7334c909ae073b46c2ccc75",
        main_group: "數理化",
      },
      {
        ad_id: null,
        code: "0ac216a28e454097bb42300c6d9e568a",
        title: "【EDC專長探索中心】理工學群探索營",
        tag: ["02/04 報名截止", "營隊"],
        img: "https://eporttw.com/uploads/events/0ac216a28e454097bb42300c6d9e568a/1702392443897.png",
        time: "2023/10/28（六） ~ 2024/02/06（二）",
        venue: "TCCC台灣文創訓練中心",
        fee: "5480",
        link: "https://eporttw.com/event/0ac216a28e454097bb42300c6d9e568a?utm_source=lucker&utm_medium=recommend&utm_campaign=0ac216a28e454097bb42300c6d9e568a",
        main_group: "數理化",
      },
      {
        ad_id: null,
        code: "39de9e8c0c704ab09639f03cdc383f26",
        title: "APCS檢定基礎線上自學班（六個月期）",
        tag: ["10/31 報名截止", "課程"],
        img: "https://eporttw.com/uploads/events/39de9e8c0c704ab09639f03cdc383f26/1699929258631.jpg",
        time: "2023/11/11（六） ~ 2024/10/31（四）",
        venue: "線上",
        fee: "6500",
        link: "https://eporttw.com/event/39de9e8c0c704ab09639f03cdc383f26?utm_source=lucker&utm_medium=recommend&utm_campaign=39de9e8c0c704ab09639f03cdc383f26",
        main_group: "數理化",
      },
    ],
    is_liked: false,
    is_saved: false,
    is_exchange: false,
  };

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

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };
  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };
  const handleCopy = () => {};
  const handleReport = () => {};
  const handleDelete = () => {};

  return (
    <>
      <section className="bg-white">
        <div className="container py-8">
          <div className="grid grid-cols-12 lg:gap-20 md:gap-10 gap-6">
            <div className="col-span-12 md:col-span-5">
              <Image
                className="portfolio-img w-full rounded-md shadow-default"
                width={600}
                height={600}
                alt="portfolio-img"
                src="https://cloud-library.luckertw.com/images/portfolio/100127.jpg"
              />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-col h-full justify-center md:items-start items-center gap-4">
                <div className="portfolio-funcBar md:w-full flex justify-start items-center gap-3 text-gray-500">
                  <div className="portfolio-author flex justify-center items-center gap-2">
                    <Image
                      className="portfolio-author-img size-6"
                      width={30}
                      height={30}
                      alt="portfolio_author_img"
                      src="https://cloud-library.luckertw.com/images/user/author_l.png"
                    />
                    <div className="portfolio-author-name">
                      {portfolio?.author_name}
                    </div>
                  </div>
                  <div className="portfolio-view justify-center items-center gap-1 md:flex hidden">
                    <IconEye className="portfolio-view-icon" />
                    <div className="portfolio-view-count">
                      {portfolio?.viewed_count}
                    </div>
                  </div>
                  <button
                    className={`portfolio-like justify-center items-center gap-1 md:flex hidden ${
                      isLiked ? "text-primary-700" : "text-gray-500"
                    }`}
                    onClick={toggleLike}
                  >
                    <IconHeart
                      className={`portfolio-like-icon ${
                        isLiked ? "fill-primary-700" : ""
                      }`}
                    />
                    <div className="portfolio-like-count">
                      {portfolio?.like_count}
                    </div>
                  </button>
                  <button
                    className={`portfolio-save justify-center items-center gap-1 md:flex hidden ${
                      isSaved ? "text-primary-700" : "text-gray-500"
                    }`}
                    onClick={toggleSave}
                  >
                    <IconBookmark
                      className={`portfolio-save-icon ${
                        isSaved ? "fill-primary-700" : ""
                      }`}
                    />
                    <div className="portfolio-save-count">
                      {portfolio?.save_count}
                    </div>
                  </button>
                  <div className="portfolio-dropdown justify-center items-center ml-auto relative md:flex hidden">
                    <button
                      className="portfolio-dropdown-btn"
                      ref={dropdownButtonRef}
                    >
                      <IconDots className="portfolio-dropdown-icon" />
                    </button>
                    <AnimatePresence>
                      <motion.div
                        className="portfolio-dropdown-menu bg-white rounded-sm shadow-md sm:w-32 w-28 overflow-hidden absolute top-full right-0"
                        initial={{
                          opacity: 0,
                          height: 0,
                          visibility: "hidden",
                        }}
                        animate={{
                          opacity: showDropdown ? 1 : 0,
                          height: showDropdown ? "auto" : 0,
                          visibility: "visible",
                        }}
                        exit={{ opacity: 0, height: 0, visibility: "hidden" }}
                        ref={dropdownRef}
                      >
                        <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                          <li>
                            <button
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                              onClick={handleCopy}
                            >
                              <div className="flex justify-start items-center gap-1">
                                <IconLink className="size-4" />
                                複製連結
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                              onClick={handleReport}
                            >
                              <div className="flex justify-start items-center gap-1">
                                <IconAlertCircle className="size-4" />
                                問題回報
                              </div>
                            </button>
                          </li>
                          <li>
                            <Link
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                              href={"#"}
                            >
                              <div className="flex justify-start items-center gap-1">
                                <IconEdit className="size-4" />
                                修改檔案
                              </div>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                              onClick={handleDelete}
                            >
                              <div className="flex justify-start items-center gap-1">
                                <IconTrash className="size-4" />
                                刪除檔案
                              </div>
                            </button>
                          </li>
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                <div className="portfolio-title text-3xl font-bold">
                  {portfolio?.title}
                </div>
                <div className="portfolio-award flex flex-wrap gap-2">
                  {portfolio?.award[1].map((item, index) => (
                    <Link href="#" key={index}>
                      <div
                        className="portfolio-tag-item text-gray-500 rounded-full py-1 flex justify-center items-center gap-2"
                        key={index}
                      >
                        <Image
                          src={`https://cloud-library.luckertw.com/images/award/${portfolio?.award[0][index]}.png`}
                          width={50}
                          height={50}
                          alt="award-img"
                          className="portfolio-award-img size-6"
                        />
                        {item}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="portfolio-tag flex flex-wrap gap-2">
                  {portfolio?.type[1].map((item, index) => (
                    <Link href="#" key={index}>
                      <div className="portfolio-tag-item bg-white text-primary-700 border-primary-700 border-2 rounded-full px-3 py-1">
                        {item}
                      </div>
                    </Link>
                  ))}
                  {portfolio?.related_group[1].map((item, index) => (
                    <Link href="#" key={index}>
                      <div className="portfolio-tag-item bg-white text-primary-700 border-primary-700 border-2 rounded-full px-3 py-1">
                        {item}
                      </div>
                    </Link>
                  ))}
                  {portfolio?.tag.map((item, index) => (
                    <Link href="#" key={index}>
                      <div className="portfolio-tag-item bg-white text-primary-700 border-primary-700 border-2 rounded-full px-3 py-1">
                        {item}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="portfolio-description">
                  百字簡述：
                  <br />
                  {portfolio?.description}
                  <br />
                  (共{portfolio?.page_count}頁)
                </div>
                <div className="portfolio-funcBar flex justify-start items-center gap-3 text-gray-500 md:hidden">
                  <div className="portfolio-view flex justify-center items-center gap-1">
                    <IconEye className="portfolio-view-icon" />
                    <div className="portfolio-view-count">
                      {portfolio?.viewed_count}
                    </div>
                  </div>
                  <button
                    className={`portfolio-like flex justify-center items-center gap-1 ${
                      isLiked ? "text-primary-700" : "text-gray-500"
                    }`}
                    onClick={toggleLike}
                  >
                    <IconHeart
                      className={`portfolio-like-icon ${
                        isLiked ? "fill-primary-700" : ""
                      }`}
                    />
                    <div className="portfolio-like-count">
                      {portfolio?.like_count}
                    </div>
                  </button>
                  <button
                    className={`portfolio-save flex justify-center items-center gap-1 ${
                      isSaved ? "text-primary-700" : "text-gray-500"
                    }`}
                    onClick={toggleSave}
                  >
                    <IconBookmark
                      className={`portfolio-save-icon ${
                        isSaved ? "fill-primary-700" : ""
                      }`}
                    />
                    <div className="portfolio-save-count">
                      {portfolio?.save_count}
                    </div>
                  </button>
                  <button
                    className={`portfolio-copy flex justify-center items-center gap-1`}
                    onClick={handleCopy}
                  >
                    <IconLink className={`portfolio-copy-icon`} />
                  </button>
                  <button
                    className={`portfolio-report flex justify-center items-center gap-1`}
                    onClick={handleReport}
                  >
                    <IconAlertCircle className={`portfolio-report-icon`} />
                  </button>
                  <Link
                    href={"#"}
                    className={`portfolio-edit flex justify-center items-center gap-1`}
                  >
                    <IconEdit className={`portfolio-edit-icon`} />
                  </Link>
                  <button
                    className={`portfolio-delete flex justify-center items-center gap-1`}
                    onClick={handleDelete}
                  >
                    <IconTrash className={`portfolio-delete-icon`} />
                  </button>
                </div>
                <button className="btn btn-secondary w-24 min-w-fit">
                  試閱
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container py-8">
          <h4 className="text-xl text-primary-700 font-medium mb-4">
            閱讀更多
          </h4>
          <div className="grid grid-cols-12 lg:gap-14 gap-5">
            <div className="md:col-span-9 col-span-12">
              <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-3 mb-4">
                {portfolios.map((portfolio, index) => (
                  <PortfolioCard key={index} portfolio={portfolio} mode={1} />
                ))}
              </div>
              <button className="btn btn-secondary w-32 min-w-fit mx-auto">
                Read more
              </button>
            </div>
            <div className="md:col-span-3 col-span-12 md:block hidden">
              <div className="sticky top-32 flex flex-col gap-4">
                <Link href="#">
                  <div className="shadow-default lg:p-5 p-3">
                    <div className="flex flex-col justify-start items-center gap-2 text-center">
                      <Image
                        className="portfolio-author-img w-full"
                        width={400}
                        height={400}
                        alt="share_post_img"
                        src="https://cloud-library.luckertw.com/images/post/share.png"
                      />
                      <div className="lg:text-3xl text-xl font-bold">
                        分享作品
                      </div>
                      <div className="xl:text-base text-sm">
                        分享你的優秀作品，讓更多夥伴一起邁向偉大的航道吧！
                      </div>
                    </div>
                  </div>
                </Link>
                <h4 className="text-xl text-primary-700 font-medium">
                  好站連結
                </h4>
                <Link href="#">
                  <div className="shadow-default lg:p-5 p-3">
                    <div className="flex flex-col justify-start items-center gap-2 text-center">
                      <Image
                        className="portfolio-author-img xl:h-8 h-6 w-auto"
                        width={400}
                        height={400}
                        alt="share_post_img"
                        src="https://cloud-library.luckertw.com/images/post/lucker.png"
                      />
                      <div className="text-gray-400 xl:text-base text-sm">
                        專屬你的學習紀錄
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="shadow-default lg:p-5 p-3">
                    <div className="flex flex-col justify-start items-center gap-2 text-center">
                      <Image
                        className="portfolio-author-img xl:h-8 h-6 w-auto"
                        width={400}
                        height={400}
                        alt="share_post_img"
                        src="https://cloud-library.luckertw.com/images/post/luckerly.png"
                      />
                      <div className="text-gray-400 xl:text-base text-sm">
                        高校生的學習歷程部落格
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="shadow-default lg:p-5 p-3">
                    <div className="flex flex-col justify-start items-center gap-2 text-center">
                      <Image
                        className="portfolio-author-img xl:h-8 h-6 w-auto"
                        width={400}
                        height={400}
                        alt="share_post_img"
                        src="https://cloud-library.luckertw.com/images/post/eport.png"
                      />
                      <div className="text-gray-400 xl:text-base text-sm">
                        探索興趣｜找活動的好幫手
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-center items-center gap-3">
                  <Link href="#">
                    <IconBrandFacebook className="lg:size-8 size-6" />
                  </Link>
                  <Link href="#">
                    <IconBrandInstagram className="lg:size-8 size-6" />
                  </Link>
                  <Link href="#">
                    <IconBrandYoutube className="lg:size-8 size-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
