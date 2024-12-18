"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//components
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Certificates from "@/components/Certificates";

const data = [
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "",
    category: "graduação",
    img: "/certificate/thumb-1.png",
    title: "Analista de Sistemas",
  },
  {
    href: "/files/riHappy.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    category: "frontend",
    img: "/certificate/dioFrontRiHappy.png",
    title: "Bootcamp RiHappy",
  },

  {
    href: "/files/cubos.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    category: "backend",
    img: "/certificate/cubosAcademy.png",
    title: "BackEnd - javaScript",
  },
  {
    href: "",
    category: "fullstack",
    img: "/certificate/thumb-1.png",
    title: "desenvolver python",
  },
];

export default function Certificate() {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "todos" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("todos");

  const [visibleItems, setVisibleItems] = useState(8);

  const filterCertificate =
    tabValue === "todos"
      ? data.filter((item) => item.category !== "todos")
      : data.filter((item) => item.category === tabValue);

  const moreItems = () => {
    setVisibleItems((prev) => prev + 4);
  };

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
        <Tabs defaultValue="todos" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[10px]">
            <div className="sm:text-2xl text-xl mb-[10px] xl:mb-0">
              Meus certificados
            </div>

            {/* render tab triggers */}
            <TabsList className="bg-primary border-2 rounded-[8px] max-w-max h-full flex flex-col md:flex-row gap-4">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px] hover:bg-primary rounded-[8px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* select tab */}
          <TabsContent value={tabValue} className="w-full">
            <ScrollArea className="h-[550px] p-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px]">
                <AnimatePresence>
                  {filterCertificate
                    .slice(0, visibleItems)
                    .map((item, index) => {
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.6 }}
                          key={index}
                        >
                          <Certificates {...item} />
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>

              {/* more items */}
              {visibleItems < filterCertificate.length && (
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={moreItems}
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 border border-accent-hover bg-accent-hover rounded-[8px] hover:bg-accent"
                  >
                    <span className="text-primary">+ certificados</span>
                  </Button>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
