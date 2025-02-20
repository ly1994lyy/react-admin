interface IResponse<T> {
  code: number
  data: T
  msg: string
}

interface ILoginResponse {
  token: string
}