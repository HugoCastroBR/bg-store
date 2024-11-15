import React from 'react'
import Card from '../atoms/card'
import MenuCategoryContainer from '../molecules/menuCategoryContainer'
import CategorySelector from './categorySelector'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'
import useStore from '../../hooks/useStore'
import { Section, MenuItem } from '../../types/restaurant'

interface MenuContainerProps {
  search: string
}

const MenuContainer = ({ search }: MenuContainerProps) => {
  const { t } = useTranslation()
  const { states } = useStore()

  const filteredSections: Section[] = states.restaurantItems?.sections
    ?.map((section: Section) => {
      const filteredItems = section.items.filter((item: MenuItem) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      return filteredItems.length > 0
        ? { ...section, items: filteredItems }
        : null
    })
    .filter((section): section is Section => section !== null) || []

  return (
    <Card className="max-w-[600px] min-h-[400px] h-auto w-full flex flex-col shadow-none sm:shadow-card sm:pb-6">
      <CategorySelector />
      {filteredSections.map((section) => (
        <MenuCategoryContainer key={section.id} {...section} />
      ))}

      <div className="bg-gray-50 w-full h-[148px] pb-20 justify-center items-center sm:hidden flex">
        <Typography className="text-base font-normal underline text-tundoraGray">
          {t('menuCategories.alergicWarning')}
        </Typography>
      </div>
    </Card>
  )
}

export default MenuContainer
