import Image from "next/image"
import MapImage from '../Images/Map.png'

import useEmblaCarousel from 'embla-carousel-react'
import LionImage from '../Images/Lion.jpg'
import PeopleImage from '../Images/People.jpg'
import kidsImage from '../Images/2.jpg'
import CelebrationImage from '../Images/Celebration.jpg'
import safariImage from '../Images/safari.jpg'
import Stories from "./Stories"
import Form from "./Form"

function Destination() {
  return (
    <>
    <div className=" p-20">
      <Headersection/>
      <MapSection/>
     
    </div>
    <div>
       <EmblaCarousel/>
    </div>
    <div>
      <MultiContainer/>
    </div>
    <div>
      <Stories/>
    </div>

    <div>
      <Form/>
    </div>
    </>
    
  )
}

export default Destination


export const Headersection = () => {
  return(
    <div className="flex mt-20 max-w-7xl mx-auto">
      <div className="flex flex-col  "> 
      <h3 className="text-2xl font-PlayFair ">More Destination</h3>
      <h1 className="text-6xl font-PlayFair-Bold font-bold  w-8/12 pt-5">Visit New Destination Collection in Southern Africa</h1>
      </div>
      <div className=" w-9/12">
        <p>Our Lodges, Boutique Hotels and Private Residences are found in Southern Africa's best leisure destinations, and combine to offer you the classic Southern African experience, with MORE Family Collection's signature 'golden thread'.

        Each of our Luxury Lodges is located in vast Big Five reserves, with private exclusive traversing.</p>
      </div>
     
    </div>
  )
}


export const MapSection = () => {
  return(
    <div className="flex pl-20 pt-32 max-w-7xl mx-auto ">
      <div>
        <button className="p-4 border-2 border-black text-1xl font-PlayFair   hover:border-b-8 transform transition-all duration-200 ease-in-out hover:shadow-xl">Explore Now</button>
      </div>
      <div className=" md:ml-32 border-none outline-none">
        <Image src={MapImage} width={900} height={900}/>
      </div>
    </div>

  )
}


