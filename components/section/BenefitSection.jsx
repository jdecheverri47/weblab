"use client";

import MyCard from "../ui/MyCard";
import MyChip from "../ui/MyChip";
import { motion } from "framer-motion";

function BenefitSection() {
  return (
    <section className="h-screen w-screen px-[8vw] 2xl:pt-[10vh]" id="benefits">
      <div className="mt-2">
        <MyChip title="Benefits" />
        <div className="mt-10">
          <h1 className="text-6xl font-bold">
            Why our plans are{" "}
            <strong className="text-[#D940C0]">perfect</strong> for you?
          </h1>
        </div>

        <div className="grid grid-cols-2 mt-10 items-center justify-between">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <MyCard
                minHeight="400px"
                minWidth="400px"
                title={
                  <div className="flex">
                    <h2>
                      <strong>Wide </strong>Range of Services
                    </h2>
                  </div>
                }
                description="Our company spans from UI/UX design to web and mobile app development, providing a comprehensive approach to meet our client's needs."
                backgroundImage="/images/background-computer.png"
                iWidth="5376"
                iHeight="3584"
              />
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <MyCard
                minHeight="250px"
                minWidth="400px"
                title={
                  <div className="flex">
                    <h2>
                      Latest <strong>Top Tech</strong> Stack
                    </h2>
                  </div>
                }
                description="We use the latest technology stack to build our products, ensuring that our clients get the best quality and performance."
                backgroundImage="/images/code.jpeg"
                iWidth="2048"
                iHeight="1368"
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <MyCard
                minHeight="250px"
                minWidth="400px"
                title={
                  <div className="flex">
                    <h2>
                      Access to<strong>Top Designers</strong>
                    </h2>
                  </div>
                }
                description="Our team consists of top designers and developers who have worked with many clients and have years of experience in the industry."
                backgroundImage="/images/second-box-image.png"
                iWidth="8704"
                iHeight="2176"
              />
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <MyCard
                minHeight="400px"
                minWidth="400px"
                title={
                  <div className="flex">
                    <h2>
                      <strong>Customize</strong> Assistance
                    </h2>
                  </div>
                }
                description="We provide customized assistance to our clients, ensuring that they get the best experience and the best results."
                backgroundImage="/images/people-working-together.png"
                iWidth="4096"
                iHeight="4096"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
