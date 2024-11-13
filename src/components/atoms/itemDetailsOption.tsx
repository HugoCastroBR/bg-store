import React from 'react'
import Typography from './typography'
import { Modifier } from '../../types/restaurant'

const ItemDetailsOption = (props:Modifier) => {
  
  const [selected, setSelected] = React.useState(false)
  
  return (
    <div className="flex justify-between w-full items-starth-18 pt-2 pb-[14px] px-6">
      <div className="flex flex-col items-start justify-start flex-shrink-0 w-11/12 pr-2">
        <Typography className="mb-1 text-base font-medium text-codGray">
          1 meat
        </Typography>
        <Typography className="text-base font-normal text-tundoraGray">
          R$ 33.00
        </Typography>
      </div>
      <div className="flex items-center justify-end flex-shrink-0 w-1/12 h-full mt-4 ">
        <button
          className='h-6 w-6 flex justify-center items-center cursor-pointer border-[3px] border-regentGray rounded-full'
          name='option'
          onClick={() => setSelected(!selected)}
        >
          {selected
          ?
          <div className='h-[14px] w-[14px] rounded-full bg-regentGray'></div>
          :
          null
          }
        </button>
      </div>
    </div>
  )
}

export default ItemDetailsOption