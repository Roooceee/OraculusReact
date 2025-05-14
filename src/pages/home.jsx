import Horoscope from "../components/horoscope"
import SideNav from "../components/sideNav"
import Loader from '../components/loader'
import '../styles.css'
import { useEffect } from "react";

import useHoroscopeStore from "../storeHoroscope";
import useStoreSideNav from '../storeSideNav'
import useStoreDevice from '../storeDevice'


function Home() {

  const {isNavOpen, closeNav} = useStoreSideNav()
  const {device, handleDevice} = useStoreDevice()

  // useEffect qui permet de lancer la fonction handleDevice afin de connaitre la largeur de l'ecran et donc le device
   useEffect(()=>{

   const handleSize = () => {

        handleDevice()

      }

   window.addEventListener("resize", handleSize);

   handleSize()

   return () => window.removeEventListener("resize", handleSize);

   },[])


  const {fetchDatas , horoscope , isReady} = useHoroscopeStore()

  // useEffect qui permet de recuperer les Datas
  useEffect(() => {
    setTimeout(()=>{
      
      fetchDatas();
      setIsReady(true)

    },1000)
  }, []);

  return (
      <>
        {!isReady ? <Loader/> : 
        <>      
        <SideNav/>
        <main onClick={closeNav}>
          {(isNavOpen && device != 'desktop') && (
            <div className="opacity overlay" onClick={closeNav}></div>
          )}
          <Horoscope/>
        </main>
        </>
        }
      </>
)}

export default Home