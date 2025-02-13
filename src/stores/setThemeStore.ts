import {create} from 'zustand'

interface ThemeStore {
    isDark:boolean,
    setTheme:(theme:boolean)=>void
}

const setThemeStore = create<ThemeStore>((set)=>{
  return {
    isDark:false,
    setTheme:(theme:boolean)=>set({isDark:theme})
  }
})

export default setThemeStore
