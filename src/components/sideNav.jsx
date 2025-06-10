import '../css/sideNav.css'
import CarrousselNavigation from "./carouselNavigation"
import { Menu, SquareX } from "lucide-react"
import { useEffect} from "react"

import useStoreSideNav from "../storeSideNav"
import useHoroscopeStore from "../storeHoroscope"
import useStoreDevice from '../storeDevice'

import { useSwipeable } from 'react-swipeable'

function SideNav(){
   
   const {isNavOpen , toggleNav , closeNav , openNav} = useStoreSideNav()
   const {horoscope , currentIndex, changeCurrentIndex} = useHoroscopeStore()
   const {device} = useStoreDevice()


   // Permet via la bibliothèque useSwipeable de fermer la sideNav
   const handlers = useSwipeable({
      onSwipedLeft: () => {
      closeNav()
      },
      onSwipedRight: () => {
      openNav()
      },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
   })

   useEffect(()=>{
      closeNav()
   },[currentIndex])

   function handleChangeCurrentIndex (e,index){
      e.preventDefault()
      changeCurrentIndex(index)
   }


   return (
      <header className={device !== 'desktop' ? (isNavOpen) ? 'open' : 'close' : ''} {...handlers}>
         {device !== 'desktop' && (
            <span className='burger-menu' onClick={toggleNav}>{!isNavOpen ? <Menu /> : <SquareX/>}</span>
         )}
            <nav>
               <img className="logo" src="/img/logo.png" alt="Logo Oraculus"/>
                  <ul>
                     <>
                        {horoscope.map((e,index)=>{
                           return <li key={index} className="uppercase">
                                    <a href="#" 
                                    onClick={(e)=> {
                                       handleChangeCurrentIndex (e,index);
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