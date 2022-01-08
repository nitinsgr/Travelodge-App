import Image from 'next/image'
import FamilyImage from '../../Images/Family.jpg'

function SectionThree() {
  return (
   <Two/>
  )
}

export default SectionThree


export const Two = () => {
  return(
    <>
      <div className="max-w-7xl mx-auto mt-32">
      <div className="flex justify-items-center ">
        <div className="pt-5 pl-10">
          <p>ULTIMATE GATEWAY</p>
          <h1 className="text-5xl font-PlayFair-Bold font-bold">Family Time In South Africa</h1>
          <p className="text-1xl pt-5 font-Raleway">So Beautiful Life experiences with the best of south Africa</p>

          <h2 className="text-2xl font-PlayFair-Bold font-semibold">Stay 6 nights/7 days US$ 2 867 per person sharing (Indicative price)</h2>
        </div>
        <div className="">
          <Image src={FamilyImage} width={800} height={550} />
        </div>
      </div>
      
     
    </div>
     <div className=" mt-10 grid grid-cols-3 gap-5 pb-20 max-w-7xl mx-auto">
     <div className=" flex flex-col ml-10">
       <p>Cape Town | Lion Sands Game Reserve</p>
       <hr className="border-yellow-400 mt-2"/>
       <div className=" flex mt-10">
         <button className=" p-3 font-Raleway border border-black">Download Package Info</button>
         <button className="p-3 bg-black text-white-white ml-5">View This Package</button>
       </div>
     </div>
    
     <div className=" bg-BinaImage h-200 w-200 ml-20 bg-center bg-cover">
     </div>
     <div className=" bg-coffee h-200  bg-center bg-cover">
     </div>
  </div>
    </>
  
  )
}
