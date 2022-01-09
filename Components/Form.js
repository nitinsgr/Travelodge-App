function Form() {
  return (
    <div>
      <Formlayout/>
    </div>
  )
}

export default Form


export const Formlayout = () => {
  return(
    <div className="items-center justify-items-center bg-gray-100 m-0 md:m-20">
      <Header/>
      <FormContainer/>
    </div>
  )
}


export const Header = () => {
  return(
    <div className="pt-10 text-center">
      <h3>MORE STORIES</h3>
      <h2 className="text-2xl font-PlayFair text-black z-20">Join the adventure</h2>
    </div>
  )
}

export const FormContainer = () => {
  return(
    <>
      <form className="mt-20 mb-20 grid grid-cols-1 justify-items-center">
      <label className="pr-5 font-Raleway">Firstname</label>
      <input type="text" name="name" placeholder="Enter First Name" className=" md:w-6/12 w-9/12  border border-black font-Raleway p-2"/>
      <label className="pr-5 font-Raleway">Lastname</label>
      <input type="text" name="name" placeholder="Enter First Name" className=" md:w-6/12 w-9/12 border border-black font-Raleway p-2"/>
      <label className="pr-5 font-Raleway">Email Address</label>
      <input type="email" name="name" placeholder="Enter First Name" className=" md:w-6/12 w-9/12 border border-black font-Raleway p-2"/>
      <label className="pr-5 font-Raleway">Lastname</label>
      <input type="text" name="name" placeholder="Enter First Name" className=" md:w-6/12 w-9/12 border border-black font-Raleway p-2"/>
      <label className="pr-5 font-Raleway">Postal Code</label>
      <input type="text" name="name" placeholder="Enter First Name" className=" md:w-6/12 w-9/12 border border-black font-Raleway p-2"/>
      <button className=" justify-items-center items-center text-center  p-4 bg-black text-white-white mt-20 w-8/12 md:w-6/12">Subscribe</button>
    </form>
  
    </>
  
  )
}