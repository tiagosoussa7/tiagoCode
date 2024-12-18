"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 1, ease: "easeInOut" },
        }}
      >
        <div className="lg:flex flex-1 pl-8">
          <div className="relative w-full max-w-[380px]">
            {/* shape top */}
            <div className="w-[240px] h-[320px] rounded-full bg-accent absolute -left-0.5 -top-0.3 -z-10"></div>

            {/* image */}
            <div className="rounded-full bg-primary lg:min-h-[360px] min-h-[320px] flex items-end justify-center">
              <Image
                src="/t1.png"
                width={340}
                height={360}
                quality={100}
                priority
                alt=""
                className="mix-blend-lighten opacity-70 rounded-full"
              />
            </div>

            {/* shape bottom*/}
            <div className="w-[240px] h-[320px] rounded-full bg-accent absolute -right-0.5 -bottom-0.5 -z-10"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
