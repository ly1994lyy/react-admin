import * as LucideIcons from 'lucide-react'
import { ComponentType, useState } from 'react'

const iconComponents = Object.entries(LucideIcons)

const ICONS_PER_PAGE = 400 // 每页显示的图标数量
const IconMgnt = () => {
  console.log(iconComponents.splice(0, 20))
  
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(iconComponents.length / ICONS_PER_PAGE)

  // 计算当前页显示的第一个和最后一个图标的索引
  const indexOfLastIcon = currentPage * ICONS_PER_PAGE
  const indexOfFirstIcon = indexOfLastIcon - ICONS_PER_PAGE
  const currentIcons = iconComponents.slice(indexOfFirstIcon, indexOfLastIcon)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">所有图标展示</h2>
      <div className="grid grid-cols-10 gap-4">
        {currentIcons.map(([iconName, IconComponent]) => {
          try {
            const Icon = IconComponent as ComponentType<{ size: number }>
            return (
              <div key={iconName} className="flex flex-col  items-center p-4 bg-white rounded shadow">
                <Icon size={24} />
                <p className="mt-2 text-sm text-gray-600">{iconName}</p>
              </div>
            )
          } catch (error) {
            console.error(`Error rendering icon ${iconName}:`, error)
            return null
          }
        })}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default IconMgnt
