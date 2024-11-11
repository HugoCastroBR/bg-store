import React from 'react'
import Card from '../atoms/card'
import MenuCategoryContainer from '../molecules/menuCategoryContainer'
import CategorySelector from './categorySelector'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'

const MenuContainer = () => {

  const {t} = useTranslation()

  return (
    <Card
    className='max-w-[600px] min-h-[400px] h-auto w-full flex flex-col shadow-none sm:shadow-card sm:pb-6'
  >
    <CategorySelector />
    <MenuCategoryContainer />
    <MenuCategoryContainer />
    <div className='bg-gray-50 w-full h-[148px] pb-20 flex justify-center items-center'>
      <Typography className='text-base font-normal text-tundoraGray underline'>
        {t('menuCategories.alergicWarning')}
      </Typography>
    </div>
  </Card>
  )
}

export default MenuContainer