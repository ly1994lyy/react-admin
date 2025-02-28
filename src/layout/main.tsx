import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { useEffect, useState } from 'react'
import { Outlet, useLocation,useNavigate } from 'react-router-dom'
import { getCurrentUserInfoApi } from '@/apis/user'

export default function Page() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menus,setMenus] = useState([])

  const queryUserInfo = async () => {
    try {
      const res = await getCurrentUserInfoApi()
      setMenus(res.data.menus)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(()=>{
    if(location.pathname !== '/login'){
      if(!localStorage.getItem('react-admin-token')){
        navigate('/login')
      }else{
        queryUserInfo()
      }
    }
  },[])
  return (
    <SidebarProvider>
      <AppSidebar menus={menus} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
