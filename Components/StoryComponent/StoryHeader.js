import Image from "next/image"
import PhotoImage from '../../Images/Louise.jpg'
import cookImage from '../../Images/Cook.jpg'
import oldImage from '../../Images/Oldies.jpg'
import CeoImage from '../../Images/Ceo.jpg'
import LadyImage from '../../Images/Lady.jpg'
import OldieImage from '../../Images/OldLady.jpg'
import LadyImage2 from '../../Images/Lady2.jpg'
import studentImage from '../../Images/STUDENT.jpg'
import Stories from "../Stories"


function StoryHeader() {
  return (
    <div >
      <div className="mt-20 ml-5 md:ml-20">
          <h1 className=" font-PlayFair-Bold font-bold text-5xl md:text-8xl">Our Story.</h1>
          <h1 className=" font-PlayFair-Bold font-bold text-5xl md:text-8xl">Your Story.</h1>
      </div>
      <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
      <FourthSection/>
      <Purpose/>
      <Stories/>
    </div>
  )
}

export default StoryHeader


export const SectionOne = () => {
  return(
    <div className="">
    <div className=" max-w-6xl mx-auto grid grid-cols-1 gap-16 md:grid-cols-3 ">
      <div className=" transform rotate-270 mt-32 ml-10 flex flex-col gap-10 md:-rotate-90 ">
        <h2>LOUISE MORE</h2>
        <hr className=" w-52 border-black" />
      </div>
      <div className=" items-center justify-center flex mt-10 text-1xl font-PlayFair-Bold italic pl-10 md:mt-32">
        <h3 className="pr-5">Our Family is so much bigger than my children and my grandchildren. I have had the privilege of being the custodian of this incredible land for 80 years. Our family home belongs to the rich natural kingdom, our people and our guests. Being able to share this extraordinary place with so many others, and contributing to its sustainability for generations to come, has been such a gift. </h3>
      </div>
      <div className="mt-10 md:mt-32 ml-10 mr-10">
        <Image src={PhotoImage} width={1000} height={1000} className="filter grayscale" />
      </div>
    </div>
    </div>
   
  )
}


export const SectionTwo = () => {
  return(
    <div className="mt-32">
      <div className="">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 md:max-w-7xl md:mx-auto ">
          <div className="flex flex-col ml-10 md:flex-row ">
          <h2 className="transform rotate-270 md:-rotate-90 ">Rober John</h2>
          <h1 className=" text-5xl font-PlayFair-Bold font-bold text-black md:text-8xl">We are a family</h1>
          </div>
          <div className=" bg-yellow-50 m-10 md:w-1000 z-20  ">
            <p className="md:text-1xl font-Raleway text-black font-bold md:p-10 p-5 text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>  
          </div>
        </div>
        <div className="md:m-52 m-10">
          <Image src={cookImage} className="filter grayscale"  />
        </div>
      </div>
    </div>
  )
}


export const SectionThree = () => {
  return(
    <div className="mt-10 pb-10">
      <div className=" max-w-7xl mx-auto">
         <div className="grid grid-cols-1 col-span-2 gap-10 md:grid-cols-2">
           <div className="m-10 md:m-0">
           <Image src={oldImage} width={400} height={500} className="     filter grayscale scale-75 " />
           </div>
            <div>
              <h2 className="text-1xl font-PlayFair-Bold md:text-3xl p-10 md:p-0 md:pb-10 ">We celebrate our individuality. It’s through our different and unique talents, aligned in the common purpose to enrich our guests lives, that we create a meaningful impact in the world.</h2>
              <p className=" items-end font-Raleway pt-10 md:w-2/4 p-10 md:p-0">
              2020 proved the true essence of our people. Despite extraordinary challenges and many personal hardships, they came together and lived our values day after day.


              Awareness - they helped one another and our communities in need.
              Improvement - they rolled up their sleeves and arrived every day to contribute towards protecting our assets and ensuring our guests are always given the highest level of care and attention.
              Generosity - they gave selflessly and abundantly.
              Strength in Diversity - they acted together, with respect, kindness and honour.
              </p>
              <h1 className="text-2xl p-10 md:p-0 font-PlayFair-Bold pt-5 md:text-3xl ">Let me introduce you to some of our amazing people...</h1>

            </div>
         </div>
      </div>
    </div>
  )
}

export const FourthSection = () => {
  return(
    <div className=" h-600 mt-40">
    <div className=" max-w-7xl mx-auto ">

      <div className=" grid grid-cols-1 gap-5 font-bold md:grid-cols-2 ">
        <div className="relative md:p-5">
          <h2 className="absolute z-20 text-2xl font-Raleway text-white-white">Hugh jackson</h2>
          <h2 className=" absolute z-20 pt-8 font-Raleway text-white-white">CEO, Travelodge</h2>
        <Image src={CeoImage} className=" filter grayscale" />
        </div>
        
        <div className="relative">
          <div className=" absolute z-20  flex flex-col p-5 ">
          <h2 className=" text-2xl font-Raleway  text-white-white">Tanya Winters</h2>
          <h2 className="pt-2 font-Raleway text-white-white">Manager Safari Lodge, Africa Region</h2>
          </div>
        <Image src={LadyImage} className=" filter grayscale" />
        </div>
      
      </div>
      <div className=" grid grid-cols-1 gap-5 mt-10 font-bold md:grid-cols-3 ">
        <div className=" relative flex items-end">
          <div className=" absolute z-20">
            <h2 className="text-2xl font-Raleway pl-2 text-white-white">Lillie-Rose Arroyo</h2>
            <h2 className=" text-1xl font-Raleway pl-2 pt-1 text-white-white">Founder Treehouse Lodge</h2>
          </div>
        <Image src={LadyImage2} className=" filter grayscale w-400" />
        </div>
        <div className=" relative flex items-end">
          <div className=" absolute z-20">
            <h2 className="text-2xl font-Raleway pl-2 text-white-white">Ingrid Bonilla</h2>
            <h2 className=" text-1xl font-Raleway pl-2 pt-1 text-white-white">Co-Founder Treehouse Lodge</h2>
          </div>
          <Image src={OldieImage} className=" filter grayscale w-400" />
        </div>
        <div className=" relative flex items-end">
          <div className=" absolute z-20">
            <h2 className="text-2xl font-Raleway pl-2 text-white-white">Hector Newman</h2>
            <h2 className=" text-1xl font-Raleway pl-2 pt-1 text-white-white">Co-Founder Treehouse Lodge</h2>
          </div>
          <Image src={studentImage} className=" filter grayscale w-400" />
        </div>
      </div>
    </div>
    </div>
    
  )
}


export const Purpose = () => {
  return(
    <div className=" max-w-7xl mx-auto mt-20">  
     <div className="flex flex-col justify-between absolute md:flex-row z-20 m-10 ">
       <div className=" transform flex flex-col md:-rotate-90">
          <h2 className=" text-2xl font-PlayFair-Bold pb-5">Our Purpose</h2>
          <hr className=" border-black" />
       </div>
       <div className=" z-40">
         <h1 className=" text-5xl font-PlayFair-Bold font-bold italic pt-10 md:w-2/4">We create opportunities
            and experiences for
            our family & guests
            to enrich their lives.</h1>
       </div>

     </div>
     <div className=" bg-yellow-50 w-300 h-500 md:h-300 transform translate-y-32"> </div>
    </div>
  )
}