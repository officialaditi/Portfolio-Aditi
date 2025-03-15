const Hero = () => {
  return (
    <div className="w-full min-h-screen mt-3 flex items-center justify-center flex-col">
      <div>
        <h1 className="font-playfair text-5xl text-center my-10">
          Hello, I'm Aditi
        </h1>
        <h2 className="font-playfair text-3xl text-center my-10">
          A Frontend Developer dedicated to transforming concepts into dynamic,
          user-centered digital solutions.
        </h2>
      </div>
      <div className="my-10">
        <img src="./profile_aditi.jpg" className="w-80 h-80 rounded-full shadow-xl" />
      </div>
    </div>
  );
};
export default Hero;
