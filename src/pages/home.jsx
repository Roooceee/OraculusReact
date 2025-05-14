import Horoscope from "../components/horoscope"
import SideNav from "../components/sideNav"
import '../styles.css'
import { useEffect, useState } from "react";

import useHoroscopeStore from "../storeHoroscope";
import useStoreSideNav from '../storeSideNav'


function Home() {

  const {isNavOpen, closeNav} = useStoreSideNav()

   const [sizeLess1025px, SetsizeLess1025px] = useState(false)

   useEffect(()=>{

   const handleSize = () => {
         if(window.innerWidth <= 1025){
            SetsizeLess1025px(true)
         }
         else {
            SetsizeLess1025px(false)
         }
      }

   window.addEventListener("resize", handleSize);

   handleSize()

   return () => window.removeEventListener("resize", handleSize);

   },[])

  const {fetchDatas , horoscope} = useHoroscopeStore()

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
      <>
        {horoscope.length < 0 ? <p>Chargement</p> : 
        <>      
        <SideNav/>
        <main onClick={closeNav}>
          {(isNavOpen && sizeLess1025px) && (
            <div className="opacity overlay" onClick={closeNav}></div>
          )}
          <Horoscope/>
        </main>
        </>
        }
      </>
)}

export default Home