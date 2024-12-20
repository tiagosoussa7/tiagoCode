"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaAdjust,
  FaClock,
  FaShieldAlt,
  FaBrain,
  FaComments,
  FaUsers,
  FaTasks,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const graduation = {
  title: "minhas graduações",
  items: [
    {
      type: "graduação",
      img: "/qualification/logo-unicesumar.png",
      description:
        "Envolve o estudo, projeto, implementação e manutenção de sistemas computacionais. O profissional da área é responsável por analisar, projetar, testar, implantar, documentar, especificar e manter sistemas e softwares.",
      name: "análise de sistemas",
      duration: "2022.2 - 2024.2",
      status: "concluído",
    },
    {
      type: "graduação",
      img: "/qualification/ficEstacio-logo.png",
      description:
        "Envolve a projeção, desenvolvimento, implementação e gerenciamento de sistemas de bancos de dados (SGBDs).",
      name: "banco de dados",
      duration: "2023.2 - 2025.2",
      status: "andamento",
    },
    {
      type: "graduação",
      img: "/qualification/logo-uni.png",
      description:
        "Envolve a criação e manutenção de soluções tecnológicas para a web. Abrangindo conceitos fundamentais de programação e desenvolvimento web, além de novas tecnologias como computação móvel, redes sem fio, sistemas de informação e-commerce e serviços de internet.",
      name: "sistemas para internet",
      duration: "2024.1 - 2026.2",
      status: "andamento",
    },
  ],
};

const course = {
  title: "meus cursos",
  items: [
    {
      type: "curso livre",
      img: "/qualification/cubos-logo.png",
      description:
        "O programa abrange desde os fundamentos da programação até conceitos avançados como desenvolvimento de APIs RESTful e bancos de dados. Os participantes aprendem a utilizar o javaScript, em conjunto com o Node.js, para criar servidores e aplicações robustas e escaláveis.",
      name: "backend javaScript",
      duration: "2023.2",
      status: "concluído",
    },
    {
      type: "bootcamp",
      img: "/qualification/logo-dio.png",
      description:
        "O bootcamp comtempla a construção de interfaces visuais e interativas para aplicações web. Através do aprendizado de linguagens como html5, css3 e javaScript os alunos se capacitam a estruturar o conteúdo de uma página, definir seu estilo e adicionar interativida.",
      name: "frontend Ri-Happy",
      duration: "2024.2",
      status: "concluído",
    },
  ],
};

const hard = {
  title: "minhas skills técnicas",
  items: [
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaNodeJs />,
      name: "node.Js",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <DiVisualstudio />,
      name: "vs code",
    },
  ],
};

const soft = {
  title: "minha skills comportamentais",
  items: [
    {
      icon: <FaShieldAlt />,
      name: "resiliência",
    },
    {
      icon: <FaComments />,
      name: "comunicação",
    },
    {
      icon: <FaUsers />,
      name: "trabalho em equipe",
    },
    {
      icon: <FaClock />,
      name: "pontualidade",
    },
    {
      icon: <FaBrain />,
      name: "criatividade",
    },
    {
      icon: <FaTasks />,
      name: "gestão de tarefas",
    },
    {
      icon: <FaAdjust />,
      name: "adaptabilidade",
    },
  ],
};

export default function Qualification() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
      }}
      className="h-[600px]"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="graduação" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[10px]">
            <div className="sm:text-2xl text-xl mb-[10px] xl:mb-0 text-accent">
              qualificações
            </div>

            {/* menu list */}
            <TabsList className="bg-primary border-2 border-accent rounded-[8px] max-w-max h-full flex flex-col md:flex-row gap-4">
              <TabsTrigger
                value="graduação"
                className="capitalize w-[120px] hover:bg-accent-hover rounded-[8px]"
              >
                graduação
              </TabsTrigger>
              <TabsTrigger
                value="curso livre"
                className="capitalize w-[120px] hover:bg-accent-hover rounded-[8px]"
              >
                curso livre
              </TabsTrigger>
              <TabsTrigger
                value="hard skill"
                className="capitalize w-[120px] hover:bg-accent-hover rounded-[8px]"
              >
                hard skill
              </TabsTrigger>
              <TabsTrigger
                value="soft skill"
                className="capitalize w-[120px] hover:bg-accent-hover rounded-[8px]"
              >
                soft skill
              </TabsTrigger>
            </TabsList>
          </div>

          {/* content - graduation */}
          <TabsContent value="graduação" className="w-full">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="my-4">{graduation.title}</h3>
                <ScrollArea className="h-[460px] p-4">
                  <div className="grid grid-cols-1 h-96 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {graduation.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="h-auto bg-secondary border-2 border-accent rounded-2xl flex flex-col items-center justify-start gap-1 relative p-6"
                        >
                          <div className="h-32 w-full rounded-[8px] relative">
                            <Badge className="text-accent z-40 absolute -top-4 -left-4">
                              {item.type}
                            </Badge>

                            <Image
                              alt="logo de instituição de ensino educacional"
                              src={item.img}
                              fill
                              priority
                              quality={100}
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] bg-accent rounded-full"></span>
                            <p className="flex items-center gap-3 text-accent">
                              {item.name}
                            </p>
                          </div>
                          <span className="text-xs text-center mt-2 text-white/60">
                            {item.description}
                          </span>
                          <span className="text-xs mt-2 text-accent">
                            {item.duration}
                          </span>
                          <span>{item.status}</span>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          {/* content - course */}
          <TabsContent value="curso livre">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="my-4">{course.title}</h3>

                <ScrollArea className="h-[480px] p-4">
                  <div className="grid grid-cols-1 h-96 md:grid-cols-3 gap-4">
                    {course.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="h-auto bg-secondary border-2 border-accent rounded-2xl flex flex-col items-center justify-start gap-1 relative p-6"
                        >
                          <div className="h-32 w-full rounded-[8px] relative">
                            <Badge className="text-accent z-40 absolute -top-4 -left-4">
                              {item.type}
                            </Badge>

                            <Image
                              alt="logo de instituição de ensino educacional"
                              src={item.img}
                              fill
                              priority
                              quality={100}
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] bg-accent rounded-full"></span>
                            <p className="flex items-center gap-3 text-accent">
                              {item.name}
                            </p>
                          </div>
                          <span className="text-xs text-center mt-2 text-white/60">
                            {item.description}
                          </span>
                          <span className="text-xs mt-2 text-accent">
                            {item.duration}
                          </span>
                          <span>{item.status}</span>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          {/* content - hard */}
          <TabsContent value="hard skill">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="my-4">{hard.title}</h3>

                <ScrollArea className="h-[480px] p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {hard.items.map((item, index) => {
                      return (
                        <div key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-40 bg-secondary border-2 border-accent rounded-[8px] flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-accent border-accent rounded-[4px]">
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          {/* content - soft */}
          <TabsContent value="soft skill">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="my-4">{soft.title}</h3>

                <ScrollArea className="h-[480px] p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {soft.items.map((item, index) => {
                      return (
                        <div key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-40 bg-secondary border-2 border-accent rounded-[8px] flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-accent border-accent rounded-[4px]">
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
