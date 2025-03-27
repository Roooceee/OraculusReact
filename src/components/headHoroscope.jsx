import '../css/headHoroscope.css'
import useHoroscopeStore from "../storeHoroscope"

function HeadHoroscope(){


   const { horoscope  , next , previous , previousCurrentIndex , nextCurrentIndex } = useHoroscopeStore()


   function preventDefaultNext(e){
      e.preventDefault()
      next()
   }

   function preventDefaultPrevious(e){
      e.preventDefault()
      previous()
   }


   return (

      <div id="headHoroscope">
         <a href="#" onClick={preventDefaultPrevious}>
            <p className="nom_signe uppercase">{horoscope[previousCurrentIndex()]?.nom}</p>
            <p className="date_signe uppercase">{horoscope[previousCurrentIndex()]?.dates}</p>
         </a>
         <a href="#" onClick={preventDefaultNext}>
            <p className="nom_signe uppercase">{horoscope[nextCurrentIndex()]?.nom}</p>
            <p className="date_signe uppercase">{horoscope[nextCurrentIndex()]?.dates}</p>
         </a>
      </div>

   )
}

export default HeadHoroscope