import Image from "next/image"
import sunsetImage from '../../static/sunset.jpg'
import SectionFour from "./SectionFour"
import SectionOne from "./SectionOne"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

function PackageBanner() {
  return (
    <div className="">
    <div className=" relative h-1000 md:h-800 bg-center bg-cover bg-no-repeat bg-fixed">
      <Image src={sunsetImage} objectFit="cover" layout="fill" />
      <div className=" absolute z-20 max-w-7xl mx-auto pt-10 p-5">
      <h1 className="text-4xl md:text-8xl text-white-white font-PlayFair-Bold font-bold md:w-1/4">Exceptional Experiences</h1>
      <p className=" text-2xl font-Raleway text-white-white pt-5">Best Of Southern Africa</p>
      </div>
     
    </div>
     <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/> 
    </div>
  )
}

export default PackageBanner
