import { Link } from "react-router-dom"
import useHoroscopeStore from "../storeHoroscope"
import '../css/SlideBar.css'

function SlideBar(){


   const { currentIndex , next , previous} = useHoroscopeStore()


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
      <header>
         <a href="#"><img className="logo" src="/img/logo.png" alt="Logo Oraculus"/></a>
         <nav>
            <ul>
               <Link to='/'>Horoscope</Link>
               <Link to='/propos'>A Propos</Link>
               <Link to='/contact'>Contact</Link>
            </ul>
         </nav>

         <div>
            <div>
               <a href="#" onClick={preventDefaultPrevious}>Precedent</a>
            </div>
            <div>
               <a href="#" onClick={preventDefaultNext}>Suivant</a>
            </div>
         </div>
      </header>
   )
}

export default SlideBar