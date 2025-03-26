import HeadHoroscope from "../components/headHoroscope"
import '../css/horoscope.css'
import useHoroscopeStore from "../storeHoroscope"

function Horoscope(){

   const {horoscope , currentIndex} = useHoroscopeStore()
  
   function dateTodayFormatFr(){


      const dateToday = new Date()
      let date = dateToday.getMonth()
      let month = dateToday.getMonth()+1
      month = month < 10 ? '0'+month : month
      date = date < 10 ? '0'+date : date

      return date+'/'+month+'/'+dateToday.getFullYear()
   }


   return (

      <div id="horoscope">
            <article id="horoscope_body">
               <HeadHoroscope/>
               <div id="text_horoscope">
                  <h2 id="datejour" className="uppercase">-- Horoscope du : {dateTodayFormatFr()}</h2>
                  <h1 className="uppercase">{horoscope[currentIndex]?.nom}</h1>  
                  <p className="uppercase date_signe">{horoscope[currentIndex]?.dates}</p>

                  <div id="predictions">
                     <p><span className="subtitle">Amour : </span> {horoscope[currentIndex]?.amour}</p>
                     <p><span className="subtitle">Travail : </span>{horoscope[currentIndex]?.travail}</p>
                     <p><span className="subtitle">Argent : </span>{horoscope[currentIndex]?.argent}</p>
                     <p><span className="subtitle">Santé : </span>{horoscope[currentIndex]?.sante}</p>
                     <p><span className="subtitle">Amour : </span>{horoscope[currentIndex]?.amour}</p>
                     <p><span className="subtitle">Fammilles et Amis : </span>{horoscope[currentIndex]?.famille_et_amis}</p>
                     <p><span className="subtitle">Conseils : </span>{horoscope[currentIndex]?.conseil}</p>
                  </div>
               </div>
            </article>
               <aside>
                  <img id="img_signe" src={horoscope[currentIndex]?.imageURL} alt={horoscope[currentIndex]?.nom}/>
                  {/* Optional shining operator via ? ici : {horoscope[currentIndex]?.nom} */}
               </aside>
         </div>
   )

}
export default Horoscope