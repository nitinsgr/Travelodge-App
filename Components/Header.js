import { ArrowDownIcon, ArrowNarrowDownIcon, ArrowNarrowRightIcon, ArrowSmDownIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, XIcon, MenuIcon} from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react";
import { datalist } from "./data";
import Link from "next/link";
import menuItems from "./MenuItems";




function Header() 

{
    const [showModal, setShowModal] = useState(false);

    const openModalHandle = () => {
      setShowModal(true);
    }
    
    const closeModalHandle = () => {
      setShowModal(false);
    }

    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
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
          <header className=" navbar  flex justify-evenly text-black pt-10 pb-10 bg-white   z-20 w-full">
      <div className=" items-left justify-items-center w-32 invisible lg:visible">
       <Link href="/">
        <h1 className="text-4xl font-Raleway font-bold">Travelodge</h1>
       </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
       {active ? <MenuIcon className="w-8 h-8"/> : <PlusIcon className="w-8 h-8  rotate-45"/>}
      </div>
      <ul className={active ? "nav-menu flex active items-center bg-white" : "nav-menu space-x-6  font-Krona font-light text-sm  "}>
        <li>Hotel & Lodges</li>
        <li onClick={openModalHandle}>Experiences</li>
        <Link href={"/StoryPage"}>
        <li>Our Story</li>
        </Link>
        <Link href={"/Package"}>
        <li>Our Packages</li>
        </Link>
       
        <li>Blogs</li>
      </ul>
      <div className=" invisible lg:visible bg-black p-4 font-Krona text-sm text-white-white">
        Enquire
      </div>
     
    </header>
    {showModal ? <div className="flex flex-col">
    <Modal closeModalHandle={closeModalHandle}/>
     </div> : null}
 
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