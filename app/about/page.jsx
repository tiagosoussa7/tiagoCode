"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="h-full flex items-center justify-center">
            {/* image + shapes */}
            <div className="hidden lg:flex flex-1 pl-8">
              <div className="relative w-full max-w-[380px]">
                {/* shape */}
                <div className="w-[160px] h-[160px] rounded-xl bg-accent absolute -left-2 -top-2 -z-10"></div>

                {/* image */}
                <div
                  className="rounded-tl-[8px] rounded-tr-[120px] w-[90%] rounded-bl-[40px] rounded-br-[40px] bg-secondary
                lg:min-h-[480px] min-h-[380px] flex items-end justify-center"
                >
                  <Image
                    src="/t1.png"
                    width={350}
                    height={478}
                    quality={100}
                    priority
                    alt=""
                    className="mix-blend-lighten opacity-70 rounded-bl-[40px] rounded-br-[40px]"
                  />
                </div>

                {/* icones */}
                <div
                  className="absolute  p-2 top-[300px] right-[50px] rotate-12 flex items-center
                  justify-center"
                >
                  <div className="text-8xl text-accent">
                    <FaJs />
                  </div>
                </div>

                <div
                  className="absolute p-2 top-[400px] right-[250px] -rotate-12 flex items-center
                  justify-center"
                >
                  <div className="text-6xl text-accent">
                    <SiNextdotjs />
                  </div>
                </div>

                <div
                  className="absolute p-2 top-[200px] right-[300px] rotate-12 flex items-center
                  justify-center"
                >
                  <div className="text-6xl text-accent">
                    <DiVisualstudio />
                  </div>
                </div>

                <div
                  className="absolute p-2 top-[150px] right-[50px] -rotate-3 flex items-center
                  justify-center"
                >
                  <div className="text-5xl text-accent">
                    <FaNodeJs />
                  </div>
                </div>

                <div
                  className="absolute p-2 top-[50px] right-[240px] -rotate-3 flex items-center
                  justify-center"
                >
                  <div className="text-5xl text-accent">
                    <FaCss3 />
                  </div>
                </div>

                <div
                  className="absolute p-2 top-[20px] right-[90px] rotate-12 flex items-center
                  justify-center"
                >
                  <div className="text-7xl text-accent">
                    <FaHtml5 />
                  </div>
                </div>
              </div>
            </div>

            {/* text */}
            <div
              className="text-center lg:text-left w-full lg:w-[50%] mx-auto lg:mx-0 
            flex flex-col gap-4 px-3"
            >
              <div>
                <p className="font-quartenary text-xl">
                  Frontend developer & Analista de Sistemas
                </p>
              </div>
              <p className="text-white/60 max-w-[680px] mx-auto lg:mx-0 mb-2 text-[14px]">
                Sou um analista de Sistemas recém-formado, com forte interesse
                em desenvolvimento web. Atualmente aprofundando meus
                conhecimentos em Banco de Dados e Sistemas para Internet. Possuo
                experiência prática em JavaScript e frameworks populares,
                adquirida em bootcamps e cursos. Sou um profissional adaptável e
                colaborativo, com habilidades de comunicação e trabalho em
                equipe. Minhas atividades esportivas (vôlei, ciclismo e corrida)
                me proporcionam disciplina e resistência para enfrentar os
                desafios que a área de tecnologia apresenta.
              </p>

              {/* button */}
              <div>
                <Link href="/Currículo.pdf" target="_blank">
                  <Button className="bg-accent-hover rounded-[8px] hover:bg-accent">
                    <span className="text-primary">download cv</span>
                    <FiDownload className="text-xl text-primary" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
