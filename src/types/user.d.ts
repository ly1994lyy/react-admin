interface UserStore{
  username:string,
  setUsername:(username:string)=>void
}

interface User{
  username:string,
  avatar:string
}

type CurrentUser = {
  menus:CreateMenuDto[]
}