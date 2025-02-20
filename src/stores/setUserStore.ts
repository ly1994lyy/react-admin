import { create } from 'zustand'

const setUserStore = create<UserStore>((set) => {
  return {
    username: 'John Doe',
    setUsername: (username: string) => set({ username })
  }
})

export default setUserStore