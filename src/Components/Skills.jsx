import technology from "../skill";
const Skills = () => {
  return (
    <div className=" mb-10 mt-4 p-5 ">
      <h1 className="text-black text-2xl text-center mt-5">
        SKILLS AND TECHNOLOGIES:-
      </h1>
      <div className=" w-auto text-2xl break-words font-thin text-black">
        <p>
          In my skill set, I leverage a blend of innovative technologies and
          trusted open-source tools to develop user-centric, high-performing
          applications and websites. My focus lies in crafting seamless
          experiences tailored for smartphones, tablets, and desktops, ensuring
          optimal functionality and performance across all devices.
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {technology.map((tech) => {
          return (
            <>
              <div key={tech.id}>
                <div
                  className="items-center h-16 px-4 py-2 mx-2 mt-6 rounded-lg  mb-2 cursor-pointer flex w-52 bg-gray-200 text-black 
                 hover:scale-110"
                >
                  <img alt="" src={tech.img} className="w-12 rounded-full" />
                  <h4 className="ml-4 text-xl">{tech.name}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
