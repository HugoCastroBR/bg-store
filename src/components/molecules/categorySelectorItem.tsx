import React from 'react'
import CircleImage from '../atoms/circleImage'
import UnderLineButton from './underLineButton'

interface ICategorySelectorItemProps {
  selected?: boolean;
}
const CategorySelectorItem = (props: ICategorySelectorItemProps) => {
  const { selected } = props;

  return (
    <div
      className=' w-[104px] h-[146px] flex flex-col items-center justify-between '
    >
      <CircleImage />
      <UnderLineButton
        selected={selected}
        classname='w-24' 
        variant='secondary'
      >
        Category
      </UnderLineButton>
    </div>
  )
}

export default CategorySelectorItem