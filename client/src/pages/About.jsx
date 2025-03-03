import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10 ">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p className="font-outfit font-medium text-gray-600">
            Welcome to{" "}
            <span className="font-tangerine text-3xl font-bold text-purple-800">
              Fabrix
            </span>{" "}
            , where style meets convenience! We are passionate about bringing
            you the latest fashion trends with a seamless online shopping
            experience. Our collection is curated with high-quality, trendy, and
            affordable clothing that fits every occasion. Whether you're looking
            for everyday essentials or statement pieces, we’ve got you covered.{" "}
          </p>
          <p className="font-outfit font-medium text-gray-600">
            At{" "}
            <span className="font-tangerine text-3xl font-bold text-purple-800">
              Fabrix
            </span>
            , customer satisfaction is our priority. We ensure a hassle-free
            shopping experience with secure payments, fast delivery, and
            responsive customer support. Join us on this journey and redefine
            your style effortlessly!
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p className="font-outfit font-medium text-gray-600">
            At{" "}
            <span className="font-tangerine text-3xl font-bold text-purple-800">
              Fabrix
            </span>
            , our mission is to redefine style and sophistication by offering
            timeless fashion that blends elegance with comfort. We believe that
            clothing is more than just fabric—it’s an expression of
            individuality and confidence. Our goal is to provide high-quality,
            thoughtfully designed pieces that make you feel empowered and
            unforgettable. <br /> Join us in embracing fashion that speaks to
            you, for you. 💫
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row mb-20 text-sm">
        <div className="px-10 py-8  border md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="font-outfit text-lg font-medium">Quality Assurance:</b>
          <p className="font-outfit text-gray-600">
            At{" "}
            <span className="font-tangerine text-3xl font-bold text-purple-800">
              Fabrix
            </span>
            , we prioritize quality at every step. From premium fabric selection
            to meticulous craftsmanship, each product undergoes strict quality
            checks to ensure durability, comfort, and style. We are committed to
            delivering excellence, so you can shop with confidence, knowing
            every piece meets the highest standards. 💎
          </p>
        </div>
        <div className="px-10 py-8  border md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="font-outfit text-lg font-medium">Convenience:</b>
          <p className="font-outfit text-gray-600">
            Shopping at{" "}
            <span className="font-tangerine text-3xl font-bold text-purple-800">
              Fabrix
            </span>
            ,is seamless and hassle-free. With an easy-to-navigate website,
            secure payments, and fast delivery, we ensure a smooth experience
            from browsing to checkout. Your style, delivered effortlessly! 🚀
          </p>
        </div>
        <div className="px-10 py-8  border md:px-16 sm:py-20 flex flex-col gap-5">
          <b className="font-outfit text-lg font-medium">
            Exceptional Customer Service:
          </b>
          <p className="font-outfit text-gray-600">
            Your satisfaction is our priority! We provide prompt support,
            hassle-free returns, and a personalized shopping experience to
            ensure you feel valued every step of the way. 💖
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
