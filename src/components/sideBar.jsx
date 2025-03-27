import { useLocation, NavLink } from "react-router-dom"
import '../css/sideBar.css'
import CarrousselNavigation from "./carouselNavigation"

function SlideBar(){

   // Permet de recup la location
   const location = useLocation();

   return (
      <header>
         <a href="#"><img className="logo" src="/img/logo.png" alt="Logo Oraculus"/></a>
         <nav>
            <ul>
               <NavLink to='/' className="uppercase">Horoscope</NavLink>
               <NavLink to='/a_propos' className="uppercase">A Propos</NavLink>
               <NavLink to='/contact' className="uppercase">Contact</NavLink>
            </ul>
         </nav>

      {/* Composant CarrousselNavigation qui s'affiche uniquement si on est sur la page / */}
      {location.pathname === '/' ? <CarrousselNavigation/> : ''}

      </header>
   )
}

export default SlideBar