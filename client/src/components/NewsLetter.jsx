import React from "react";

const NewsLetter = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }

  return (
    <div className="text-center ">
        <hr className="w-[100%] border-none mb-2 h-[1.5px] bg-gray-700  transition-all duration-300 " />
        <p className="relative font-tangerine font-bold text-2xl text-gray-800 md:text-3xl mb-3 inline-block text-center">
  <span className="text-red-600" >Subscribe </span> now & get <span className="text-red-600">20% </span>off.
  <span className="absolute left-2/4 bottom-0 w-[40%] h-[1.5px] bg-gray-700 -translate-x-1/2"></span>
</p>

      
      <form onClick={onSubmitHandler} className="w-full  flex items-center justify-center gap-3 mx-auto my-6  pl-3">
      <input
    type="email"
    placeholder="Enter your email"
    className="w-full sm:w-72 px-5 py-2 pt-3 pb-3 font-prata text-[#d8bc91] border-2 border-amber-50 rounded-full outline-none bg-black text-center text-sm sm:text-base transition-all duration-300 ease-in-out"
    required
  />

        <button className="relative group overflow-hidden rounded-full mt-3 mb-3 px-6 py-2 text-white border-2 border-amber-50 font-semibold bg-black text-lg transition-all duration-300 ease-in-out">
          <span className="absolute inset-0 bg-[#d8bc91] w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="relative flex items-center  justify-center  gap-2 font-tangerine text-[20px] font-bold">
            Subscribe
          </span>
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
