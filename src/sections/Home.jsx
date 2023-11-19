import Navbar from "../components/Navbar/Navbar";
import {
   FacebookLogo,
   InstagramLogo,
   LinkedinLogo,
   GithubLogo,
} from "@phosphor-icons/react";

const Home = () => {
   return (
      <>
         <Navbar />
         <section id="home">
            <div className="flex flex-col justify-center items-center min-h-screen bg-color-primary text-white relative">
               <h2 className="text-xl md:text-2xl">Hello</h2>
               <h1 className="text-4xl flex flex-col items-center font-light md:text-6xl">
                  im a <span className="font-bold">Fullstack Developer</span>
               </h1>
               <p className="max-w-xl text-center mt-2 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro incidunt quidem dolorem nulla tempora amet accusantium
                  reprehenderit accusamus animi debitis.
               </p>
               <div className="flex gap-3 mt-3">
                  <a
                     href="#about"
                     className="border p-1 rounded-2xl hover:bg-color-main"
                  >
                     <FacebookLogo size={32} />
                  </a>
                  <a
                     href="#contact"
                     className="border p-1 rounded-2xl hover:bg-color-main"
                  >
                     <InstagramLogo size={32} />
                  </a>
                  <a
                     href="#contact"
                     className="border p-1 rounded-2xl hover:bg-color-main"
                  >
                     <LinkedinLogo size={32} />
                  </a>
                  <a
                     href="https://github.com/indraplrg"
                     className="border p-1 rounded-2xl hover:bg-color-main"
                  >
                     <GithubLogo size={32} />
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
