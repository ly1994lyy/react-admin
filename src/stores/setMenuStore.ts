import { getCurrentUserInfoApi } from '@/apis/user'
import { create } from 'zustand'

type MenuStore = {
    menus: CreateMenuDto[],
    setMenu: () => void
}

const setMenuStore = create<MenuStore>((set) => ({
  menus: [],
  setMenu: async() => {
    try {
      const res = await getCurrentUserInfoApi()
      set((state)=>({menus:[...state.menus,...res.data.menus]}))
    } catch (error) {
      console.log(error)
    }
  },
}))

export default setMenuStore