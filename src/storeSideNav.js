import { create } from 'zustand';

const useStoreSideNav = create((set)=>({

   isNavOpen: false,

   toggleNav: () => set((state) => ({
      isNavOpen : !state.isNavOpen
   })),

   openNav:() => set((state)=> ({
      isNavOpen:true
   })),

   closeNav: () => set((state) => ({
      isNavOpen:false
   }))

}))

export default useStoreSideNav;