import { NavLink } from "react-router";
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
    <div className="fixed right-0 bottom-0 left-0 z-20 border-2 bg-[#f5f5f7] shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] md:static md:min-h-screen md:px-4 md:py-2 md:shadow-none">
      <ul className="font-bricolage-grotesque flex h-full font-medium md:hidden">
        <li className="grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex h-full w-full cursor-pointer flex-col items-center px-4 py-2 transition-all ease-in-out hover:bg-[#a1d12c] ${isActive ? "bg-[#a1d12c]" : ""}`
            }
          >
            <HouseIcon size={24} />
            Home
          </NavLink>
        </li>
        <li className="grow">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex h-full w-full cursor-pointer flex-col items-center px-4 py-2 transition-all ease-in-out hover:bg-[#a1d12c] ${isActive ? "bg-[#a1d12c]" : ""}`
            }
          >
            <FilesIcon size={24} />
            Project
          </NavLink>
        </li>
        <li className="grow">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `flex h-full w-full cursor-pointer flex-col items-center px-4 py-2 transition-all ease-in-out hover:bg-[#a1d12c] ${isActive ? "bg-[#a1d12c]" : ""}`
            }
          >
            <TerminalIcon size={24} />
            Skill
          </NavLink>
        </li>
        <li className="grow">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex h-full w-full cursor-pointer flex-col items-center px-4 py-2 transition-all ease-in-out hover:bg-[#a1d12c] ${isActive ? "bg-[#a1d12c]" : ""}`
            }
          >
            <EnvelopeIcon size={24} />
            Contact
          </NavLink>
        </li>
      </ul>
      <h1 className="font-bebas-neue my-5 hidden text-6xl font-semibold capitalize md:block">
        indra<span className="text-[#a1d12c]">.</span>
      </h1>
      <div className="hidden flex-col justify-between gap-3 md:flex">
        <div className="flex flex-col gap-3">
          <NavLink
            className={({ isActive }) =>
              `font-bricolage-grotesque hover:translate-y-1px flex w-42 cursor-pointer gap-2 gap-x-4 border-2 border-black px-3 py-2 text-start font-semibold shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none ${isActive ? "translate-y-1px translate-x-1 bg-[#a1d12c] shadow-none transition-all ease-in-out" : ""}`
            }
            to="/"
          >
            <HouseIcon size={24} />
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bricolage-grotesque hover:translate-y-1px flex w-42 cursor-pointer gap-2 gap-x-4 border-2 border-black px-3 py-2 text-start font-semibold shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none ${isActive ? "translate-y-1px translate-x-1 bg-[#a1d12c] shadow-none transition-all ease-in-out" : ""}`
            }
            to="/projects"
          >
            <FilesIcon size={24} />
            Project
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bricolage-grotesque hover:translate-y-1px flex w-42 cursor-pointer gap-2 gap-x-4 border-2 border-black px-3 py-2 text-start font-semibold shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none ${isActive ? "translate-y-1px translate-x-1 bg-[#a1d12c] shadow-none transition-all ease-in-out" : ""}`
            }
            to="/skills"
          >
            <TerminalIcon size={24} />
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bricolage-grotesque hover:translate-y-1px flex w-42 cursor-pointer gap-2 gap-x-4 border-2 border-black px-3 py-2 text-start font-semibold shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none ${isActive ? "translate-y-1px translate-x-1 bg-[#a1d12c] shadow-none transition-all ease-in-out" : ""}`
            }
            to="/contact"
          >
            <EnvelopeIcon size={24} />
            Contact
          </NavLink>
        </div>
        <div className="mt-48 flex flex-col gap-y-1">
          <h4 className="font-bebas-neue text-xl font-semibold uppercase">
            find me on
          </h4>
          <ul className="flex w-fit justify-end gap-2">
            <li className="cursor-point hover:translate-y-1px border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)] transition-all ease-in-out hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none">
              <a href="https://www.github.com/indraplrg" target="_blank">
                <GithubLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point hover:translate-y-1px border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)] transition-all ease-in-out hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none">
              <a href="https://www.gitlab.com/indralolx" target="_blank">
                <GitlabLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point hover:translate-y-1px border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)] transition-all ease-in-out hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none">
              <a href="https://instagram.com/asykarindra" target="_blank">
                <LinkedinLogoIcon size={24} weight="fill" />
              </a>
            </li>
            <li className="cursor-point hover:translate-y-1px border-2 p-1 shadow-[2px_2px_0_0_rgba(34,34,34,1)] transition-all ease-in-out hover:translate-x-1 hover:bg-[#a1d12c] hover:shadow-none">
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
