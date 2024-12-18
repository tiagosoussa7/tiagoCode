"use client";

import CountUp from "react-countup";

const data = [
  { num: 7, text: "Graduações e qualificações" },
  { num: 8, text: "Technologias aprendidas" },
  { num: 5, text: "Projetos completados" },
  { num: 80, text: "Códigos comitados" },
];

export default function Data() {
  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:gap-10 gap-3 max-w-[80vw] mx-auto lg:max-w-none">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex lg:gap-4 gap-1 items-center justify-center"
              >
                <CountUp
                  end={item.num}
                  duration={8}
                  delay={1.2}
                  className="text-accent font-quartenary text-4xl lg:text-6xl"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-accent font-quartenary sm:text-[15px] text-xs`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
