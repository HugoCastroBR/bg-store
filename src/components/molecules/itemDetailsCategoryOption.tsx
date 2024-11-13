import React from 'react'
import ItemDetailsOption from '../atoms/itemDetailsOption'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '../../types/restaurant'

const ItemDetailsCategoryOption = (props: MenuItem) => {

  const { t } = useTranslation()

  return (
    <div className="absolute inset-0 overflow-y-auto">
      {props.modifiers?.map((mod,index) => {
        return (
          <>
            <div className="h-[68px] bg-gray-50 flex flex-col justify-center items-start px-6 py-4" key={index}>
              <Typography className="text-base font-bold text-tundoraGray" >
                {mod.name}
              </Typography>
              <Typography className="text-base font-normal text-tundoraGray" >
                {mod.maxChoices === 1 ? t('itemDetails.oneChoice') : t('itemDetails.chose') + mod.maxChoices}
              </Typography>
            </div>
            <div className="pb-[120px]">
              {props.modifiers?.map((modifier, index) => (
                <ItemDetailsOption
                  key={index}
                  {...modifier}
                />
              ))}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ItemDetailsCategoryOption