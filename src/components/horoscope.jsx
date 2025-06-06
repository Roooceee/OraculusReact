import { useEffect } from 'react'
import NextPrevSignNav from '../components/nextPrevSignNav'
import ParseTextWithBreaks from '../components/parseTextWithBreaks'
import '../css/horoscope.css'
import useHoroscopeStore from "../storeHoroscope"
import useStoreDevice from '../storeDevice'



function Horoscope(){

   const {horoscope , currentIndex} = useHoroscopeStore()
   const {device} = useStoreDevice()

   const predictions = [
      {libelle : 'Amour', dataKey  : 'amour' },
      {libelle : 'Travail', dataKey  : 'travail' },
      {libelle : 'Argent', dataKey  : 'argent' },
      {libelle : 'Santé', dataKey  : 'sante' },
      {libelle : 'Famille et Amis', dataKey  : 'famille_et_amis' },
      {libelle : 'Conseils', dataKey  : 'conseil' }
   ]

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
                     
                        {predictions.map((pred , id)=> {

                           return (
                              <div key={id}>
                                 <h3 className="font-bold">{pred?.libelle} : </h3>
                                 <p>
                                    <ParseTextWithBreaks text={horoscope[currentIndex]?.[pred.dataKey]}/>
                                 </p>
                              </div>
                           )
                        })}
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