export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <>
     <div className=" max-w-7xl mx-auto mt-32">
      <h2 className="text-2xl font-PlayFair">More experiences</h2>
      <h1 className="text-6xl font-PlayFair-Bold font-bold w-8/12">A collection of life - enriching experiences</h1>
    </div>
    <div className="embla" ref={emblaRef}>
    <div className="embla__container mt-20">
    <div className="embla__slide bg-white">
      <div className="flex">
        <div className=" ">
          <Image src={LionImage} width={1800 } height={1200} />
        </div>
        <div className="flex flex-col mx-auto ml-20 ">
          <hr className="h-12 border border-black w-0 mb-5"/>
          <h1 className="text-3xl font-PlayFair">Treehouse</h1>
          <h3 className="text-1xl pt-5 font-Raleway">A MILLION-STAR EXPERIENCE</h3>
          <div className="font-Raleway w-2/3">
          <p>Romantics,adventure and solitude seeker can discover the magic of a night out in Africa - in complete luxury.Our Treeehouses set you in the middle of remote landscapes to experience raw nocturnal africa</p>

          <p className="pt-10">You'll arrive at sunset to a gourmet picnic dinner, spend the dusk hours spotting animals and be lulled to sleep by the sound of the wild as you count shooting stars</p>
          </div>
          
        </div>
      </div>
    </div>
    <div className="embla__slide">
    <div className="flex">
        <div>
          <Image src={PeopleImage} width={1800} height={1200} />
        </div>
        <div className="flex flex-col mx-auto ml-20 ">
          <hr className="h-12 border border-black w-0 mb-5"/>
          <h1 className="text-3xl font-PlayFair">Mack & Madi Kid's Adventure</h1>
          <h3 className="text-1xl pt-5 font-Raleway">A MILLION-STAR EXPERIENCE</h3>
          <div className="font-Raleway w-2/3">
          <p>Romantics,adventure and solitude seeker can discover the magic of a night out in Africa - in complete luxury.Our Treeehouses set you in the middle of remote landscapes to experience raw nocturnal africa</p>

          <p className="pt-10">You'll arrive at sunset to a gourmet picnic dinner, spend the dusk hours spotting animals and be lulled to sleep by the sound of the wild as you count shooting stars</p>
          </div>
          
        </div>
        
      </div>
    </div>
    <div className="embla__slide">
    <div className="flex">
        <div>
          <Image src={CelebrationImage} width={1800} height={1200} />
        </div>
        <div className="flex flex-col mx-auto ml-20">
        <hr className="h-12 border border-black w-0 mb-5"/>
          <h1 className="text-3xl font-PlayFair">Celebrations & Honeymoons</h1>
          <h3 className="text-1xl pt-5 font-Raleway">A MILLION-STAR EXPERIENCE</h3>
          <div className="font-Raleway w-2/3">
          <p>Romantics,adventure and solitude seeker can discover the magic of a night out in Africa - in complete luxury.Our Treeehouses set you in the middle of remote landscapes to experience raw nocturnal africa</p>

          <p className="pt-10">You'll arrive at sunset to a gourmet picnic dinner, spend the dusk hours spotting animals and be lulled to sleep by the sound of the wild as you count shooting stars</p>
        </div>
        </div>
      </div>
    </div>
    <div className="embla__slide">
    <div className="flex">
        <div>
          <Image src={kidsImage} width={1800} height={1200} />
        </div>
        <div className="flex flex-col mx-auto ml-20">
        <hr className="h-12 border border-black w-0 mb-5"/>
          <h1 className="text-3xl font-PlayFair">Community & Conservation</h1>
          <h3 className="text-1xl pt-5 font-Raleway">A MILLION-STAR EXPERIENCE</h3>
          <div className="font-Raleway w-2/3">
          <p>Romantics,adventure and solitude seeker can discover the magic of a night out in Africa - in complete luxury.Our Treeehouses set you in the middle of remote landscapes to experience raw nocturnal africa</p>

          <p className="pt-10">You'll arrive at sunset to a gourmet picnic dinner, spend the dusk hours spotting animals and be lulled to sleep by the sound of the wild as you count shooting stars</p>
        </div>
        </div>
      </div>
    </div>
    <div className="embla__slide">
    <div className="flex">
        <div>
          <Image src={safariImage} width={1800} height={1200} />
        </div>
        <div className="flex flex-col mx-auto ml-20">
        <hr className="h-12 border border-black w-0 mb-5"/>
          <h1 className="text-3xl font-PlayFair">Community & Conservation</h1>
          <h3 className="text-1xl pt-5 font-Raleway">A MILLION-STAR EXPERIENCE</h3>
          <div className="font-Raleway w-2/3">
          <p>Romantics,adventure and solitude seeker can discover the magic of a night out in Africa - in complete luxury.Our Treeehouses set you in the middle of remote landscapes to experience raw nocturnal africa</p>

          <p className="pt-10">You'll arrive at sunset to a gourmet picnic dinner, spend the dusk hours spotting animals and be lulled to sleep by the sound of the wild as you count shooting stars</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>
   
  )
}


export const MultiContainer = () => {
  return(
    <>
      <div className="flex mt-32">
        <div className=" w-7/12 bg-gray-200 h-80 items-start justify-items-center justify-center pl-5 flex flex-col">
          <h2 className="text-2xl font-PlayFair">Escpae to South Africa</h2>
          <p className=" font-Raleway">The ultimate Gateway</p>
        </div>  
        <div className=" w-7/12 h-80 bg-cover bg-no-repeat bg-center bg-LeoImage hover:scale-105 transform duration-700 ease-in-out">

        </div>
        <div className=" w-full bg-gray-900 items-center pl-20 pt-10">
          <h2 className="text-1xl font-Raleway font-bold text-white-white">OUR CURATED PACKAGES</h2>
          <h1 className="text-4xl text-white-white font-PlayFair font-bold pt-5">Designed Especially For You</h1>
          <button className="p-4 border border-white-white text-white-white font-Raleway mt-5 hover:bg-white-white transform duration-700 ease-in-out hover:text-black">View All Packages</button>
        </div>
      </div>
    
      <div className="flex">
        <div className=" w-7/12 bg-BinaImage h-80 bg-cover bg-center transform hover:scale-105  duration-500">

        </div>
        <div className=" w-7/12 h-80 bg-gray-200 items-start justify-items-start justify-center flex flex-col pl-5">
          <h2 className="text-2xl font-PlayFair">Family time in south Africa</h2>
          <p className="font-Raleway">Home is where family goes</p>
        </div>
        <div className=" w-7/12 bg-red-300 h-80 bg-SherImage bg-cover bg-center hover:scale-105 transform duration-1000 ease-in-out"> 
          
        </div>
        <div className=" w-5/12 bg-gray-200 items-start justify-center justify-items-start flex flex-col pl-5">
          <h2 className="text-2xl font-PlayFair">Love South Africa</h2>
          <p className=" font-Raleway">Find the Beauty Togther</p>
        </div>
      </div>

    </>
  )
}