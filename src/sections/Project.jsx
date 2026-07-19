import bgImg from "../assets/abstract_background.jpg";
import Card from "../components/Card";

const Project = () => {
  return (
    <div className="relative flex min-h-screen flex-col gap-4 p-5" id="project">
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={bgImg}
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h1 className="font-bebas-neue text-6xl uppercase">project</h1>
      <div className="flex flex-col gap-5">
        <Card classname="hover:translate-x-1 hover:bg-[#e5e5e7] hover:translate-y-1px hover:shadow-none transition-all ease-in-out cursor-pointer">
          <a
            className="font-bricolage w-full"
            href="https://gitlab.com/indralolx/smart-parking-backend"
            target="_blank"
          >
            <h1 className="font-bebas-neue text-2xl font-semibold">
              E-Parking Management System
            </h1>
            <p className="">
              smart parking management system integrated with machine learning
              components for parking operations and vehicle identification.
            </p>
            <ul className="mt-1 flex flex-wrap gap-2 text-sm capitalize">
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                node.js
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                express.js
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                postgreSQL
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">redis</li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">axios</li>
            </ul>
          </a>
        </Card>
        <Card classname="hover:translate-x-1 hover:bg-[#e5e5e7] hover:translate-y-1px hover:shadow-none transition-all ease-in-out cursor-pointer">
          <a
            className="font-bricolage-grotesque w-full"
            href="https://github.com/indraplrg/leage-backend"
            target="_blank"
          >
            <h1 className="font-bebas-neue text-2xl font-semibold">
              Leage – Anonymous Public Message Platform
            </h1>
            <p className="">
              create and share anonymous public messages accessible by other
              users through a centralized platform.
            </p>
            <ul className="mt-1 flex flex-wrap gap-2 text-sm capitalize">
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">go</li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">gin</li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                postgreSQL
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">redis</li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                gomail
              </li>
            </ul>
          </a>
        </Card>
        <Card classname="md:mb-0 mb-16 hover:translate-x-1 hover:bg-[#e5e5e7] hover:translate-y-1px hover:shadow-none transition-all ease-in-out cursor-pointer">
          <a
            className="font-bricolage-grotesque w-full"
            href="https://github.com/indraplrg/Klasifikasi-Kualitas-Ikan-Nila"
            target="_blank"
          >
            <h1 className="font-bebas-neue text-2xl font-semibold">
              Fish Quality Classification Using CNN
            </h1>
            <p>
              image-based fish quality classification system using eye and gill
              images of Nile Tilapia (Oreochromis niloticus) with a
              custom-trained MobileNetV4 architecture enhanced by Efficient
              Channel Attention (ECA-Net)
            </p>
            <ul className="mt-1 flex flex-wrap gap-2 text-sm capitalize">
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                python
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                pytorch
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">timm</li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                pandas
              </li>
              <li className="h-fit w-fit rounded-md bg-[#a1d12c] p-1">
                matplotlib
              </li>
            </ul>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Project;
