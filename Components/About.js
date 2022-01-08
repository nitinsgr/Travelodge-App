function About() {
  return (
    <div className=" h-700 p-20">
      <Header/>
    </div>
  )
}

export default About


export const Header = () => {
  return(
    <div className=" max-w-7xl mx-auto ">
      <h3 className=" font-Raleway  text-1xl font-regular">A COLLECTION OF EXTRAORDINARY LIFE EXPERIENCES <br/>
      MADE POSSIBLE BY A FAMILY OF REMARKABLE PEOPLE
      </h3>
        <h1 className="text-8xl font-PlayFair font-extrabold pl-20 w-9/12 pt-5">The Travelodge Family Collection
        </h1>
      <div className="max-w-7xl mx-auto bg-yellow-100 p-4 mt-10 drop-shadow-md">
        <p className="text-1xl w-2/4 justify-center text-left font-Raleway">Our people on the ground create highly personalised experiences to bring you closer to Mother Nature, the greatest teacher about the only things in life that really matter.</p>
        <p className="text-1xl w-2/4 pt-8 font-Raleway">Our purpose is to help you open your eyes and heart, and reconnect with how ‘wonder-full’ life is – whether in the company of loved ones or on your own.</p>

        <p className="text-1xl w-2/4 pt-8 font-Raleway">We invite you to take a closer look at our Lodges and Hotels, found in some of Southern Africa’s most beautiful and untouched destinations. And to immerse yourself in our experiences. They'll enrich your life.</p>

        <h2 className="text-3xl font-PlayFair pt-8">Welcome To The Family</h2>
      </div>
    </div>
  )
}