import { ArrowDownIcon, ArrowNarrowDownIcon, ArrowNarrowRightIcon, ArrowSmDownIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, XIcon} from "@heroicons/react/solid"
import Image from "next/image"
import LuggageImage from '../Images/luggage.png'
import { useState } from "react";
import { datalist } from "./data";


import safariImagee from '../Images/safari1.jpg'
import Treehouse from '../Images/Treehouse1.jpg'
import Link from "next/link";




function Header() 

{
    const [showModal, setShowModal] = useState(false);

    const openModalHandle = () => {
      setShowModal(true);
    }
    
    const closeModalHandle = () => {
      setShowModal(false);
    }
    // const [isHovering, setIsHovering] = useState(false);
    // const handleMouseOver = () => {
    //   setIsHovering(true);
    // };
  
    // const handleMouseOut = () => {
    //   setIsHovering(false);
    // }
    //   const HoverText = () => {
    //     return (
    //       <div className="bg-white flex flex-col">
    //         Hovering right meow!
    //         <span role="img" aria-label="cat">
    //           🐱
    //         </span>
    //       </div>
    //     );
    //   };

      
      
    return (
        <div>
            <header>
            <div className="h-20 p-5">
                    <ul className="flex justify-end gap-3 text-sm pb-2 font-PlayFair">
                        <li>All Rates</li>
                        <li>Travel Partner</li>
                        <li>Contact us</li>
                        <li>Covid-19</li>
                    </ul>
                    <hr className=" border-gray-300 "/>
                </div>
                <div className="flex pl-5 pb-2 justify-evenly">
                  <Link href={"/"}><h1 className=" font-PlayFair text-4xl">TRAVELODGE</h1></Link>
                 
                    <ul className="flex gap-5 pl-20 items-center font-Raleway text-xs  font-bold">
                        <div className="flex gap-3 hover:bg-yellow-100 p-4">
                        <li className=" cursor-pointer">LODGE&HOTELS</li>
                        <ArrowSmDownIcon className="w-5"/>
                        </div>
                        <div className="flex gap-3" onClick={openModalHandle}>
                        <li className=" cursor-pointer" >EXPERIENCES</li>
                       
                        <ArrowSmDownIcon className="w-5"/>
                        </div>
                       <Link href={"/StoryPage"}><li>OUR STORY</li></Link>
                       <Link href={"/Package"}><li>OUR PACKAGES</li></Link>
                        <li>BLOG</li>
                    </ul>
                   
                    <div className="flex gap-3 font-PlayFair">
                    <button className="p-4 bg-black text-white-white">Book Now</button>
                    </div>
                   
                </div>
                {showModal ? <div className="flex flex-col">
                    <Modal closeModalHandle={closeModalHandle}/>
                </div> : null}
            </header>
        </div>
    )
}

export default Header


export const Modal = ({closeModalHandle, datalistItems}) => {
    return(
       <div className=" bg-gray-800 h-800 transform duration-1000 ease-in">
           <div className=" max-w-7xl mx-auto flex justify-between ">    
                <h1 className="text-3xl font-bold pt-10 text-white-white font-PlayFair">More Experience</h1>
                <XIcon onClick={closeModalHandle} className="w-7 text-white-white pt-10" />
            </div>
           <HeaderCarousel/>
           <div className=" max-w-7xl mx-auto flex items-center">
             <h2 className=" font-PlayFair text-3xl pt-5 text-white-white">Too many options and too little time?</h2>
             <button className="p-4 bg-white-white text-black font-Raleway mt-5 ml-2">Help Me Decide</button>
           </div>
         
          
       </div>
    )
}



export const HeaderCarousel = () => {
  return(
    <div className=" max-w-7xl mx-auto">
      <div className=" grid grid-cols-3 gap-5 mt-5">
        {datalist.map(item => (
           <div className="flex relative w-400 h-300">
           <h1 className=" absolute z-20 text-white-white font-PlayFair text-2xl p-2">{item.name} {item.icon}</h1>
          
           <Image src={item.url} layout="fill" />
          </div>
        ))}
      </div>
    </div> 
   
  )
}


export const getStaticProps = async() => {
  return{
    props: {
      datalistItems : datalist,
    }
  }
}