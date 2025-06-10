import '../css/sideNav.css'
import CarrousselNavigation from "./carouselNavigation"
import { Menu, SquareX } from "lucide-react"
import { useEffect} from "react"

import useStoreSideNav from "../storeSideNav"
import useHoroscopeStore from "../storeHoroscope"
import useStoreDevice from '../storeDevice'

import { motion } from "framer-motion"
import { div } from 'framer-motion/client'

function SideNav(){
   
   const {isNavOpen , toggleNav , closeNav , openNav} = useStoreSideNav()
   const {horoscope , currentIndex, changeCurrentIndex} = useHoroscopeStore()
   const {device , widthScreen} = useStoreDevice()


   useEffect(()=>{
      closeNav()
   },[currentIndex])

   useEffect(()=> {
      device === 'desktop' && (
         closeNav()
      )
   },[device])

   function handleChangeCurrentIndex (e,index){
      e.preventDefault()
      changeCurrentIndex(index)
   }


   return (
      <motion.header className={device !== 'desktop' ? (isNavOpen) ? 'open' : 'close' : ''}
            initial="left"
            animate="right"
            exit="exit"
            transition={{ duration: 0.9 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {

               console.log(info.offset.x)

               if(info.offset.x > widthScreen*0.33) {
                  openNav()
               }
               else if(info.offset.x < -(widthScreen*0.33)) {
                  closeNav()
               }

            }}
      >
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

         {device !== 'desktop' && (
            <div>
               <span className='burger-menu' onClick={toggleNav}>{!isNavOpen ? <Menu /> : <SquareX/>}</span>
            </div>
         )}

      </motion.header>
   )
}

export default SideNav