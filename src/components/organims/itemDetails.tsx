import React, { useEffect, useState } from "react"
import Typography from "../atoms/typography"
import ItemDetailsCategoryOption from "../molecules/itemDetailsCategoryOption"
import FullButton from "../atoms/fullButton"
import { MenuItem } from "../../types/restaurant"
import { useTranslation } from "react-i18next"
import useStore from "../../hooks/useStore"
import { addItem } from "../../store/action"

interface IItemDetailsProps extends MenuItem {
  onClose?: () => void;
}

const ItemDetails = (props:IItemDetailsProps) => {

  const { t } = useTranslation()
  const { dispatch } = useStore()
  
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    console.log(props.modifiers)
  }, [])

  const handlerAddToCart = (quantity: number) => {
    dispatch(addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity
    }))
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-black/65">
      <div className="relative w-screen sm:w-[480px] h-screen sm:h-[720px] bg-white flex flex-col">
        {/* Close button */}
        <button 
        onClick={props.onClose}
        className="absolute z-50 flex items-center justify-center bg-white rounded-full right-4 top-12 sm:top-4 w-7 h-7"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z" fill="#4F372F" />
          </svg>

        </button>

        {/* Image and title section */}
        <div className="flex flex-col w-full h-[426px] flex-shrink-0">
          <div className="relative w-full h-[320px] bg-gray-200">
            <img
              src={props.images?.[0].image || ''}
              alt={props.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="min-h-[106px]  flex justify-start items-start flex-col p-4" >
            <Typography className="mb-2 text-2xl font-bold text-codGray text-start">
              {props.name}
            </Typography>
            <Typography className="text-base font-normal text-tundoraGray text-start ">
              {props.description}
            </Typography>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="relative flex-1 overflow-hidden">

          <ItemDetailsCategoryOption 
            {...props}
          />

          {/* Fixed bottom section with blur effect */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-[8px] h-[122px]">
            <div className="flex flex-col items-center h-full justify-evenly">
              <div className="flex items-center justify-between w-[143px] h-8 ">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1)
                    }
                  }}
                  className="w-8 h-8 rounded-full  bg-[#DADADA] flex items-center justify-center "
                >
                  <Typography className="text-4xl text-[#5F5F5F] mb-0.5">
                    -
                  </Typography>
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                  className="flex items-center justify-center w-8 h-8 text-xl text-white rounded-full bg-burgerBrown"
                >
                  <Typography className="text-3xl text-white mb-0.5">
                    +
                  </Typography>
                </button>
              </div>
              <FullButton className={`${quantity <= 0 ? 'bg-primary' : 'bg-gray-50'} w-[432px] h-12 rounded-[40px] mb-4`}>
                <Typography
                  className="text-lg font-medium text-white"
                >
                  {t('itemDetails.add')} &nbsp;•&nbsp; <Typography currency className="text-lg font-medium text-white">{props.price}</Typography>
                </Typography>
              </FullButton>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemDetails