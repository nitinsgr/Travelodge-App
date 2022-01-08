import Image from 'next/image'

const SmallCard = ({img, distance, location}) => {
    return (

        <div className=" flex flex-row items-center m-2 space-x-4 rounded-xl cursor-pointer  hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative  h-32 w-32">
            {/* Left */}
                <Image
                src={img}
                layout="fill"
                className="rounded-lg"
                />
                </div>

            {/* Right */}

            <div className="flex flex-col">
                <h2 className=" text-l">
                {distance}
                </h2>
                <h3 className="text-l">
                 {location}
                </h3>
            </div>
        

        </div>
       
    )
}

export default SmallCard
