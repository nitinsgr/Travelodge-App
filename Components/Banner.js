import Image from 'next/image'
import { useState } from 'react';
import {GlobeIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, GlobeAltIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';
import forestImage from '../static/forest.jpg'
import About from './About';
import Destination from './Destination';


const Banner = () => {
    const [searchInput, setSearchInput] = useState(""); // To get the location of the user
    const [startDate, setStartDate] = useState(new Date()); // To get the start Date of booking
    const [endDate, setEndDate] = useState(new Date());  // To get the End date of the booking
    const [numberOfGuests, setNumberOfGuests] = useState(1); // To get the number of guests 
    const router = useRouter() // For routing purposes for search page hook
     //Selection function for startDate and endDate onclick
     const selectionRanges = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'

    }

    //SearchInput will be cleared once clicked.
    const resetInput = () => {
        setSearchInput("");
    }

    //Seelcts the startdate till the endate
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    //Routing point to the search page passing down the location, startdate end date and numberofguests as parameter(props) dynamic Routing
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests,
            }
        })
    }
    return (
        <>
        <div className=' relative  h-1000'>
        <Image src={forestImage}  layout='fill' objectFit='cover' />
        <div className='pt-20 h-800 pb-32 md:absolute absolute  ' >
            <div className='md:max-w-7xl md:mx-auto absolute'>
              <div className=" flex flex-row items-center justify-items-center ">   
                <input
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value) }
                            className=" md:ml-96 md:w-[100vh] w-400 rounded-xl ml-10  p-3 items-center justify-items-center bg-white-white flex-grow outline-none text-gray-600 font-PlayFair  placeholder-gray-800" type="text"
                            placeholder={"Explore Now"}
                        />
                {searchInput &&  <SearchIcon className="h-8 bg-black text-white-white rounded-full p-2  cursor-pointer hidden md:inline-flex mr-5 md:mx-2"/> }
               
            </div>
            {searchInput &&  
            <div className=' flex flex-col col-span-3 bg-white-white mt-10 p-16 font-PlayFair md:flex-row transform md:translate-x-96'>
                <div>
                <DateRangePicker
                 ranges={[selectionRanges]}
                    minDate= {new Date()}
                    color='#F9D371'
                    onChange={handleSelect}
                />

                    </div>
               
                <div className="flex flex-col items-center border-b mb-4 pl-10">
                    <div className='flex items-center gap-2 pb-5'>
                        <h2 className="text-lg  font-semibold">Number of Guests</h2>
                        <UserIcon className="h-5"/>
                        <input value={numberOfGuests} onChange={(e)=> setNumberOfGuests(e.target.value)} type='number' className="w-12 pl-2 text-lg outline-none text-red-400 border-2"/>
                    </div>
                 
                    <div className="flex flex-rpw space-x-3 gap-1">
                        <button className="flex-grow border-2 rounded-full px-8 py-2" onClick={resetInput}>Cancel</button>
                        <button onClick={search} className="flex-grow text-black hover:text-white transition duration-200 ease-in-out hover:bg-red-400 border-2 rounded-full px-8 py-2">Search</button>
                     </div>
                    
                </div>
                <div className='pl-10'>
                    <h1 className='text-2xl font-bold'>Ready to Wander?</h1>
                </div> 
               
            </div> }
        </div>
        
        </div>
      
        </div>
       
        <About/>
        <Destination/> 
        </>

    )
}

export default Banner
    