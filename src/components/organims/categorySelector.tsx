import React from 'react'
import CategorySelectorItem from '../molecules/categorySelectorItem'

const CategorySelector = () => {
  return (
    <div
      className='flex items-start justify-start w-full pt-5 pb-6 pl-4 h-max' 
    >
      <CategorySelectorItem selected/>
      <CategorySelectorItem />
      <CategorySelectorItem />
    </div>
  )
}

export default CategorySelector