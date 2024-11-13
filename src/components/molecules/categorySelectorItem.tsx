import React from 'react'
import CircleImage from '../atoms/circleImage'
import UnderLineButton from './underLineButton'
import { Section } from '../../types/restaurant';

interface ICategorySelectorItemProps extends Section {
  selected?: boolean;
  onClick?: (id: number) => void;
}
const CategorySelectorItem = (props: ICategorySelectorItemProps) => {
  const { selected } = props;

  return (
    <div
      className=' w-[104px] h-[146px] flex flex-col items-center justify-between '
      onClick={() => props?.onClick && props.onClick(props.id)}
    >
      <CircleImage 
        img={props.images[0].image}
      />
      <UnderLineButton
        selected={selected}
        classname='w-24 font-semibold'
        variant='secondary'
      >
        {props.name}
      </UnderLineButton>
    </div>
  )
}

export default CategorySelectorItem