import { Link } from "react-router";
import Button from "./Button";
import {
  EnvelopeIcon,
  FilesIcon,
  GithubLogoIcon,
  GitlabLogoIcon,
  HouseIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TerminalIcon,
} from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="fixed right-3 bottom-3 left-4 z-20 border-2 bg-[#f5f5f7] px-4 py-2 shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] md:static md:min-h-screen md:shadow-none">
      <ul className="h-fullfont-bricolage-grotesque flex justify-around font-medium md:hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
        <li className="pr-1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h1 className="font-bebas-neue my-5 hidden text-6xl font-semibold capitalize md:block">
        indra<span className="text-[#a1d12c]">.</span>
      </h1>
      <div className="hidden min-h-screen flex-col justify-between gap-3 md:flex">
        <div className="flex flex-col gap-3">
          <Button classname="w-42 ">
            <Link
              className="text-md flex w-full items-center gap-x-4 border px-3 py-2 text-start font-semibold"
              to="/"
            >
              <HouseIcon size={24} />
              Home
            </Link>
          </Button>
          <Button classname="w-42 ">
            <Link
              className="flex w-full gap-x-4 border px-3 py-2 text-start font-semibold"
              to="/projects"
            >
              <FilesIcon size={24} />
              Project
            </Link>
          </Button>
          <Button classname="w-42 ">
            <Link
              className="flex w-full gap-x-4 border px-3 py-2 text-start font-semibold"
              to="/skills"
            >
              <TerminalIcon size={24} />
              Skills
            </Link>
          </Button>
          <Button classname="w-42 ">
            <Link
              className="flex w-full gap-x-4 border px-3 py-2 text-start font-semibold"
              to="/contact"
            >
              <EnvelopeIcon size={24} />
              Contact
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="font-bebas-neue text-xl font-semibold uppercase">
            find me on
          </h4>
          <ul className="flex w-fit justify-end gap-2">
            <li className="cursor-point border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
              <a href="https://www.github.com/indraplrg" target="_blank">
                <GithubLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
              <a href="https://www.gitlab.com/indralolx" target="_blank">
                <GitlabLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
              <a href="https://instagram.com/asykarindra" target="_blank">
                <LinkedinLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
              <a href="https://instagram.com/asykarindra" target="_blank">
                <InstagramLogoIcon size={24} weight="fill" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
