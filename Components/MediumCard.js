import Image from 'next/image'
import CardImage from '../Images/Arizona2.jpg'

function MediumCard() {
    return (
        <div className="flex relative">
            <div className=" h-screen w-full">
            <Image
            className=" rounded-lg"
            src={CardImage}
            layout="fill"
            objectFit="contain" 
            />
            </div>
            <div className="absolute text-center text-white  text-5xl py-4 px-10">
                <h1>
                    hello
                </h1>
            </div>


        
            
        </div>
    )
}

export default MediumCard
