import Horoscope from "../components/horoscope"
import SideNav from "../components/sideNav"
import '../styles.css'
import { useEffect } from "react";
import useHoroscopeStore from "../storeHoroscope";

function Home() {

  const {fetchDatas , horoscope} = useHoroscopeStore()

  useEffect(() => {
    document.title = 'Oraculus - Horoscope'
    fetchDatas();
  }, []);

  return (
      <>
        {horoscope.length < 0 ? <p>Chargement</p> : 
        <>      
        <SideNav/>
        <main>
          <Horoscope/>
        </main>
        </>
        }
      </>
)}

export default Home