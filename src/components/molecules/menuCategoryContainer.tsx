'use client'
import React from 'react'


import { useState } from 'react'
import MenuItem from '../atoms/menuItem'
import { useTranslation } from 'react-i18next'
import Typography from '../atoms/typography'

const MenuCategoryContainer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { t } = useTranslation()


  return (
    <div className="flex flex-col w-full h-auto overflow-hidden transition-all duration-200">
      <button
        className="flex items-center justify-between w-full h-[72px] pt-8 pb-3 px-4  "
        onClick={() => setIsOpen(!isOpen)} 
      >
        <Typography
          className="text-2xl font-semibold text-codGray"
        >
          {t('menuCategories.burgers')}
        </Typography>
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M2.4142 9C2.02367 9.39053 1.39051 9.39053 0.999985 9C0.609461 8.60948 0.609461 7.97631 0.999987 7.58579L8.29288 0.292892C8.6834 -0.0976315 9.31657 -0.0976305 9.70709 0.292893L17 7.58579C17.3905 7.97631 17.3905 8.60948 17 9C16.6095 9.39053 15.9763 9.39053 15.5858 9L9.70709 3.12132C9.31657 2.7308 8.6834 2.7308 8.29288 3.12132L2.4142 9Z" fill="#4F372F" />
        </svg>

      </button>
      <div className={`w-full flex flex-col transition-all duration-200 ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  )
}

export default MenuCategoryContainer