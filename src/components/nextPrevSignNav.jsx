import '../css/nextPrevSignNav.css'
import useHoroscopeStore from "../storeHoroscope"

function NextPrevSignNav(){


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

      <div id="next-prev-sign-nav">
         <a href="#" onClick={preventDefaultPrevious}>
            <p className="nom-signe uppercase">{horoscope[previousCurrentIndex()]?.nom}</p>
            <p className="date-signe uppercase">{horoscope[previousCurrentIndex()]?.dates}</p>
         </a>
         <a href="#" onClick={preventDefaultNext}>
            <p className="nom-signe uppercase">{horoscope[nextCurrentIndex()]?.nom}</p>
            <p className="date-signe uppercase">{horoscope[nextCurrentIndex()]?.dates}</p>
         </a>
      </div>

   )
}

export default NextPrevSignNav