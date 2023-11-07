"use client";

import MainButton from "../ui/MainButton";
import Image from "next/image";
import { motion } from "framer-motion";

function LandingPage() {
  const ticks = [
    {
      id: 1,
      text: "Budget-Friendly",
    },
    {
      id: 2,
      text: "Rapid Project Delivery",
    },
    {
      id: 3,
      text: "Quality Assurance",
    },
    {
      id: 4,
      text: "Global Impact",
    },
  ];
  return (
    <section className="pt-[2rem] w-screen h-screen flex flex-col" id="landing">
      <div className="px-[5vw] 2xl:px-[8vw] flex">
        <div className="flex flex-col justify-center items-start">
          <div className="text_container text-white max-w-4xl flex flex-col justify-center items-start w-full">
            <motion.h1
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.5,
                type: "spring",
                ease: "easeInOut",
              }}
              className="font-bold text-left 2xl:text-7xl mt-[20vh] lg:text-5xl"
            >
              Where <strong className="text-[#D940C0]">Ideas</strong> Meet{" "}
              <strong className="text-[#D940C0]">Innovation:</strong> Discover
              Your{" "}
              <strong className="bg-[#D940C0] leading-snug px-4">
                Software Solution
              </strong>
            </motion.h1>
            <motion.p
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1,
                type: "spring",
                ease: "easeInOut",
              }}
              className="2xl:text-2xl lg:text-lg text-left mt-6 2xl:max-w-2xl lg:max-w-lg lg:mr-[5rem] font-normal"
            >
              <strong>Welcome</strong> to the intersection of{" "}
              <strong>creativity</strong> and <strong>technology</strong>. With
              our diverse service offerings, you can find the{" "}
              <strong>perfect software solution </strong>
              to match your vision. <strong>Unleash</strong> the full potential
              of your ideas with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.5,
                type: "spring",
                ease: "easeInOut",
              }}
              className="mt-6"
            >
              <MainButton />
            </motion.div>
          </div>
        </div>

        <div className="mt-auto 2xl:ml-[12rem] lg:ml-[1rem]">
          <Image
            src="/images/logo_4x_light.png"
            alt="WebLab Logo"
            className="2xl:h-[25rem] 2xl:w-[24rem] lg:h-[13rem]"
            width={534}
            height={552}
          />
        </div>
      </div>

      <div className="w-full my-auto text-white">
        <ul className="flex gap-[10rem] text-lg justify-center items-center font-medium">
          {ticks.map((tick) => (
            <motion.li
              className="flex justify-center items-center"
              key={tick.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.5,
                type: "spring",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/accept.png"
                alt="tick logo"
                className="h-6 mr-3"
                width={25}
                height={25}
              />
              {tick.text}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LandingPage;
