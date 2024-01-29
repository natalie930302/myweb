"use client";
import { useState, useRef, useEffect, useCallback } from "react";
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

const PortfolioCard = ({
  portfolio,
  mode,
  dropdown,
  checkItems,
  setCheckItems,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const checkBoxRef = useRef(null);

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
      } else if (
        checkBoxRef.current &&
        checkBoxRef.current.contains(e.target)
      ) {
        setCheckStatus(!checkStatus);
        if (!checkStatus) {
          setCheckItems((prev) => [...prev, portfolio?.portfolio_id]);
        } else {
          setCheckItems((prev) =>
            prev.filter((item) => item !== portfolio?.portfolio_id)
          );
        }
      }
    },
    [showDropdown, checkStatus, checkItems]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  const renderTags = () => {
    const tagMode =
      portfolio?.comment === 1
        ? 1
        : mode === 2 && portfolio?.checkup === 0
        ? 2
        : false;
    return (
      tagMode && (
        <div
          className={`portfolio-tag absolute md:top-6 md:left-6 top-5 left-5 text-white px-4 py-1 rounded-full shadow-default text-sm line-clamp-1 ${
            tagMode === 1 ? "bg-primary-700" : "bg-gray-400"
          }`}
        >
          {tagMode === 1 ? "作品講評" : "待講評"}
        </div>
      )
    );
  };

  const renderDropdown = () => {
    return (
      dropdown && (
        <>
          <button
            ref={dropdownButtonRef}
            className="portfolio-dropdown-btn bg-white text-gray-400 p-0.5 rounded-full shadow-default absolute md:top-6 md:right-6 top-5 right-5"
          >
            <IconDots className="size-6" />
          </button>
          <AnimatePresence>
            <motion.div
              ref={dropdownRef}
              className="portfolio-dropdown bg-white rounded-sm shadow-md sm:w-32 w-28 overflow-hidden absolute md:top-16 md:right-6 top-14 right-5"
              initial={{ opacity: 0, height: 0, visibility: "hidden" }}
              animate={{
                opacity: showDropdown ? 1 : 0,
                height: showDropdown ? "auto" : 0,
                visibility: "visible",
              }}
              exit={{ opacity: 0, height: 0, visibility: "hidden" }}
            >
              <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                {dropdown === 1 && (
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      <div className="flex justify-start items-center gap-1">
                        <IconBookmark className="size-4" />
                        <div>取消收藏</div>
                      </div>
                    </a>
                  </li>
                )}
                {dropdown === 2 && (
                  <>
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
                  </>
                )}
              </ul>
            </motion.div>
          </AnimatePresence>
        </>
      )
    );
  };

  const renderCheckbox = () => {
    return (
      <button
        ref={checkBoxRef}
        className={`portfolio-btn size-7 text-white border-2 border-white p-0.5 rounded-full shadow-default absolute md:top-6 md:right-6 top-5 right-5 flex items-center justify-center ${
          checkStatus ? "bg-secondary-500" : "bg-gray-300"
        }`}
      >
        {checkStatus ? checkItems?.indexOf(portfolio?.portfolio_id) + 1 : ""}
      </button>
    );
  };

  return (
    <div className="portfolio-card relative shadow-default rounded-md">
      {(mode === 1 || mode === 2) && renderTags()}
      {mode === 2 && renderDropdown()}
      {mode === 3 && renderCheckbox()}
      <Link href="/portfolio/100127">
        <div className="md:p-4 p-3 overflow-hidden flex flex-col md:gap-3 gap-2">
          <Image
            src={portfolio?.thumbnail}
            alt={portfolio?.portfolio_id}
            width={300}
            height={300}
            className="w-full rounded-md shadow-default"
          />
          <h5 className="portfolio-name text-lg text-center font-bold line-clamp-2 min-h-[3em]">
            {portfolio?.title}
          </h5>
          <div className="portfolio-type text-base text-center line-clamp-1">
            {portfolio?.type?.[0]}
          </div>
          <div className="portfolio-author sm:text-sm text-xs text-gray-400 flex justify-between items-center md:gap-3 gap-1 overflow-hidden">
            <div className="flex justify-center items-center gap-1">
              <Image
                src="https://cloud-library.luckertw.com/images/user/author_k.png"
                alt="author_avatar_img"
                width={30}
                height={30}
                className="sm:size-6 size-5"
              />
              <div className="line-clamp-1">{portfolio?.author_name}</div>
            </div>
            <div className="flex justify-center items-center md:gap-3 gap-1">
              <div className="flex justify-center items-center gap-1">
                <IconHeart className="sm:size-5 size-4" />
                <div>{portfolio?.viewed_count}</div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <IconEye className="sm:size-5 size-4" />
                <div>{portfolio?.like_count}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
