"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Design",
    description:
      "I design polished, user-focused websites tailored to client goals, helping businesses present their brand clearly and professionally across all devices.",
    href: "",
  },
  {
    num: "02",
    title: "WordPress Development",
    description:
      "I build and customize WordPress websites using the right themes, plugins, and layouts to create scalable, easy-to-manage business sites and online stores.",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    description:
      "I create fast, responsive, and smooth-performing websites using modern front-end development practices, with attention to usability, speed, and functionality.",
    href: "",
  },
  {
    num: "04",
    title: "CMS & Hosting Support",
    description:
      "I provide consultation and support for CMS setup, hosting guidance, and ongoing website management so clients can keep their digital presence running smoothly.",
    href: "",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service?.num}
                  </div>
                  <Link
                    href={service?.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service?.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service?.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
