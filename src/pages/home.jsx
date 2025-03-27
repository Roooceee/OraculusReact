import Horoscope from "../components/horoscope"
import SideBar from "../components/sideBar"
import '../styles.css'
import { useEffect } from "react";
import useHoroscopeStore from "../storeHoroscope";

function Home() {

  const {fetchDatas , horoscope} = useHoroscopeStore()

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
      <>
        {horoscope.length < 0 ? <p>Chargement</p> : 
        <>      
        <SideBar/>
        <Horoscope/>
        </>
        }
      </>
)}

export default Home