import format from "date-fns/format";
import { useRouter } from "next/dist/client/router"
import Foooter from "../Components/Foooter"
import Header from "../Components/Header"
import Map from "../Components/Map";

function Search({searchResults}) {
    

    //Initializing the Router hook
    const router = useRouter();

    //Dynamically Getting location, startdate, enddate and numberofguests from the Headerjs Componnet passed using router hook
    const { location, startDate, endDate, numberOfGuests } = router.query; //Fetching data from router query
    const formattedStartDate = format(new Date(startDate), 'dd MMM yy'); // Converting previously converted date format from string to date format
    const formattedEndDate = format(new Date(endDate), 'dd MMM yy');// Converting previously converted date format from string to date format
   
    const range = `${formattedStartDate} - ${formattedEndDate}`; // Storing Dates in a range variable

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
            
            <main className="flex font-PlayFair-Bold font-bold">
                <section className="flex-grow max-w-screen-full pt-14 px-6">
                    
                    <p className=" text-xs px-4">300+ stays {range} for {numberOfGuests} guests in map area</p>
                    <h1 className="text-3xl font-semibold mt-2 px-4 mb-6">Stays in {location}</h1>

                    {/* Multi button div section */}
                    
                    <div className="hidden lg:inline-flex  space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Wifi</p>
                        <p className="button">Kitchen</p>
                        <p className="button"> Air conditioning</p>
                        <p className="button">Washing machine</p>
                    </div>

                    {/* Mapping the actual json file and passing the props to the infocard component */}

                
                </section>

                {/* Map component */}
                <section className="hidden xl:inline-flex max-w-screen-xl mx-auto flex-grow ">
                    <Map searchResults={ searchResults}/>
                </section>
            </main>

            <Foooter/>
        </div>
    )
}

export default Search


//Grabbing The json file from Papareact.com for showcase. We can use any api if want.

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json());
    return {
        props: {
            searchResults,
        }
    }
}