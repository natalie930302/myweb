import Image from "next/image";
import ScrollToTop from "@/components/scroll-to-top";
import { IconBrandGooglePlay, IconBrandAppstore } from "@tabler/icons-react";

const Footer = () => {
  const footerLinks = [
    {
      content: "分享歷程檔案",
      href: "/upload",
    },
    {
      content: "學長姐智囊團",
      href: "/about-checkup",
    },
    {
      content: "最新發布",
      href: "/upload",
    },
    {
      content: "探索更多",
      href: "/upload",
    },
    {
      content: "聯絡我們",
      href: "mailto:info1@luckertw.com",
    },
    {
      content: "常見問題",
      href: "/about-checkup",
    },
    {
      content: "關於雲端圖資館",
      href: "/about-checkup",
      desktopOnly: true,
    },
    {
      content: "使用者條款與隱私權政策",
      href: "/about-checkup",
    },
  ];
  const appDownloadLinks = [
    {
      platform: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.lucker&pli=1",
      content: (
        <div>
          <IconBrandGooglePlay className="lg:block hidden" />
          <Image
            className="lg:hidden w-28"
            width={200}
            height={200}
            src="https://cloud-library.luckertw.com/images/google-play.png"
            alt="Google Play"
          />
        </div>
      ),
    },
    {
      platform: "App Store",
      href: "https://apps.apple.com/us/app/lucker-%E6%8B%89%E8%AA%B2/id1568054145",
      content: (
        <div>
          <IconBrandAppstore className="lg:block hidden" />
          <Image
            className="lg:hidden w-28"
            width={200}
            height={200}
            src="https://cloud-library.luckertw.com/images/app-store.png"
            alt="App Store"
          />
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-primary-100 text-gray-500">
      <div className="container mx-auto lg:py-8 pt-8 pb-0">
        <div className="lg:grid lg:grid-cols-9 lg:gap-4 gap-2 flex flex-col">
          <div className="lg:order-1 lg:col-span-3 order-1">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="https://cloud-library.luckertw.com/images/logo.png"
                width={400}
                height={0}
                alt="Footer Logo"
                className="lg:w-[80%] max-w-[400px] w-[250px] my-2"
              />
            </div>
          </div>
          <div className="lg:order-2 lg:col-span-2 order-2">
            <div className="lg:flex-col flex justify-center">
              {footerLinks
                .slice(0, Math.floor(footerLinks.length / 2))
                .map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`footer-link my-2 px-2 border-gray-500 lg:border-none last:border-none border-r lg:text-base text-sm ${
                      link.mobileOnly
                        ? "block lg:hidden"
                        : link.desktopOnly
                        ? "hidden lg:block"
                        : "block"
                    }`}
                  >
                    {link.content}
                  </a>
                ))}
            </div>
          </div>
          <div className="lg:order-3 lg:col-span-2 order-4">
            <div className="lg:flex-col flex justify-center">
              {footerLinks
                .slice(Math.floor(footerLinks.length / 2), footerLinks.length)
                .map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`footer-link my-2 px-2 border-gray-500 lg:border-none last:border-none border-r lg:text-base text-sm ${
                      link.mobileOnly
                        ? "block lg:hidden"
                        : link.desktopOnly
                        ? "hidden lg:block"
                        : "block"
                    }`}
                  >
                    {link.content}
                  </a>
                ))}
            </div>
          </div>
          <div className="lg:order-4 lg:col-span-2 order-3">
            <div className="flex flex-col lg:items-start items-center">
              <span className="footer-item my-2 px-2">下載【Lucker App】</span>
              <div className="flex lg:justify-start justify-center">
                {appDownloadLinks.map((link, index) => (
                  <div key={index} className="footer-item my-2 px-2">
                    <a href={link.href} alt={link.platform}>
                      {link.content}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center lg:flex hidden">
              <span className="footer-item my-2 px-2">使用【Web編輯器】</span>
              <div className="flex lg:justify-start justify-center">
                <div className="footer-item my-2 px-2">
                  <a
                    href="https://web.luckertw.com/auth/login"
                    className="block px-3 py-1 bg-white rounded-full border-2 text-gray-400 border-gray-400 hover:shadow-md transition-all duration-300 ease-in-out"
                  >
                    進入Web編輯器
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:bg-primary-600 lg:text-white">
        <div className="container mx-auto lg:py-3 pt-2 pb-8">
          <div className="px-5 text-center">
            <span className="text-sm">
              &copy; 2022-2024 Lucker Cloud Library. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
