"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconUser, IconChevronRight, IconSearch } from "@tabler/icons-react";

const SubNavItem = ({ href, content, mobileOnly, desktopOnly, otherClass }) => (
  <li
    className={`nav-item ${
      mobileOnly ? "block lg:hidden" : desktopOnly ? "hidden lg:block" : "block"
    }`}
  >
    <a href={href} className={`nav-link ${otherClass || ""}`}>
      {content}
    </a>
  </li>
);

const NavItem = ({
  href,
  content,
  mobileOnly,
  desktopOnly,
  otherClass,
  subitems,
}) => {
  const [showSubitems, setShowSubitems] = useState(false);

  const toggleSubitems = () => {
    setShowSubitems(!showSubitems);
  };

  return (
    <li
      className={`nav-item ${
        mobileOnly
          ? "block lg:hidden"
          : desktopOnly
          ? "hidden lg:block"
          : "block"
      }`}
    >
      <a
        href={href}
        className={`nav-link ${otherClass || ""}`}
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
      </a>
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
            className="sub"
          >
            {subitems.map((subitem, index) => (
              <SubNavItem key={index} {...subitem} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      content: (
        <Image
          src="https://cloud-library.luckertw.com/images/logo.png"
          alt="Lucker Library Logo"
          width={150}
          height={0}
          className="my-2"
        />
      ),
      mobileOnly: true,
      otherClass: "hover:bg-white",
    },
    { href: "#", content: "分享歷程檔案", otherClass: "text-sky-400" },
    {
      href: "#",
      content: "學長姐智囊團",
    },
    {
      href: "#",
      content: "黃阿姨找題目",
      otherClass: "text-yellow-400",
    },
    {
      href: "/search",
      content: <IconSearch className="vert-hor" />,
      desktopOnly: true,
    },
    {
      href: "javascript:void(0);",
      content: <IconUser />,
      desktopOnly: true,
      subitems: [
        { href: "#", content: "會員中心" },
        { href: "#", content: "許願池" },
        { href: "#", content: "登出" },
      ],
    },
    {
      href: "javascript:void(0);",
      content: "會員中心",
      mobileOnly: true,
      subitems: [
        { href: "#", content: "我的收藏" },
        { href: "#", content: "我的檔案" },
        { href: "#", content: "兌換紀錄" },
        { href: "#", content: "我的麻幣" },
      ],
    },
    { href: "#", content: "進階搜尋", mobileOnly: true },
    { href: "/portfolio/latest", content: "最新發布", mobileOnly: true },
    { href: "#", content: "常見問題", mobileOnly: true },
    { href: "#", content: "隱私權政策", mobileOnly: true },
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
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
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
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
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
