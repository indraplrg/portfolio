import { motion } from "motion/react";
import { projects } from "../data/content";

import bgImg from "../assets/abstract_background.jpg";
import Card from "../components/Card";
import framerConfig from "../libs/animationConfig";

const Project = () => {
  return (
    <motion.div
      variants={framerConfig.parentVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen flex-col gap-4 p-5"
      id="project"
    >
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={bgImg}
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <motion.h1
        variants={framerConfig.textVariants}
        className="font-bebas-neue text-6xl uppercase"
      >
        project
      </motion.h1>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => {
          return (
            <motion.div variants={framerConfig.cardVariants}>
              <Card
                classname={`hover:translate-x-1 hover:bg-[#e5e5e7] hover:translate-y-1px hover:shadow-none transition-all ease-in-out cursor-pointer ${index === projects.length - 1 ? "md:mb-0 mb-16" : ""}`}
              >
                <a
                  className="font-bricolage w-full"
                  href="https://gitlab.com/indralolx/smart-parking-backend"
                  target="_blank"
                >
                  <h1 className="font-bebas-neue text-2xl font-semibold">
                    {project.title}
                  </h1>
                  <p>{project.description}</p>
                  <ul className="mt-1 flex flex-wrap gap-2 text-sm capitalize">
                    {project.technologies.map((tech) => {
                      return (
                        <li
                          className="h-fit w-fit rounded-md bg-[#a1d12c] p-1"
                          key={tech}
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </a>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Project;
