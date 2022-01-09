function About() {
  return (
    <div className=" h-700 p-10">
      <Header/>
    </div>
  )
}

export default About


export const Header = () => {
  return(
    <div className="md:max-w-7xl md:mx-auto">
      <h3 className=" font-Raleway  text-1xl font-regular">A COLLECTION OF EXTRAORDINARY LIFE EXPERIENCES <br/>
      MADE POSSIBLE BY A FAMILY OF REMARKABLE PEOPLE
      </h3>
        <h1 className="text-4xl font-PlayFair font-extrabold justify-items-center text-left pt-5 md:text-8xl md:w-9/12 md:pl-20">The Travelodge Family Collection
        </h1>
      <div className=" bg-yellow-100 p-2 mt-10 drop-shadow-md">
        <p className="text-sm justify-center text-left font-Raleway md:text-2xl md:w-9/12">Our people on the ground create highly personalised experiences to bring you closer to Mother Nature, the greatest teacher about the only things in life that really matter.</p>
        <p className="text-sm pt-8 font-Raleway md:w-9/12 md:text-2xl">Our purpose is to help you open your eyes and heart, and reconnect with how ‘wonder-full’ life is – whether in the company of loved ones or on your own.</p>

        <p className="text-sm pt-8 font-Raleway md:text-2xl md:w-9/12">We invite you to take a closer look at our Lodges and Hotels, found in some of Southern Africa’s most beautiful and untouched destinations. And to immerse yourself in our experiences. They'll enrich your life.</p>

        <h2 className="text-2xl md:text-4xl font-PlayFair pt-8">Welcome To The Family</h2>
      </div> 
    </div>
  )
}