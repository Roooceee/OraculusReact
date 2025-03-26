import useHoroscopeStore from "../storeHoroscope"
import '../css/Headhoroscope.css'

function HeadHoroscope(){


   const { horoscope, currentIndex , currentIndexNext , nextCurrentIndex , next , previous , currentIndexPrevious , previousCurrentIndex } = useHoroscopeStore()


   function preventDefaultNext(e){
      e.preventDefault()
      console.log('next')
      console.log(currentIndex)
      next()
      nextCurrentIndex()
   }

   function preventDefaultPrevious(e){
      e.preventDefault()
      console.log('previous')
      console.log(currentIndex)
      previous()
      previousCurrentIndex()
   }


   return (

      <div id="headHoroscope">
         <a href="#" onClick={preventDefaultPrevious}>
            <p>{horoscope[currentIndexPrevious].nom}</p>
            <p>{horoscope[currentIndexPrevious].dates}</p>
         </a>
         <a href="#" onClick={preventDefaultNext}>
            <p>{horoscope[currentIndexNext].nom}</p>
            <p>{horoscope[currentIndexNext].dates}</p>
         </a>
      </div>

   )
}

export default HeadHoroscope