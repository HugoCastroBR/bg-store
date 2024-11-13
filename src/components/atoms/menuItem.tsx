import React from 'react'
import Typography from './typography'
import { MenuItem as MenuItemType } from '../../types/restaurant'
import { truncate } from '../../utils/format'
import useStore from '../../hooks/useStore'
import { addItem } from '../../store/action'
import ProductImage from './productImage'
import ItemDetails from '../organims/itemDetails'

const MenuItem = (props: MenuItemType) => {

  const {dispatch} = useStore()
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false)

  return (
    <article 
    className="overflow-hidden w-full min-h-[117px] p-4 flex-shrink-0 cursor-pointer" 
    aria-label="Item do Menu"
    onClick={() => dispatch(addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
      modifiers: [],
      totalPrice: props.price,
    }))}
    >
      {
        isDetailsOpen &&
        <ItemDetails/>
      }
      <div className="flex h-[85px] justify-between">
        <div className="flex flex-col items-start justify-start">
          <Typography className="text-base font-medium h-[18px] flex text-codGray mb-1">
            {props.name}
          </Typography>
          <Typography className="text-base leading-[18.75px] font-light max-h-[38px] pr-2 flex text-left text-tundoraGray mb-1">
            {truncate(props.description, 100)}
          </Typography>
          <Typography className="text-base font-semibold max-h-[19px] flex text-tundoraGray mb-1">
            R${props.price}
          </Typography>
        </div>
        <ProductImage images={props?.images || []} />
      </div>
    </article>
  )
}

export default MenuItem
