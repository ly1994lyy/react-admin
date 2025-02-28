import httpInstance from '@/utils/request'

export const getCurrentUserInfoApi = ():Promise<ILoginResponse> => {
  return httpInstance.get('/user/userInfo')
}