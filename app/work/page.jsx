"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "WordPress website",
    title: "Digilysist",
    description:
      "A WordPress website built for a digital marketing brand to present services clearly, improve online visibility, and support lead generation.",
    stack: [{ name: "WordPress" }, { name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/assets/work/1.png",
    live: "http://digilysist.com/",
    github: "",
  },
  {
    num: "02",
    category: "Brand showcase",
    title: "Rangccessories",
    description:
      "A creative brand website developed to promote artistry and collections in collaboration with a digital marketing agency, with a strong visual-first presentation.",
    stack: [{ name: "WordPress" }, { name: "UI Design" }, { name: "SEO" }, { name: "Content Layout" }],
    image: "/assets/assets/work/r1.png",
    live: "https://rangccessories.com/",
    github: "",
  },
  {
    num: "03",
    category: "Business website",
    title: "Seacotrans Trade Co",
    description:
      "A corporate website for an import/export and tax consultancy business, designed to communicate trust, services, and company credibility to clients.",
    stack: [{ name: "WordPress" }, { name: "Business Branding" }, { name: "CSS 3" }, { name: "Responsive Design" }],
    image: "/assets/assets/work/s1.png",
    live: "https://seacotrans.net/",
    github: "",
  },
  {
    num: "04",
    category: "E-commerce store",
    title: "Lafian Enterprises",
    description:
      "An e-commerce website built for a home and personal care brand, focused on selling products online with a clear catalog and customer-friendly storefront experience.",
    stack: [{ name: "WordPress" }, { name: "E-commerce" }, { name: "Product UX" }, { name: "CMS Management" }],
    image: "/assets/assets/work/l1.png",
    live: "https://www.lafian.pk/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                {project?.category}
              </p>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project?.title}
              </h2>
              <p className="text-white/60">{project?.description}</p>
              <ul className="flex flex-wrap items-center gap-2">
                {project?.stack?.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item?.name}
                      {index !== project.stack?.length - 1 && " •"}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project?.live && (
                  <Link href={project.live} target="_blank" rel="noreferrer">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project?.github && (
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects?.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
