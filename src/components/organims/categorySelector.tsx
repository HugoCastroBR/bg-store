import React, { useEffect } from 'react'
import CategorySelectorItem from '../molecules/categorySelectorItem'
import useStore from '../../hooks/useStore'

const CategorySelector = () => {

  const {states} = useStore()
  const [selected, setSelected] = React.useState(0)

  return (
    <section
      className='flex items-start justify-start w-full pt-5 pl-4 h-max' 
    >
      {states.restaurantItems.sections && states.restaurantItems.sections.map((section, index) => (
        <CategorySelectorItem 
        key={index} 
        selected={selected === section.id}
        {...section}
        onClick={(id) => setSelected(id)}
         />
      ))}
    </section>
  )
}

export default CategorySelector