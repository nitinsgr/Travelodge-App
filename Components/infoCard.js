import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex mt-10 rounded-lg p-5 cursor-pointer hover:shadow-md transition duration-200 ease-in-out first:border-t">
            <div className="relative h-24 w-48 md:h-52 md:w-80 hover:opacity-70 flex-shrink-0">
                <Image src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5"> 
                 <div className="flex justify-between">
                <p>{location}</p>
                <HeartIcon className="h-7 cursor-pointer"/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"></div>
                <p className="pt-2 text-sm flex-grow text-gray-500">{description}</p>

                <div className="flex justify-between item-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                     <div className="flex flex-col">
                    <p className="text-sm text-red-500 lg:text-2xl">{price}</p>
                    <p className=" text-right  font-extralight">{total}</p>
                </div>
                </div>
               
            </div>
           
        </div>
    )
}

export default InfoCard
