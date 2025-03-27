import { useEffect } from "react"
import Aproposcontent from "../components/aProposContent"
import SideBar from "../components/sideBar"

function Apropos(){


   useEffect(()=> {
      document.title = 'Oraculus - A Propos'
   },[])

return(

   <>
      <SideBar/>
      <Aproposcontent/>
   </>

)

}

export default Apropos