import {
  FaCode,
  FaFileCode,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";

export const links = [
  {
    url: "https://aimanyusuf.me",
    name: "Portfolio Website",
    icon: FaCode,
    isRelease: true,
  },
  {
    url: "https://www.fiverr.com/s/e6AzzLm",
    name: "Fiverr Freelance",
    icon: TbBrandFiverr,
    isRelease: true,
  },
  {
    name: "Social Media",
    icon: IoChatbubblesOutline,
    children: [
      {
        url: "https://www.linkedin.com/in/aiman",
        name: "Linkedin",
        icon: FaLinkedinIn,
        isRelease: true,
      },
      {
        url: "https://www.youtube.com/@aiman",
        name: "Youtube",
        icon: FaYoutube,
        isRelease: false,
      },
      {
        url: "https://instagram.com/aiman",
        name: "Instagram",
        icon: FaInstagram,
        isRelease: true,
      },
      {
        url: "https://tiktok.com/@aiman",
        name: "Tiktok",
        icon: FaTiktok,
        isRelease: true,
      },
      {
        url: "https://twitter.com/aiman",
        name: "X",
        icon: FaXTwitter,
        isRelease: true,
      },
    ],
  },
  {
    url: "https://lynk.id/source-code",
    name: "Source Code - Lynk.id",
    icon: FaFileCode,
    isRelease: false,
  },
];
