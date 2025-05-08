import {NavLink } from "react-router-dom"
import '../css/sideNav.css'
import CarrousselNavigation from "./carouselNavigation"
import useHoroscopeStore from "../storeHoroscope"
import { Menu, SquareX } from "lucide-react"
import { useEffect, useState } from "react"

function SideNav(){

   const {horoscope , currentIndex, changeCurrentIndex} = useHoroscopeStore()

   const [isOpen,setIsOpen] = useState(false)
   
   function toggleMenu(){
      console.log(isOpen)
      setIsOpen(prev=>!prev)  
   }

   const handleLinkClick = () => {
      setIsOpen(false)
   }

   function changeDefaultCurrentIndex(e,index){
      e.preventDefault()
      changeCurrentIndex(index)
   }

   useEffect(()=>{

      handleLinkClick()

   },[currentIndex])

   return (
      <header className={isOpen ? 'open' : 'close'}>
         <span className="burger-menu" onClick={toggleMenu}>{!isOpen ? <Menu /> : <SquareX/>}</span>
         <nav className={isOpen ? 'open' : 'close'}>
         <NavLink to='/'><img className="logo" src="/img/logo.png" alt="Logo Oraculus"/></NavLink>
            <ul>
               <>
                  {horoscope.map((e,index)=>{
                     return <li key={index} className="uppercase">
                              <a href="#" 
                              onClick={(e)=> {
                                 changeDefaultCurrentIndex(e,index);
                              }}
                              className={currentIndex===index ?'active' :''}>
                                 {e.nom}
                              </a>
                           </li>
                  })}
               </>
            </ul>
         <CarrousselNavigation/>
         </nav>
      </header>
   )
}

export default SideNav