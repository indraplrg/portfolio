import bgImg from "../assets/abstract_background.jpg";
import profileImg from "../assets/profile.webp";

import Card from "../components/Card";
import {
  BrowserIcon,
  CalendarIcon,
  CertificateIcon,
  CircuitryIcon,
  DatabaseIcon,
  EnvelopeIcon,
  EnvelopeSimpleIcon,
  EyeIcon,
  FacebookLogoIcon,
  GithubLogoIcon,
  GitlabLogoIcon,
  GraduationCapIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  WrenchIcon,
} from "@phosphor-icons/react";

const Home = () => {
  return (
    <div
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
      <h1 className="font-bebas-neue text-6xl uppercase">about me</h1>

      {/* content */}
      <div className="flex flex-col gap-4">
        {/* about me */}
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
                  and ASP.NET Core. Passionate about building secure, scalable,
                  and high-performance web applications.
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
                  <li className="rounded-md bg-[#222] p-1 text-white">
                    <a href="https://www.github.com/indraplrg" target="_blank">
                      <GithubLogoIcon size={20} weight="fill" />
                    </a>
                  </li>
                  <li className="rounded-md bg-[#222] p-1 text-white">
                    <a href="https://www.gitlab.com/indralolx" target="_blank">
                      <GitlabLogoIcon size={20} weight="fill" />
                    </a>
                  </li>
                  <li className="rounded-md bg-[#222] p-1 text-white">
                    <a
                      href="https://www.linkedin.com/in/indra-puluraga/"
                      target="_blank"
                    >
                      <LinkedinLogoIcon size={20} />
                    </a>
                  </li>
                  <li className="rounded-md bg-[#222] p-1 text-white">
                    <a href="https://instagram.com/asykarindra" target="_blank">
                      <InstagramLogoIcon size={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <span className="mr-4 hidden border-r-2 lg:block"></span>
              <div className="hidden flex-col gap-y-3 lg:flex">
                <h1 className="font-bebas-neue w-fit rounded-md border-2 bg-[#a1d12c] px-2 text-xl font-bold uppercase">
                  foucs area
                </h1>
                <ul className="flex flex-col gap-y-2 text-sm capitalize">
                  <li className="flex items-center gap-x-2">
                    <WrenchIcon
                      size={26}
                      weight="bold"
                      className="rounded-sm bg-[#a1d12c] p-1"
                    />
                    backend development
                  </li>
                  <li className="flex items-center gap-x-2">
                    <BrowserIcon
                      size={26}
                      weight="bold"
                      className="rounded-sm bg-[#a1d12c] p-1"
                    />
                    frontend development
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CircuitryIcon
                      size={26}
                      weight="bold"
                      className="rounded-sm bg-[#a1d12c] p-1"
                    />
                    API design & integration
                  </li>
                  <li className="flex items-center gap-x-2">
                    <DatabaseIcon
                      size={26}
                      weight="bold"
                      className="rounded-sm bg-[#a1d12c] p-1"
                    />{" "}
                    database design
                  </li>
                  <li className="flex items-center gap-x-2">
                    <EyeIcon
                      size={26}
                      weight="bold"
                      className="rounded-sm bg-[#a1d12c] p-1"
                    />{" "}
                    computer vision
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* content */}
        <div className="mt-3 flex flex-col">
          <h1 className="font-bebas-neue text-4xl uppercase">
            education & sertification
          </h1>

          <div className="flex gap-4 overflow-scroll pr-2 pb-5">
            <Card classname="min-w-fit">
              <div className="flex w-full flex-col text-sm">
                <h3 className="font-bebas-neue flex w-fit items-center gap-1 bg-linear-to-t from-[#b9ff00] from-50% to-transparent to-50% px-1 text-3xl font-semibold capitalize">
                  <GraduationCapIcon size={38} />
                  education
                </h3>
                <h2 className="font-semibold">Universitas Ichsan Gorontalo</h2>
                <div className="font-medium text-gray-500">
                  <p>Bachelor of Informatics Engineering</p>
                  <p>GPA: 3.74 / 4.00</p>
                </div>
              </div>
            </Card>
            <Card classname="min-w-fit">
              <div className="flex w-full flex-col text-sm">
                <h3 className="font-bebas-neue flex w-fit items-center gap-1 bg-linear-to-t from-[#b9ff00] from-50% to-transparent to-50% text-3xl font-semibold capitalize">
                  <CertificateIcon size={38} />
                  sertification
                </h3>
                <p className="font-bricolage-grotesque max-w-72 text-justify"></p>
                <h2 className="font-semibold">LSP Digital</h2>
                <div className="font-medium text-gray-500">
                  <p>Junior web programmer</p>
                  <p>Competent</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-16 md:mb-0 md:hidden">
          <h1 className="font-bebas-neue text-4xl">skills & technologies</h1>
          <div className="grid h-56 grid-flow-col grid-rows-2 gap-x-4 overflow-x-scroll overflow-y-hidden pr-2 pb-2">
            <Card classname="h-fit">
              <div>
                <h2 className="font-bebas-neue text-xl">
                  programming languages
                </h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">javascript</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">typescript</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">python</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">golang</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">c#</li>
                </ul>
              </div>
            </Card>
            <Card classname="h-fit">
              <div>
                <h2 className="font-bebas-neue text-xl">languages</h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">indonesia</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">english</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">japan</li>
                </ul>
              </div>
            </Card>
            <Card classname="h-fit">
              <div>
                <h2 className="font-bebas-neue text-xl">backend frameworks</h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">express.js</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">asp.net core</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">gin</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">flask</li>
                </ul>
              </div>
            </Card>

            <Card classname="h-fit">
              <div>
                <h2 className="font-bebas-neue text-xl">frontend frameworks</h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">react</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">next.js</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">tailwindcss</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">bootstrap</li>
                </ul>
              </div>
            </Card>
            <Card classname="h-fit">
              <div>
                <h2 className="font-bebas-neue text-xl">databases</h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">postgreSQL</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">mongodb</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">mysql</li>
                </ul>
              </div>
            </Card>
            <Card classname="mb-20 h-fit w-full">
              <div className="w-full">
                <h2 className="font-bebas-neue text-xl">others</h2>
                <ul className="mt-1 flex gap-2 text-xs capitalize">
                  <li className="rounded-md bg-[#a1d12c] p-1">git</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">docker</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">linux</li>
                  <li className="rounded-md bg-[#a1d12c] p-1">microservices</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
