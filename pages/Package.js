import Foooter from "../Components/Foooter"
import Header from "../Components/Header"
import PackageBanner from "../Components/PackageComponent/PackageBanner"
import Stories from "../Components/Stories"

function Package() {
  return (
    <div>
      <Header/> 
      <PackageBanner/>
      <Stories/>
       <Foooter/> 
    </div>
  )
}

export default Package
