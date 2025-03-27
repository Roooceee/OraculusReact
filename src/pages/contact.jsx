import { useEffect } from "react"
import ContactContent from "../components/contactContent"
import SideBar from "../components/sideBar"

function Contact() {

   useEffect(()=> {
      document.title = 'Oraculus - Contact'
   },[])

   return (

      <>
         <SideBar/>
         <ContactContent/>
      </>
      
   )
}

export default Contact