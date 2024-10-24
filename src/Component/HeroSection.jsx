const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://i.ibb.co/X89f1Yv/chef.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database, and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="#explore"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            Explore Now
          </a>
          <a
            href="#feedback"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-full"
          >
            Our Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
