"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
//About Data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti corporis numquam eius assumenda! ",
  info: [
    { fieldName: "Name", fieldValue: "Muhammad Farrukh Khan" },
    { fieldName: "Phone", fieldValue: "(+92) 337-8019687" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Skype", fieldValue: "Muhammad Farrukh Khan" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "muhammadfarrukhk26@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Urdu" },
  ],
};
//experience Data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti corporis numquam eius assumenda! ",
items: [
  {
    company: "HM Developers",
    position: "Front-end Intern",
    duration: 'Jan-2022 - July-2022'
  },
  {
    company: "Sybrid PVT LTD",
    position: "Junior Software Engineer",
    duration: 'Jan-2023 - Present'
  },

  {
    company: "Digilysist LLC",
    position: "Web Developr",
    duration: 'Oct-2020 - Jan-2023'
  },
]
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti corporis numquam eius assumenda! ",
  items: [
    {
      company: "HM Developers",
      position: "Front-end Intern",
      duration: 'Jan-2022 - July-2022'
    },
    {
      company: "Sybrid PVT LTD",
      position: "Junior Software Engineer",
      duration: 'Jan-2023 - Present'
    },
  
    {
      company: "Digilysist LLC",
      position: "Web Developr",
      duration: 'Oct-2020 - Jan-2023'
    },
  ]
    };
const Resume = () => {
  return <div>Resume Page</div>;
};

export default Resume;
