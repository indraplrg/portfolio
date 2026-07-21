import { motion } from "motion/react";

import { skills } from "../data/content";
import bgImg from "../assets/abstract_background.jpg";
import Card from "../components/Card";
import framerConfig from "../libs/animationConfig";

const Skill = () => {
  return (
    <motion.div
      variants={framerConfig.parentVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen w-full flex-col gap-4 p-5"
      id="project"
    >
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={bgImg}
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-4">
        <motion.h1
          variants={framerConfig.textVariants}
          className="font-bebas-neue text-6xl"
        >
          skills & technologies
        </motion.h1>
        <div className="flex flex-col gap-y-4 overflow-x-scroll overflow-y-hidden pr-2 pb-2">
          {skills.map((skill, index) => {
            return (
              <motion.div variants={framerConfig.cardVariants}>
                <Card
                  classname={`h-fit ${index === skills.length - 1 ? "mb-16" : ""}`}
                >
                  <div>
                    <h2 className="font-bebas-neue text-2xl">{skill.title}</h2>
                    <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
                      {skill.items.map((item) => {
                        return (
                          <li
                            key={item}
                            className="rounded-md bg-[#a1d12c] p-1"
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
