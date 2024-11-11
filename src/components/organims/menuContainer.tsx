import React from 'react'
import Card from '../atoms/card'
import MenuCategoryContainer from '../molecules/menuCategoryContainer'
import CategorySelector from './categorySelector'

const MenuContainer = () => {
  return (
    <Card
    className='max-w-[600px] min-h-[400px] h-auto w-full flex flex-col shadow-none sm:shadow-card pb-6'
  >
    <CategorySelector />
    <MenuCategoryContainer />
    <MenuCategoryContainer />

  </Card>
  )
}

export default MenuContainer