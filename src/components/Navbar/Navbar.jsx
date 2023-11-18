const Navbar = () => {
   return (
      <header className="flex justify-between p-4 items-center bg-color-secondary text-color-accent">
         <h3 className="text-lg">
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
      </header>
   );
};

export default Navbar;
