import { Link, NavLink } from "react-router-dom"
import useHoroscopeStore from "../storeHoroscope"
import '../css/SlideBar.css'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function SlideBar(){


   const { next , previous , previousCurrentIndex , nextCurrentIndex } = useHoroscopeStore()


   function preventDefaultNext(e){
      e.preventDefault()
      next()
      previousCurrentIndex()
      nextCurrentIndex()
   }

   function preventDefaultPrevious(e){
      e.preventDefault()
      previous()
      previousCurrentIndex()
      nextCurrentIndex()
   }

   return (
      <header>
         <a href="#"><img className="logo" src="/img/logo.png" alt="Logo Oraculus"/></a>
         <nav>
            <ul>
               <NavLink to='/' className="uppercase">Horoscope</NavLink>
               <NavLink to='/propos' className="uppercase">A Propos</NavLink>
               <NavLink to='/contact' className="uppercase">Contact</NavLink>
            </ul>
         </nav>

         <div>
            <div>
               <a href="#" onClick={preventDefaultPrevious}><ChevronLeft size={48} strokeWidth={1} /></a>
            </div>
            <div>
               <a href="#" onClick={preventDefaultNext}><ChevronRight size={48} strokeWidth={1} /></a>
            </div>
         </div>
      </header>
   )
}

export default SlideBar