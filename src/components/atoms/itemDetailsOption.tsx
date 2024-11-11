import React from 'react'
import Typography from './typography'

const ItemDetailsOption = () => {
  

  const [selected, setSelected] = React.useState(false)

  return (
    <div className="flex justify-between w-full items-starth-18 pt-2 pb-[14px] px-6">
      <div className="flex flex-col justify-start items-start w-11/12 pr-2 flex-shrink-0">
        <Typography className="text-codGray font-medium text-base mb-1">
          1 meat
        </Typography>
        <Typography className="text-tundoraGray font-normal text-base">
          R$ 33.00
        </Typography>
      </div>
      <div className=" flex flex-shrink-0 w-1/12 mt-4 h-full items-center justify-end">
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