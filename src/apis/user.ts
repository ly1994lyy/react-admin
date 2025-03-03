import httpInstance from '@/utils/request'

export const getCurrentUserInfoApi = ():Promise<IResponse<CurrentUser>> => {
  return httpInstance.get('/user/userInfo')
}