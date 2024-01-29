"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconUser,
  IconChevronRight,
  IconSearch,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const NavItem = ({ content, mobileOnly, desktopOnly, subitems }) => {
  const [showSubitems, setShowSubitems] = useState(false);
  const toggleSubitems = () => {
    setShowSubitems(!showSubitems);
  };

  return (
    <>
      <li
        className={`nav-item ${
          mobileOnly
            ? "!flex lg:!hidden"
            : desktopOnly
            ? "!hidden lg:!flex"
            : ""
        }`}
        onClick={() => {
          if (subitems && subitems.length > 0) {
            toggleSubitems();
          }
        }}
      >
        {content}
        {subitems && subitems.length > 0 && (
          <motion.div
            className="arrow"
            animate={{ rotate: showSubitems ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconChevronRight />
          </motion.div>
        )}
      </li>
      <AnimatePresence>
        {subitems && subitems.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, height: 0, visibility: "hidden" }}
            animate={{
              opacity: showSubitems ? 1 : 0,
              height: showSubitems ? "auto" : 0,
              visibility: showSubitems ? "visible" : "hidden",
            }}
            exit={{ opacity: 0, height: 0, visibility: "hidden" }}
            className={`sub ${
              mobileOnly
                ? "!flex lg:!hidden"
                : desktopOnly
                ? "!hidden lg:!flex"
                : ""
            }`}
          >
            {subitems.map((subitem, index) => (
              <NavItem key={index} {...subitem} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      content: (
        <a href="/" className="p-3">
          <Image
            src="https://cloud-library.luckertw.com/images/logo.png"
            alt="Lucker Library Logo"
            width={150}
            height={0}
            className="my-2"
          />
        </a>
      ),
      mobileOnly: true,
    },
    {
      content: (
        <a href="/upload" className="p-3 nav-link text-sky-400">
          分享歷程檔案
        </a>
      ),
    },
    {
      content: (
        <a href="/about-checkup" className="p-3 nav-link">
          學長姐智囊團
        </a>
      ),
    },
    {
      content: (
        <a
          href="https://ai.huang.luckertw.com/"
          className="p-3 nav-link text-yellow-400"
        >
          黃阿姨找題目
        </a>
      ),
    },
    {
      content: (
        <a href="/search" className="p-3">
          <IconSearch className="vert-hor" />
        </a>
      ),
      desktopOnly: true,
    },
    {
      content: (
        <div className="p-3">
          <IconUser />
        </div>
      ),
      desktopOnly: true,
      subitems: [
        {
          content: (
            <a href="/profile" className="p-3 nav-link">
              會員中心
            </a>
          ),
        },
        {
          content: (
            <a
              href="https://www.surveycake.com/s/2RkQN"
              className="p-3 nav-link"
            >
              許願池
            </a>
          ),
        },
        {
          content: (
            <a href="/logout" className="p-3 nav-link">
              登出
            </a>
          ),
        },
      ],
    },
    {
      content: <div className="p-3">會員中心</div>,
      mobileOnly: true,
      subitems: [
        {
          content: (
            <a href="/profile#save" className="p-3 nav-link">
              我的收藏
            </a>
          ),
        },
        {
          content: (
            <a href="/profile#files" className="p-3 nav-link">
              我的檔案
            </a>
          ),
        },
        {
          content: (
            <a href="/profile#history" className="p-3 nav-link">
              兌換紀錄
            </a>
          ),
        },
        {
          content: (
            <a href="/profile#assets" className="p-3 nav-link">
              我的麻幣
            </a>
          ),
        },
      ],
    },
    {
      content: (
        <a href="/search" className="p-3 nav-link">
          進階搜尋
        </a>
      ),
      mobileOnly: true,
    },
    {
      content: (
        <a href="/latest" className="p-3 nav-link">
          最新發布
        </a>
      ),
      mobileOnly: true,
    },
    {
      content: (
        <a href="/faq" className="p-3 nav-link">
          常見問題
        </a>
      ),
      mobileOnly: true,
    },
    {
      content: (
        <a href="/privacy" className="p-3 nav-link">
          隱私權政策
        </a>
      ),
      mobileOnly: true,
    },
    {
      content: (
        <a
          href="/login"
          className="lg:w-16 w-28 mx-auto my-3 lg:m-0 btn btn-primary"
        >
          登入
        </a>
      ),
    },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header>
      <nav className="header-nav">
        <div className="container py-5">
          <a href="/" className="nav-brand">
            <Image
              src="https://cloud-library.luckertw.com/images/logo.png"
              alt="Lucker Library Logo"
              width={180}
              height={0}
              className="mr-3"
            />
          </a>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="nav-toggle-btn"
            aria-controls="mobile-menu-2"
            aria-expanded={mobileMenuOpen}
          >
            <IconMenu2 className="size-6" />
          </button>
          <AnimatePresence>
            <motion.div
              key={`menu-${mobileMenuOpen ? "open" : "closed"}`}
              initial={{ right: "-100%" }}
              animate={{ right: mobileMenuOpen ? 0 : "-100%" }}
              exit={{ right: "-100%" }}
              transition={{ type: "linear", duration: 0.3 }}
              className="nav-menu"
              id="mobile-menu-2"
            >
              <ul>
                <li>
                  <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="nav-toggle-btn"
                    aria-controls="mobile-menu-2"
                    aria-expanded={mobileMenuOpen}
                  >
                    <IconX className="size-6" />
                  </button>
                </li>
                {navItems.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </ul>
            </motion.div>
            {mobileMenuOpen && (
              <div className="nav-backdrop" onClick={toggleMobileMenu}></div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
