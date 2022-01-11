import Image from "next/image"
import sunriseImage from '../images/sunrise.jpg'
import waterImage from '../images/water.jpeg'
import facesImage from '../images/faces.jpg'

function Stories() {
  return (
    <div className=" mb-20 mt-20">
      <Header/>
      <Blogs/>
    </div>
  )
}

export default Stories

export const Header = () => {
  return(
    <>
    <div className="max-w-7xl mx-auto mt-20 p-5">
      <h3 className=" font-Raleway">MORE STORIES</h3>
      <h1 className=" font-PlayFair-Bold font-bold text-4xl w-9/12">What's Happening at Travelodge?</h1>
    </div>  
    </> 
  )
}


export const Blogs = () => {
  return(
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 p-5">
        <div className="flex flex-col  pt-10">
          <Image src={sunriseImage} width={500} height={400} alt="" />
          
          <h2 className=" font-PlayFair text-2xl  pt-5">Nature Holiday Should be Prescribed</h2>

          <p className=" font-Raleway font-bold pt-2">Read More</p>
          <p className=" font-Raleway pt-10">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="flex flex-col pt-10">
          <Image src={waterImage} width={500} height={400} alt="" />
          
          <h2 className=" font-PlayFair text-2xl  pt-5">Nature Holiday Should be Prescribed</h2>

          <p className=" font-Raleway font-bold pt-2">Read More</p>
          <p className=" font-Raleway pt-10">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="flex flex-col pt-10">
          <Image src={facesImage} width={500} height={400} alt="" />
          
          <h2 className=" font-PlayFair text-2xl  pt-5">Nature Holiday Should be Prescribed</h2>

          <p className=" font-Raleway font-bold pt-2">Read More</p>
          <p className=" font-Raleway pt-10">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

      </div>
    
    </>
  )
}