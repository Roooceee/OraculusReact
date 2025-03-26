import { useEffect } from 'react';
import { create } from 'zustand';

   // use + nom du store 
const useHoroscopeStore = create((set, get)=>({

      horoscope: [],
      currentIndex: 1,

      fetchDatas : async () => {

        try {
          const req = await fetch('public/datas/horoscope.json')
          const res = await req.json()
          console.log(res)
          set({ horoscope: res});
        }
        catch(e){
          console.log('Erreur : '+e)
        }
      },


      next: () => set((state)=> ({
         currentIndex : state.currentIndex >= state.horoscope.length - 1 ? 0 : state.currentIndex+1
      })),

      previous: () => set((state)=> ({
         currentIndex : state.currentIndex <= 0 ? state.horoscope.length - 1 : state.currentIndex-1
      })),

      nextCurrentIndex : () => {
        const {currentIndex, horoscope} = get()
         return currentIndex >= horoscope.length-1 ? 0 : currentIndex+1
      },

      previousCurrentIndex : () => {
        const {currentIndex, horoscope} = get()
         return currentIndex <= 0 ? horoscope.length-1 : currentIndex-1
      }


   }))
 


export default useHoroscopeStore