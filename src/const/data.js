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
    url: "https://www.fiverr.com/s/pdv99XG",
    name: "Fiverr Freelance",
    icon: TbBrandFiverr,
    isRelease: true,
  },
  {
    name: "Social Media",
    icon: IoChatbubblesOutline,
    children: [
      {
        url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
        name: "Linkedin",
        icon: FaLinkedinIn,
        isRelease: true,
      },
      {
        url: "http://www.youtube.com/@aimanyw",
        name: "Youtube",
        icon: FaYoutube,
        isRelease: true,
      },
      {
        url: "https://www.instagram.com/aimanyusuf.me/",
        name: "Instagram",
        icon: FaInstagram,
        isRelease: true,
      },
      {
        url: "https://www.tiktok.com/@aimanyusuf.me",
        name: "Tiktok",
        icon: FaTiktok,
        isRelease: true,
      },
      {
        url: "https://x.com/aimanyw_",
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
