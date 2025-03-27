import { useLocation } from "react-router-dom";
import useHoroscopeStore from "../storeHoroscope"
import '../css/aside.css'

function Aside(){

   const {horoscope , currentIndex} = useHoroscopeStore()
   const location = useLocation();

   return (

      <aside>
      {location.pathname === '/' ? <img id="img_signe" src={horoscope[currentIndex]?.imageURL} alt={horoscope[currentIndex]?.nom}/> : ''}
      {/* Optional shining operator via ? ici : {horoscope[currentIndex]?.nom} */}
      </aside>

   )
}

export default Aside