import skills from "../data";

const Skill = () => {
   return (
      <section id="skill">
         <div className="relative">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1440 320"
               className="absolute"
            >
               <path
                  fill="#1b263b"
                  fill-opacity="1"
                  d="M0,128L21.8,138.7C43.6,149,87,171,131,176C174.5,181,218,171,262,176C305.5,181,349,203,393,213.3C436.4,224,480,224,524,234.7C567.3,245,611,267,655,245.3C698.2,224,742,160,785,154.7C829.1,149,873,203,916,213.3C960,224,1004,192,1047,186.7C1090.9,181,1135,203,1178,202.7C1221.8,203,1265,181,1309,176C1352.7,171,1396,181,1418,186.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
               ></path>
            </svg>
            <div className="min-h-screen p-5 bg-color-primary text-white">
               <div className="mt-60">
                  <h2 className="text-2xl">Skills</h2>
                  <h2 className="text-xl mb-2">Programming</h2>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        {skills.map((e, i) => {
                           return (
                              <div
                                 className="border py-4 px-8 hover:bg-color-secondary hover:text-color-text transition-all hover:rounded-lg mt-4"
                                 key={i}
                              >
                                 <h3>{e.Title}</h3>
                                 <p className="max-w-md">{e.Description}</p>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Skill;
