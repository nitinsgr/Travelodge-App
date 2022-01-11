import Image from "next/image"
import boneImage from '../../Images/BoneFire.jpg'
import leooImage from '../../Images/Leo.jpg'
import coffeeImage from '../../Images/coffee.jpg'

function SectionTwo() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-32">
      <div className="flex justify-items-center flex-col md:flex-row ">
        <div className="m-5">
          <Image src={boneImage} width={800} height={550} />
        </div>
        <div className="pt-5 pl-10">
          <p>ULTIMATE GATEWAY</p>
          <h1 className="text-5xl font-PlayFair-Bold font-bold">Escape To SouthAfrica</h1>
          <p className="text-1xl pt-5 font-Raleway">So Beautiful Life experiences with the best of south Africa</p>

          <h2 className="text-2xl font-PlayFair-Bold font-semibold">Stay 6 nights/7 days US$ 2 867 per person sharing (Indicative price)</h2>
        </div>
      </div>
     
    </div>
     <div className=" mt-10 grid md:grid-cols-3 grid-cols-1 gap-5 pb-20 max-w-7xl mx-auto">
      <div className=" bg-LeoImage h-200 bg-center bg-cover m-5">
      </div>
      <div className=" bg-coffee h-200 bg-center bg-cover md:h-400 m-5">
      </div>
      <div className=" flex flex-col m-10">
        <p>Cape Town | Lion Sands Game Reserve</p>
        <hr className="border-yellow-400 mt-2"/>
        <div className=" flex mt-10">
          <button className=" p-2 md:p-4 text-sm font-Raleway border border-black">Download Package Info</button>
          <button className="p-2 md:p-4 text-sm bg-black text-white-white ml-5">View This Package</button>
        </div>
      </div>
   </div>
    </>
  
  )
}

export default SectionTwo
