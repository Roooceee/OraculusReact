import Horoscope from "../components/horoscope"
import SlideBar from "../components/slideBar"
import '../styles.css'
import { useEffect } from "react";
import useHoroscopeStore from "../storeHoroscope";

function Home() {

  const {fetchDatas , horoscope} = useHoroscopeStore()

  useEffect(() => {
    fetchDatas();
  }, []);

  // Écoute les changements de `horoscope`
  useEffect(() => {
    if (horoscope) {
      console.log("Données mises à jour :", horoscope);
    }
  }, [horoscope]);

  return (
      <>
        {horoscope.length < 0 ? <p>Chargement</p> : 
        <>      
        <SlideBar/>
        <Horoscope/>
        </>
        }
      </>
)}

export default Home