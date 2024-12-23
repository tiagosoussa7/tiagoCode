"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

//components
import Slide from "@/components/Slide";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "projeto 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam velit maxime itaque quasi porro recusandae.",
    stack: [
      { icon: <FaHtml5 /> },
      { icon: <FaCss3 /> },
      { icon: <FaJs /> },
      { icon: <FaReact /> },
    ],
    video: "/teste0.mp4",
    live: "",
    github: "",
    linkedIn: "",
  },
  {
    num: "02",
    category: "backend",
    title: "projeto 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam velit maxime itaque quasi porro recusandae.",
    stack: [{ name: "Python" }, { name: "postgrees" }, { name: "visual code" }],
    video: "/teste0.mp4",
    live: "",
    github: "",
    linkedIn: "",
  },
];

const name = [
  { name: "deploy" },
  { name: "repositório" },
  { name: "publicação" },
];

export default function Project() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project num */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-2xl xm:text-4xl font-quartenary leading-none group-hover:text-accent transition-all duration-500 capitalize">
                <span className="text-accent">{project.category}</span> projeto
              </h2>

              {/* project description */}
              <p className="text-white/40 text-xs">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-8">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl xm:text-3xl">
                      {item.icon}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/40"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-[8px] border-2 border-accent bg-secondary flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-accent  group-hover:rotate-45 transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent border-accent rounded-[4px] transition-all duration-500">
                        <p>Deploy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-[8px] border-2 border-accent bg-secondary flex justify-center items-center group">
                        <BsGithub className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent border-accent rounded-[4px] transition-all duration-500">
                        <p>repositótio</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* linkedIn project button */}
                <Link href={project.linkedIn}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-[8px] border-2 border-accent bg-secondary flex justify-center items-center group">
                        <BsLinkedin className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent border-accent rounded-[4px] transition-all duration-500">
                        <p>publicação</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] rounded-[6px] relative group flex justify-center items-center bg-secondary">
                      {/* overlay */}

                      {/* video */}

                      <div className=" flex justify-center items-center relative p-4">
                        <video
                          src={project.video}
                          loop
                          autoPlay
                          className="object-contain rounded-[6px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <Slide
                containerStyles="flex gap-2 absolute xl:left-60 left-0  bottom-[calc(50%_-_22px)] xl:bottom-16 z-20 
                w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-hover rounded-[6px] hover:bg-accent
                text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
