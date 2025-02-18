import httpInstance from '@/utils/request'

interface ILoginData {
  username: string;
  password: string;
}

export const loginApi = (data: ILoginData) => {
  return httpInstance.post('/auth/login', data)
}