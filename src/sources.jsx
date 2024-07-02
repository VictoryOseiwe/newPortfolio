import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { TbGrowth } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

export const socialHandles = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/victory-oseiwe",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/VictoryOseiwe",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "https://x.com/VictoryOseiwe",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@VictoryOseiwe",
  },
];

export const tabs = [
  { name: "About Me", id: "about" },
  { name: "Skill", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

export const aboutMe = [
  {
    id: 1,
    icon: <FaUserCheck />,
    description: "Incomparable insights",
    link: "",
  },
  {
    id: 2,
    icon: <IoAnalytics />,
    description: "Creative Market Research Analytics",
    link: "",
  },
  {
    id: 3,
    icon: <AiOutlineTeam />,
    description: "Team Working",
    link: "",
  },
  {
    id: 4,
    icon: <TbGrowth />,
    description: "Dedicated Space For Grwoth",
    link: "",
  },
];

export const skill = [
  {
    id: 1,
    title: "UI/UX",
    data: [
      {
        skill: "Adobe Illustrator",
        level: "Exprienced",
      },
      {
        skill: "Adobe Photoshop",
        level: "Exprienced",
      },
    ],
  },
  {
    id: 2,
    title: "Front-End",
    data: [
      {
        skill: "HTML",
        level: "Exprienced",
      },
      {
        skill: "CSS",
        level: "Exprienced",
      },
      {
        skill: "Javascript",
        level: "Exprienced",
      },
      {
        skill: "REACT",
        level: "Exprienced",
      },
    ],
  },
  {
    id: 3,
    title: "Back-End",
    data: [
      {
        skill: "NODEJS",
        level: "Exprienced",
      },
      {
        skill: "EXPRESS",
        level: "Exprienced",
      },
      {
        skill: "POSTGRES",
        level: "Exprienced",
      },
    ],
  },
];

export const services = [
  {
    id: 1,
    icon: <IoColorPaletteOutline />,
    title: "UI/UX DESINGER",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    icon: <IoCodeSlash />,
    title: "FULL-STACK WEB DEVELOPER",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    icon: <MdVideoLibrary />,
    title: "CONTENT CREATOR",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

export const contact = [
  {
    id: 1,
    icon: <MdAlternateEmail />,
    title: "Email",
    content: "thisisvictory@gmail.com",
    link: "mailto:  ",
  },
  {
    id: 2,
    icon: <HiOutlinePhone />,
    title: "Phone",
    content: "+2349122182908",
    link: "tel: ",
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    title: "Address",
    content: "Nigeria",
    link: "https://www.google.com/maps",
  },
];

export const footMenu = [
  {
    id: 1,
    title: "Explore",
    data: [
      {
        heading: "About",
        link: "#about",
      },
      {
        heading: "Services",
        link: "#services",
      },
    ],
  },
  {
    id: 2,
    title: "Connect",
    data: [
      {
        heading: "Contact",
        link: "#contact",
      },
    ],
  },
  {
    id: 3,
    title: "Trusted Services",
    data: [
      {
        heading: "Services 1",
        link: "#services1",
      },
      {
        heading: "Services 2",
        link: "#services2",
      },
    ],
  },
];
