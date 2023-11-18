import Navbar from "../components/Navbar/Navbar";

const Home = () => {
   return (
      <>
         <Navbar />
         <section id="home">
            <div className="flex flex-col justify-center items-center min-h-screen bg-color-primary text-white relative">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  className="absolute top-0"
               >
                  <path
                     fill="#1b263b"
                     fill-opacity="1"
                     d="M0,32L16,69.3C32,107,64,181,96,213.3C128,245,160,235,192,213.3C224,192,256,160,288,160C320,160,352,192,384,202.7C416,213,448,203,480,208C512,213,544,235,576,250.7C608,267,640,277,672,240C704,203,736,117,768,96C800,75,832,117,864,117.3C896,117,928,75,960,58.7C992,43,1024,53,1056,90.7C1088,128,1120,192,1152,213.3C1184,235,1216,213,1248,186.7C1280,160,1312,128,1344,149.3C1376,171,1408,245,1424,282.7L1440,320L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
                  ></path>
               </svg>
               <h2 className="text-xl">Hello</h2>
               <h1 className="text-4xl flex flex-col items-center font-light">
                  Im a <span className="font-bold">fullstack developer</span>
               </h1>
               <p className="max-w-xl text-center mt-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro incidunt quidem dolorem nulla tempora amet accusantium
                  reprehenderit accusamus animi debitis.
               </p>
               <div className="flex gap-3 mt-3">
                  <a
                     href="#about"
                     className="border py-1 px-4 rounded-2xl hover:bg-color-main"
                  >
                     About
                  </a>
                  <a
                     href="#contact"
                     className="border py-1 px-4 rounded-2xl hover:bg-color-main"
                  >
                     Contact Me
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
