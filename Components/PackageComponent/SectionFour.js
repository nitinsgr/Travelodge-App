import lightImage from '../../Images/Lightw.jpg'
import Image from "next/image"

function SectionFour() {
  return (
    <>
    <div className="max-w-7xl mx-auto mt-32">
    <div className="flex justify-items-center flex-col md:flex-row ">
      <div className="">
        <Image src={lightImage} width={900} height={550} alt='' />
      </div>
      <div className="pt-5 pl-10">
        <p>ULTIMATE GATEWAY</p>
        <h1 className="text-5xl font-PlayFair-Bold font-bold">Love South Africa</h1>
        <p className="text-1xl pt-5 font-Raleway">So Beautiful Life experiences with the best of south Africa</p>

        <h2 className="text-2xl font-PlayFair-Bold font-semibold">Stay 6 nights/7 days for US$ 3 110 per person sharing (Indicative price)</h2>
      </div>
    </div>
   
  </div>
   <div className=" mt-10 grid md:grid-cols-3 gap-5 pb-20 max-w-7xl mx-auto grid-cols-1">
    <div className=" bg-glass h-200 bg-center bg-cover">
    </div>
    <div className=" bg-lion h-200 md:h-400 bg-center bg-cover">
    </div>
    <div className=" flex flex-col m-10">
      <p>Cape Town | Lion Sands Game Reserve</p>
      <hr className="border-yellow-400 mt-2"/>
      <div className=" flex mt-10">
        <button className=" p-2 md:p-3 font-Raleway border border-black text-sm ">Download Package Info</button>
        <button className="p-2 md:p-3 text-sm bg-black text-white-white ml-5">View This Package</button>
      </div>
    </div>
 </div>
  </>

  )
}

export default SectionFour
