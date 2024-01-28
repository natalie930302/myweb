"use client";
import { useState } from "react";
import {
  IconHeart,
  IconEye,
  IconDots,
  IconBookmark,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="portfolio-card relative shadow-default rounded-md">
      <div className="portfolio-tag absolute md:top-6 md:left-6 top-5 left-5 bg-primary-700 text-white xs:px-3 px-2 xs:py-1.5 py-0.5 rounded-full text-sm line-clamp-1">
        作品講評
      </div>
      {/* <div className="portfolio-tag absolute md:top-6 md:left-6 top-5 left-5 bg-gray-400 text-white xs:px-3 px-2 xs:py-1.5 py-0.5 rounded-full text-sm line-clamp-1">
        待講評
      </div> */}
      <button
        className="portfolio-dropdown-btn w-fit bg-white text-gray-400 p-0.5 rounded-full shadow-md absolute md:top-6 md:right-6 top-5 right-5"
        onClick={() => {
          toggleDropdown();
        }}
      >
        <IconDots className="xs:size-6 size-5" />
      </button>
      <AnimatePresence>
        <motion.div
          className="portfolio-dropdown bg-white rounded-sm shadow-md xs:w-32 w-28 overflow-hidden absolute md:top-16 md:right-6 top-14 right-5"
          initial={{ opacity: 0, height: 0, visibility: "hidden" }}
          animate={{
            opacity: showDropdown ? 1 : 0,
            height: showDropdown ? "auto" : 0,
            visibility: "visible",
          }}
          exit={{ opacity: 0, height: 0, visibility: "hidden" }}
        >
          <ul className="text-sm text-gray-700 divide-y divide-gray-100">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <div className="flex justify-start items-center gap-1">
                  <IconBookmark className="size-4" />
                  <div>取消收藏</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <div className="flex justify-start items-center gap-1">
                  <IconEdit className="size-4" />
                  <div>修改檔案</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                <div className="flex justify-start items-center gap-1">
                  <IconTrash className="size-4" />
                  <div>刪除檔案</div>
                </div>
              </a>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
      {/* <div className="portfolio-btn absolute md:top-6 md:right-6 top-5 right-5 bg-secondary-500 text-white border-2 border-white p-0.5 rounded-full shadow-md text-sm xs:size-6 size-5 flex items-center justify-center">
        1
      </div> */}
      <Link href="/portfolio/100127">
        <div className="md:p-4 p-3 overflow-hidden flex flex-col md:gap-3 gap-1">
          <Image
            src="https://cloud-library.luckertw.com/images/portfolio/100331.jpg"
            alt="100127"
            width={300}
            height={300}
            className="w-full rounded-md shadow-default"
          />
          <h5 className="portfolio-name text-lg text-center font-bold line-clamp-2 min-h-[3em]">
            探究與實作物理地科組探究與實作物理地科組探究與實作物理地科組
          </h5>
          <div className="portfolio-type text-base text-center line-clamp-1">
            探究與實做學習歷程
          </div>
          <div className="portfolio-author sm:text-sm text-xs text-gray-400 flex justify-between items-center md:gap-3 gap-1 overflow-hidden">
            <div className="flex justify-center items-center gap-1">
              <Image
                src="https://cloud-library.luckertw.com/images/user/author_k.png"
                alt="100127"
                width={30}
                height={30}
                className="sm:size-6 size-5"
              />
              <div className="line-clamp-1">王同學</div>
            </div>
            <div className="flex justify-center items-center md:gap-3 gap-1">
              <div className="flex justify-center items-center gap-1">
                <IconHeart className="sm:size-5 size-4" />
                <div>100</div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <IconEye className="sm:size-5 size-4" />
                <div>100</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
