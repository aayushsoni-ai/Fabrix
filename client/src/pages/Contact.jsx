import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold font-prata text-xl text-gray-600 '>Our Store</p>
          <p className='text-gray-500 font-outfit'>54709 Willms Station <br />Suite 350, Wahington, USA</p>
          <p className='text-gray-500 font-outfit'>Tel: (415) 555-0132 <br />Email:admin@fabrix.com</p>
          <p className='text-xl text-gray-600 font-semibold font-prata'>Carrers @ Fabrix</p>
          <p className='text-gray-500 font-outfit'>Learn more about teams and job openings.</p>
          <button className="relative px-6 py-3 text-black hover:text-white font-semibold border border-gray-400 overflow-hidden rounded-md transition-all duration-300 ease-in-out group">
      <span className="absolute inset-0 bg-black/80  w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      <span className="relative z-10">Explore Jobs</span>
    </button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact