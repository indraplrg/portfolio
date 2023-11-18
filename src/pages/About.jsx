const About = () => {
   return (
      <section id="about">
         <div className="p-4 bg-color-secondary text-white">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1440 320"
               className="abs"
            >
               <path
                  fill="#0d1b2a"
                  fill-opacity="1"
                  d="M0,128L21.8,138.7C43.6,149,87,171,131,176C174.5,181,218,171,262,176C305.5,181,349,203,393,213.3C436.4,224,480,224,524,234.7C567.3,245,611,267,655,245.3C698.2,224,742,160,785,154.7C829.1,149,873,203,916,213.3C960,224,1004,192,1047,186.7C1090.9,181,1135,203,1178,202.7C1221.8,203,1265,181,1309,176C1352.7,171,1396,181,1418,186.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
               ></path>
            </svg>
            <h2 className="text-2xl md:text-3xl">About</h2>
            <div className="text-sm md:text-lg mt-2">
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  iusto provident libero aspernatur sapiente placeat, rem, rerum
                  harum ipsum porro recusandae quae deserunt. Magnam aut
                  dignissimos, ea eligendi fugiat quasi!
               </p>
               <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  excepturi dolorum dolores officiis quo, corporis, veritatis ab
                  molestias enim neque recusandae temporibus delectus nihil sunt
                  quod odio. Rem, quibusdam eius.
               </p>
            </div>
         </div>
      </section>
   );
};

export default About;
