/**
 * CreateMenuDto
 */
type CreateMenuDto = {
  id: number
  /**
   * 组件路径
   */
  component: string
  /**
   * 创建者
   */
  createBy: string
  /**
   * 菜单图标
   */
  icon: string
  /**
   * 菜单名称
   */
  menuName: string
  /**
   * 显示顺序
   */
  orderNum: number
  /**
   * 父菜单ID
   */
  parentId: number
  /**
   * 路由地址
   */
  path: string
  children?: CreateMenuDto[]
}

type MenuProps = {
  id: number
  title: string
  url: string
  icon: string
  isActive: boolean
  items?: MenuProps[]
}
