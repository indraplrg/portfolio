import Card from "../components/Card";

const Skill = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col gap-4 p-5"
      id="project"
    >
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src="./src/assets/abstract_background.jpg"
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bebas-neue text-6xl">skills & technologies</h1>
        <div className="flex flex-col gap-y-4 overflow-x-scroll overflow-y-hidden pr-2 pb-2">
          <Card classname="h-fit">
            <div>
              <h2 className="font-bebas-neue text-2xl">
                programming languages
              </h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
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
              <h2 className="font-bebas-neue text-2xl">languages</h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
                <li className="rounded-md bg-[#a1d12c] p-1">indonesia</li>
                <li className="rounded-md bg-[#a1d12c] p-1">english</li>
                <li className="rounded-md bg-[#a1d12c] p-1">japan</li>
              </ul>
            </div>
          </Card>
          <Card classname="h-fit">
            <div>
              <h2 className="font-bebas-neue text-2xl">backend frameworks</h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
                <li className="rounded-md bg-[#a1d12c] p-1">express.js</li>
                <li className="rounded-md bg-[#a1d12c] p-1">asp.net core</li>
                <li className="rounded-md bg-[#a1d12c] p-1">gin</li>
                <li className="rounded-md bg-[#a1d12c] p-1">flask</li>
              </ul>
            </div>
          </Card>

          <Card classname="h-fit">
            <div>
              <h2 className="font-bebas-neue text-2xl">frontend frameworks</h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
                <li className="rounded-md bg-[#a1d12c] p-1">react</li>
                <li className="rounded-md bg-[#a1d12c] p-1">next.js</li>
                <li className="rounded-md bg-[#a1d12c] p-1">tailwindcss</li>
                <li className="rounded-md bg-[#a1d12c] p-1">bootstrap</li>
              </ul>
            </div>
          </Card>
          <Card classname="h-fit">
            <div>
              <h2 className="font-bebas-neue text-2xl">databases</h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
                <li className="rounded-md bg-[#a1d12c] p-1">postgreSQL</li>
                <li className="rounded-md bg-[#a1d12c] p-1">mongodb</li>
                <li className="rounded-md bg-[#a1d12c] p-1">mysql</li>
              </ul>
            </div>
          </Card>
          <Card classname="md:mb-0 mb-16 h-fit w-full">
            <div className="w-full">
              <h2 className="font-bebas-neue text-2xl">others</h2>
              <ul className="mt-1 flex gap-2 text-xs capitalize md:text-sm">
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
  );
};

export default Skill;
