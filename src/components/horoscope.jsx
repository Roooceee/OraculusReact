import { useEffect } from 'react'
import NextPrevSignNav from '../components/nextPrevSignNav'
import ParseTextWithBreaks from '../components/parseTextWithBreaks'
import '../css/horoscope.css'
import useHoroscopeStore from "../storeHoroscope"
import useStoreDevice from '../storeDevice'



function Horoscope(){

   const {horoscope , currentIndex} = useHoroscopeStore()
   const {device} = useStoreDevice()

   
   function dateTodayFormatFr(){


      const dateToday = new Date()
      let date = dateToday.getMonth()
      let month = dateToday.getMonth()+1
      month = month < 10 ? '0'+month : month
      date = date < 10 ? '0'+date : date

      return date+'/'+month+'/'+dateToday.getFullYear()

   }

   useEffect(()=>{
      document.title = `Oraculus - Horoscope du : ${dateTodayFormatFr()}`
   })

   
   return (
      
      <>
      {horoscope.length > 0 ? 
            <div id="horoscope">
            <NextPrevSignNav/>
            <article id="horoscope-body">
               <div id="text-horoscope">
                  <div>
                     <div>
                        <h2 id="date" className="uppercase">Horoscope du : {dateTodayFormatFr()}</h2>
                        <h1 className="uppercase" id="nom-signe">{horoscope[currentIndex]?.nom}</h1>  
                        <p className="uppercase date-signe">{horoscope[currentIndex]?.dates}</p>
                     </div>

                  {device === 'mobile' && (
                     <img id="img-signe-head" src={`${horoscope[currentIndex]?.imageURL}`} alt={`image du signe : ${horoscope[currentIndex]?.nom}`}/>   
                  )}
                  
                  </div>

                  <div id="predictions">
                     <div>
                        <h3 className="font-bold">Amour : </h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.amour}/>
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold">Travail : </h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.travail}/>
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold">Argent :</h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.argent}/>
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold">Santé :</h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.sante}/>
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold">Famille et Amis :</h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.famille_et_amis}/>
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold">Conseils :</h3>
                        <p>
                           <ParseTextWithBreaks text={horoscope[currentIndex]?.conseil}/>
                        </p>
                     </div>
                  </div>
               </div>
               { device !== 'mobile' && (
                  <aside>
                     <img id="img-signe" src={`${horoscope[currentIndex]?.imageURL}`} alt={`image du signe : ${horoscope[currentIndex]?.nom}`}/>
                  </aside>
               )}
            </article>
         </div>
      :''}
      </>

   )

}
export default Horoscope