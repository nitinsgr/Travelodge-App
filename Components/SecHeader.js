import { SearchIcon } from "@heroicons/react/solid"
import { useState } from "react"

function SecHeader() {

    const [active, setActive] = useState(false);
    const [secTab, setSecTab] = useState(false);
    const [thirdTab, setThirdTab] = useState(false);

    
   
    return (
        <div className="flex flex-col mx-auto pt-10 pb-10">
            <div className="flex flex-row space-x-10 text-2xl col-span-3 mx-auto px-10 py-8 ">
                <p onClick={() => setActive(!active)}  className=" cursor-pointer hover:border-b-2">Places to stay</p>
                <p onClick={()=> setSecTab(!secTab)} className=" cursor-pointer hover:border-b-2">Experiences</p>
                <p  className=" cursor-pointer hover:border-b-2">Online Experiences</p>
            </div>
            {
                active &&
                     <div className="flex mx-auto max-w-full shadow-md rounded-full space-x-10 px-0 py-0">
                <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Location</p>
                    <p className="text-sm text-gray-500">Where are you going?</p>
                </div>
                 <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Check in</p>
                    <p className="text-sm text-gray-500">Add dates</p>
                </div>
                 <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Check out</p>
                    <p className="text-sm text-gray-400">Add dates</p>
                </div>
                <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Guests</p>
                    <p className="text-sm text-gray-400">Add guests</p>
                </div>
                <div className=" py-5 px-5 hover:bg-gray-100 rounded-full " >
                    <SearchIcon className="h-10" />
                </div>
            </div>        
            }
            {
                secTab &&
            <div className="flex mx-auto max-w-full shadow-md rounded-full space-x-10 px-0 py-0">
                <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Location</p>
                    <p className="text-sm text-gray-500">Where are you going?</p>
                </div>
                 <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Check in</p>
                    <p className="text-sm text-gray-500">Add dates</p>
                </div>
                 <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Check out</p>
                    <p className="text-sm text-gray-400">Add dates</p>
                </div>
                <div className=" hover:bg-gray-100 rounded-full px-10 py-6 space-y-1 text-left">
                    <p>Guests</p>
                    <p className="text-sm text-gray-400">Add guests</p>
                </div>
                <div className=" py-5 px-5 hover:bg-gray-100 rounded-full " >
                    <SearchIcon className="h-10" />
                </div>
            </div>
            }
            
        </div>

       
    )
}

export default SecHeader
