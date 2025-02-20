import httpInstance from '@/utils/request'

export interface ILoginData {
  username: string;
  password: string;
}

export const loginApi = (data: ILoginData):Promise<ILoginResponse> => {
  return httpInstance.post('/auth/login', data)
}