export const handleMenus = (menus: any[]) => {
  return menus.map((menu) => {
    return {
      id:menu.id,
      title: menu.menuName,
      url: menu.path,
      icon: menu.icon,
      items:menu.children ? handleMenus(menu.children) : []
    }
  })
}