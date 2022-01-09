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
      <div className=" mt-20 pl-10 md:mx-auto">
          <h1 className=" font-PlayFair-Bold font-bold text-6xl">Our Story.</h1>
          <h1 className=" font-PlayFair-Bold font-bold text-6xl">Your Story.</h1>
      </div>
      <SectionOne/>
       <SectionTwo/>
      {/* <SectionThree/>
      <FourthSection/>
      <Purpose/>
      <Stories/>  */}
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
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="flex ml-10 ">
          <h2 className="transform -rotate-90 ">Rober John</h2>
          <h1 className=" text-5xl font-PlayFair-Bold font-bold text-black">We are a family</h1>
          </div>
          <div className=" bg-yellow-50 m-2 md:w-1000 z-20 ">
            <p className="text-1xl font-Raleway text-black font-bold">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>  
          </div>
        </div>
        <div className=" mt-5">
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
         <div className="grid grid-cols-2 col-span-2 gap-10">
           <div>
           <Image src={oldImage} width={400} height={500} className="     filter grayscale scale-75 " />
           </div>
            <div>
              <h2 className="text-2xl font-PlayFair-Bold ">We celebrate our individuality. It’s through our different and unique talents, aligned in the common purpose to enrich our guests lives, that we create a meaningful impact in the world.</h2>
              <p className=" w-2/4 items-end font-Raleway pt-10">
              2020 proved the true essence of our people. Despite extraordinary challenges and many personal hardships, they came together and lived our values day after day.


              Awareness - they helped one another and our communities in need.
              Improvement - they rolled up their sleeves and arrived every day to contribute towards protecting our assets and ensuring our guests are always given the highest level of care and attention.
              Generosity - they gave selflessly and abundantly.
              Strength in Diversity - they acted together, with respect, kindness and honour.
              </p>
              <h1 className="text-3xl font-PlayFair-Bold pt-5">Let me introduce you to some of our amazing people...</h1>

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

      <div className=" grid grid-cols-2 gap-5  font-bold ">
        <div className="relative p-4">
          <h2 className="absolute z-20 text-2xl font-Raleway text-white-white">Hugh jackson</h2>
          <h2 className=" absolute z-20 pt-8 font-Raleway text-white-white">CEO, Travelodge</h2>
        <Image src={CeoImage} className=" filter grayscale" layout="fill" />
        </div>
        
        <div className="relative">
          <div className=" absolute z-20 flex flex-col ">
          <h2 className=" text-2xl font-Raleway pl-2 text-white-white">Tanya Winters</h2>
          <h2 className="pt-2 font-Raleway text-white-white p-5">Manager Safari Lodge, Africa Region</h2>
          </div>
        <Image src={LadyImage} className=" filter grayscale" />
        </div>
      
      </div>
      <div className=" grid grid-cols-3 gap-5 mt-10 font-bold ">
        <div className=" relative flex items-end">
          <div className=" absolute z-20">
            <h2 className="text-2xl font-Raleway pl-2 text-white-white">Lillie-Rose Arroyo</h2>
            <h2 className=" text-1xl font-Raleway pl-2 pt-1 text-white-white">Founder Treehouse Lodge</h2>
          </div>
        <Image src={LadyImage2} className=" filter grayscale w-400" layout="fill" />
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
    <div className=" max-w-7xl mx-auto mt-52 h-800">  
     <div className="flex justify-evenly flex-row absolute z-20 ">
       <div className=" -rotate-90 transform flex flex-col">
          <h2 className=" text-2xl font-PlayFair-Bold ">Our Purpose</h2>
          <hr className=" border-black" />
       </div>
       <div className=" w-6/12 z-40">
         <h1 className=" text-7xl font-PlayFair-Bold font-bold italic">We create opportunities
            and experiences for
            our family & guests
            to enrich their lives.</h1>
       </div>

     </div>
     <div className=" bg-yellow-50 h-500 w-800 transform translate-y-32"> </div>
    </div>
  )
}