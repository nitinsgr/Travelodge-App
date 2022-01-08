import Image from "next/image"
import sunsetImage from '../../Images/sunset.jpg'
import SectionFour from "./SectionFour"
import SectionOne from "./SectionOne"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

function PackageBanner() {
  return (
    <div className="">
    <div className=" bg-sunset h-1000 bg-center bg-cover bg-no-repeat bg-fixed">
      <div className=" max-w-7xl mx-auto pt-10">
      <h1 className="text-6xl text-white-white font-PlayFair-Bold font-bold w-1/4">Exceptional Experiences</h1>
      <p className=" text-3xl font-Raleway text-white-white pt-5">Best Of Southern Africa</p>
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
