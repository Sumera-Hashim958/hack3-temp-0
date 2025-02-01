import React from 'react'
import HeroSection from "./components/HeroSectiton/herosection";
import ThirdSection from "./components/ThirdSection/thirdsection";
import TopPics from "./components/TopPics/toppics";
import NewArrival from "./components/NewArrival/newarrival";
import OurBlogs from "./components/OurBlogs/ourblogs";
import Ourinsta from './components/OurInsta/ourinsta';

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ThirdSection/>
      <TopPics/>
      <NewArrival/>
      <OurBlogs/>
      <Ourinsta/>
    </div>
  )
}

export default page
