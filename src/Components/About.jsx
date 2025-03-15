const About = () => {
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-orange-100 text-gray-800 px-6">
        <div className="w-full max-w-[1400px]">
          {/* Title Section */}
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <div className="flex-grow border-t border-black"></div>
            <h1 className="text-3xl font-playfair mx-4 font-bold">About Me</h1>
            <div className="flex-grow border-t border-black"></div>
          </div>
  
          {/* About Me Content */}
          <div className="mt-10">
            <p className="font-playfair text-lg md:text-2xl lg:text-3xl text-left leading-relaxed">
              Hi, I’m <span className="font-bold">Aditi</span>, a passionate{" "}
              <span className="text-red-600 font-semibold">Frontend Developer</span> with a love for
              crafting beautiful, responsive, and user-friendly web experiences.
              I specialize in{" "}
              <span className="text-red-600 font-semibold">React, Tailwind CSS, and JavaScript</span>, continuously
              learning and improving my skills to build modern, high-performance websites.
              <br />
              Beyond coding, I have a deep passion for <span className="font-semibold">personal growth and self-development</span>.
              I regularly write blogs about{" "}
              <span className="text-red-600 font-semibold">tech, mindset, and personal growth</span>,
              sharing insights on productivity, career building, and continuous learning.
              My journey has been shaped by resilience, and I aim to inspire others to focus on
              self-improvement and career success.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  