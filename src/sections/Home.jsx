import { motion } from "motion/react";

import { socials, focusAreas } from "../data/content";
import bgImg from "../assets/abstract_background.jpg";
import profileImg from "../assets/profile.webp";
import framerConfig from "../libs/animationConfig";

import Card from "../components/Card";
import {
  CertificateIcon,
  EnvelopeIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

const Home = () => {
  return (
    <motion.div
      variants={framerConfig.parentVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen w-full flex-col gap-4 p-5"
      id="home"
    >
      {/* background image */}
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={bgImg}
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* heading */}
      <motion.h1
        variants={framerConfig.textVariants}
        className="font-bebas-neue text-6xl uppercase"
      >
        about me
      </motion.h1>

      {/* content */}
      <div className="mb-16 flex flex-col gap-4 md:mb-0">
        {/* about me */}
        <motion.div variants={framerConfig.cardVariants}>
          <Card classname="w-full">
            <div className="flex w-full flex-col">
              <h3 className="font-bebas-neue mb-1 text-3xl font-semibold text-wrap uppercase lg:hidden">
                moh. asykarindra puluraga
              </h3>
              <div className="flex w-full gap-4">
                <div className="h-32 w-52 border-2 p-2 shadow-[4px_4px_0_0_rgba(34,34,34,1)] lg:h-50 lg:w-50">
                  <img
                    src={profileImg}
                    className="h-full w-full border-2 object-cover"
                  />
                </div>
                <div className="ml-3 flex w-full flex-col gap-2 text-sm lg:w-2/4">
                  <h3 className="font-bebas-neue hidden text-3xl font-semibold text-wrap uppercase lg:block">
                    moh. asykarindra puluraga
                  </h3>
                  <p className="font-bricolage-grotesque">
                    Backend & Full Stack Developer specializing in Go, Node.js,
                    and ASP.NET Core. Passionate about building secure,
                    scalable, and high-performance web applications.
                  </p>
                  <ul className="mt-1 hidden gap-x-4 capitalize lg:flex">
                    <li className="flex items-center gap-x-2">
                      <MapPinIcon size={25} />
                      gorontalo, indonesia
                    </li>
                    <li className="flex items-center gap-x-2 normal-case">
                      <EnvelopeIcon size={25} />
                      indralolx@gmail.com
                    </li>
                  </ul>
                  <ul className="mt-1 flex w-fit justify-end gap-2 gap-x-4">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <li
                          className="rounded-md bg-[#222] p-1 text-white"
                          key={social.id}
                        >
                          <a href={social.href} target="_blank">
                            <Icon size={20} weight={social.weight} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <span className="mr-4 hidden border-r-2 lg:block"></span>
                <div className="hidden flex-col gap-y-3 lg:flex">
                  <h1 className="font-bebas-neue w-fit rounded-md border-2 bg-[#a1d12c] px-2 text-xl font-bold uppercase">
                    foucs area
                  </h1>
                  <ul className="flex flex-col gap-y-2 text-sm capitalize">
                    {focusAreas.map((focusArea) => {
                      const Icon = focusArea.icon;
                      return (
                        <li
                          className="flex items-center gap-x-2"
                          key={focusArea.id}
                        >
                          <Icon
                            size={26}
                            weight="bold"
                            className="rounded-sm bg-[#a1d12c] p-1"
                          />
                          {focusArea.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* content */}

        <motion.h1
          variants={framerConfig.textVariants}
          className="text-md font-bebas-neue mt-3 text-4xl capitalize lg:hidden"
        >
          focus area
        </motion.h1>

        <motion.div variants={framerConfig.cardVariants}>
          <Card classname="lg:hidden -mt-3">
            <ul className="flex w-full flex-col gap-3 text-sm capitalize">
              {focusAreas.map((focusArea) => {
                const Icon = focusArea.icon;
                return (
                  <>
                    <li
                      className="flex items-center gap-x-2"
                      key={focusArea.id}
                    >
                      <Icon
                        size={26}
                        weight="bold"
                        className="shadow-[4px,4px,0,0, rbga(34,34,34,1)] rounded-sm bg-[#a1d12c] p-1"
                      />
                      {focusArea.title}
                    </li>
                    <hr
                      className={`opacity-25 ${5 === focusArea.id ? "hidden" : ""}`}
                    />
                  </>
                );
              })}
            </ul>
          </Card>
        </motion.div>

        <div className="mt-3 flex flex-col">
          <motion.h1
            variants={framerConfig.textVariants}
            className="font-bebas-neue text-4xl uppercase"
          >
            education & sertification
          </motion.h1>

          <div className="mt-1 flex flex-col gap-4 overflow-scroll pr-2 pb-5">
            <motion.div
              variants={framerConfig.cardVariants}
              className="min-w-fit"
            >
              <Card classname="min-w-fit">
                <div className="flex flex-col gap-1 text-sm lg:flex-row">
                  <GraduationCapIcon size={38} className="hidden lg:block" />
                  <div className="font-medium text-gray-500">
                    <h3 className="font-bebas-neue flex w-fit items-center gap-1 bg-linear-to-t from-[#b9ff00] from-50% to-transparent to-50% px-1 text-3xl font-semibold text-[#222] capitalize">
                      <GraduationCapIcon size={38} className="lg:hidden" />
                      education
                    </h3>
                    <h2 className="font-semibold text-[#222]">
                      Universitas Ichsan Gorontalo
                    </h2>
                    <p>Bachelor of Informatics Engineering</p>
                    <p>GPA: 3.74 / 4.00</p>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={framerConfig.cardVariants}>
              <Card classname="min-w-fit">
                <div className="flex w-full flex-col gap-2 text-sm lg:flex-row">
                  <CertificateIcon size={38} className="hidden lg:block" />

                  <div>
                    <h3 className="font-bebas-neue flex w-fit items-center gap-1 bg-linear-to-t from-[#b9ff00] from-50% to-transparent to-50% text-3xl font-semibold capitalize">
                      <CertificateIcon size={38} className="lg:hidden" />
                      sertification
                    </h3>
                    <h2 className="font-semibold">LSP Digital</h2>
                    <div className="font-medium text-gray-500">
                      <p>Junior web programmer</p>
                      <p>Competent</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
