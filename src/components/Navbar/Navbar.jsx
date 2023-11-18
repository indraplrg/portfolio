import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = () => {
   const [open, setOpen] = useState(false);
   return (
      <header className="flex justify-between p-4 items-center bg-color-secondary text-color-accent">
         <h3 className="text-xl">
            <a href="/" className="font-semibold">
               Indra Puluraga
            </a>
         </h3>
         <ul className="gap-4 md:flex hidden">
            <li>
               <a
                  href="#home"
                  className="hover:text-color-text transition-all ease-in-out"
               >
                  Home
               </a>
            </li>
            <li>
               <a
                  href="#about"
                  className="hover:text-color-text transition-all ease-in-out"
               >
                  About
               </a>
            </li>
            <li>
               <a
                  href="#skill"
                  className="hover:text-color-text transition-all ease-in-out"
               >
                  Skill
               </a>
            </li>
            <li>
               <a
                  href="#contact"
                  className="hover:text-color-text transition-all ease-in-out"
               >
                  Contact
               </a>
            </li>
         </ul>
         <div className="p-2 cursor-pointer md:hidden">
            <div
               onClick={() => {
                  setOpen(!open);
               }}
            >
               {open ? <X size={32} /> : <List size={32} />}
            </div>
            {open && (
               <div className="relative">
                  <ul className="bg-color-main p-4 flex flex-col items-center gap-4 rounded-sm absolute z-10 -left-24 top-0 border-color-accent border-2">
                     <li>
                        <a
                           href="#home"
                           className="hover:text-color-text transition-all ease-in-out"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="#about"
                           className="hover:text-color-text transition-all ease-in-out"
                        >
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href="#skill"
                           className="hover:text-color-text transition-all ease-in-out"
                        >
                           Skill
                        </a>
                     </li>
                     <li>
                        <a
                           href="#contact"
                           className="hover:text-color-text transition-all ease-in-out"
                        >
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </header>
   );
};

export default Navbar;
