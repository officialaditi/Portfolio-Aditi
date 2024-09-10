import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" w-full h-[450px] md:flex justify-between items-center gap-4">
      <div className="p-5">
        <h1 className="text-3xl underline mb-5">
        Hello, Myself ADITI GAIKWAD
        </h1>
        <div>
          <TypeAnimation
            className="text-2xl md:text-3xl lg:text-5xl text-indigo-500"
            sequence={[
              ` I'm Frontend Developer.`,
              2000,
              ` I'm Backend Developer.`,
              2000,
              ` I'm Full Stack Developer.`,
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <div>
        <img className="w-[450px] pr-4 rounded-full" src="./bg.jpg" alt="" />
      </div>
    </div>
  );
};
export default Hero;
