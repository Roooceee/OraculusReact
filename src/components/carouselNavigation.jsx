import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import useHoroscopeStore from '../storeHoroscope';
import '../css/carrousselNavigation.css'

function CarrousselNavigation(){


   const { next , previous } = useHoroscopeStore()


   function preventDefaultNext(e){
      e.preventDefault()
      next()
   }

   function preventDefaultPrevious(e){
      e.preventDefault()
      previous()
   }

   return (


      <div id='carrousselNavigation'>
         <div>
            <a href="#" onClick={preventDefaultPrevious}><ChevronLeft size={48} strokeWidth={1} /></a>
         </div>
         <div>
            <a href="#" onClick={preventDefaultNext}><ChevronRight size={48} strokeWidth={1} /></a>
         </div>
      </div>

   )

}

export default CarrousselNavigation
