export const handleMenus = (menus: CreateMenuDto[]):MenuProps[] => {
  return menus.map((menu) => {
    return {
      id:menu.id,
      title: menu.menuName,
      url: menu.path,
      icon: menu.icon,
      isActive: false,
      items:menu.children ? handleMenus(menu.children) : []
    }
  })
}