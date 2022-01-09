function Foooter() {
    return (
        <div className=" bg-gray-darkest">
            <div className=" flex flex-col justify-between max-w-7xl mx-auto md:flex-row text-center items-center ">
                <h1 className="text-5xl text-white-white font-Raleway font-bold mt-20">Travelodge</h1>
                <div className="flex space-x-3 text-white-white font-Raleway m-20">
                <h2>Facebook</h2>
                <h2>Twitter</h2>
                <h2>Instagram</h2>
                </div>
            </div>
            <hr className="m-10 max-w-7xl mx-auto"/>
            <div className=" grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-4">
                <div className="flex flex-col text-white-white space-y-5">
                    <h2 className="text-2xl text-white-white font-bold">Lodge & Hotels</h2>
                    <p>Mountain Range Lodge</p>
                    <p>Safari Lodge</p>
                    <p>Urusla Homestead</p>
                    <p>CapeTown Hotel</p>
                </div>
                <div className="flex flex-col text-white-white space-y-5">
                    <h2 className="text-2xl text-white-white font-bold">Media Center</h2>
                    <p>Media Gallery</p>
                    <p>Video Gallery</p>
                    <p>Media Kit</p>
                  
                </div>
                <div className="flex flex-col text-white-white space-y-5">
                    <h2 className="text-2xl text-white-white font-bold">About Travelodge</h2>
                    <p>Foundation</p>
                    <p>Community & Groups</p>
                    <p>Relationship</p>
                  
                </div>
                <div className="flex flex-col text-white-white space-y-5">
                    <h2 className="text-2xl text-white-white font-bold">Get In Touch</h2>
                    <p>Reservation</p>
                    <p>Lodge & Hotels</p>
                    <p>Treehouses</p>
                  
                </div>
            </div>
           
        </div>
    )
}

export default Foooter
