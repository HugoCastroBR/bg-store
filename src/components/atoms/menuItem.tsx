import React from 'react'
import Typography from './typography'
import { MenuItem as MenuItemType } from '../../types/restaurant'
import { truncate } from '../../utils/format'
import ProductImage from './productImage'
import ItemDetails from '../organims/itemDetails'

const MenuItem = (props: MenuItemType) => {

  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false)

  return (
    <article
      className="overflow-hidden w-full min-h-[117px] p-4 flex-shrink-0 "
      aria-label="Item do Menu"
    >
      {
        isDetailsOpen &&
        <ItemDetails
          {...props}
          onClose={() => {
            setIsDetailsOpen(false)
          }}
        />
      }
      <div
        onClick={() => {
          setIsDetailsOpen(true)
        }}
        className="flex h-[85px] justify-between cursor-pointer">
        <div className="flex flex-col items-start justify-start">
          <Typography className="text-base font-medium h-[18px] flex text-codGray mb-1">
            {props.name}
          </Typography>
          <Typography className="text-base leading-[18.75px] font-light max-h-[38px] pr-2 flex text-left text-tundoraGray mb-1">
            {truncate(props.description, 100)}
          </Typography>
          <Typography className="text-base font-semibold max-h-[19px] flex text-tundoraGray mb-1" currency>
            {props.price}
          </Typography>
        </div>
        <ProductImage images={props?.images || []} />
      </div>
    </article>
  )
}

export default MenuItem
