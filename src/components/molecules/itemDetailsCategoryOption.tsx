import React from 'react'
import ItemDetailsOption from '../atoms/itemDetailsOption'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'

const ItemDetailsCategoryOption = () => {

  const { t } = useTranslation()
  
  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="h-[68px] bg-gray-50 flex flex-col justify-center items-start px-6 py-4">
        <Typography className="text-tundoraGray font-bold text-base" >
          {t('itemDetails.chooseSize')}
        </Typography>
        <Typography className="text-tundoraGray font-normal text-base" >
          {t('itemDetails.oneChoice')}
        </Typography>
      </div>
      <div className="pb-[120px]">
        <ItemDetailsOption />
        <ItemDetailsOption />
        <ItemDetailsOption />
      </div>
    </div>
  )
}

export default ItemDetailsCategoryOption