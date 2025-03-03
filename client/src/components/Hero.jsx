import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border w-full h-auto">
  {/* Hero video div */}
  <div className="w-full h-full flex items-center justify-center relative">
    {/* Video and overlay text container */}
    <div className="w-full h-full relative">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        src="/herovideo.webm"
        loop
        autoPlay
        muted
      ></video>

      {/* Text Overlay */}
      <p className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl lg:text-3xl font-tangerine z-20 bg-black/30 p-4">
        Elegance is not just about being noticed, it's about being remembered. Wear timeless sophistication. ~ Fabrix
      </p>

    </div>
  </div>
</div>

  );
};

export default Hero;


//    <p className="flex items-center justify-center font-tangerine z-50">Elegance is not just about being noticed, it's about being remembered. Wear timeless sophistication.</p>