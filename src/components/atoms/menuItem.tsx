import React from 'react'
import Typography from './typography'

const MenuItem = () => {
  return (
    <div className="overflow-hidden w-full h-[117px] p-4 flex-shrink-0">
      <div className="flex h-[85px] justify-between">
        <div className="flex flex-col items-start justify-start">
          <Typography className="text-base font-semibold h-[18px] flex  text-codGray mb-1">
            Hardcore
          </Typography>
          <Typography className="text-base leading-[18.75px] font-light max-h-[38px] pr-2 flex text-left text-tundoraGray mb-1">
            180g angus beef burger, homemade molasses barbec...
          </Typography>
          <Typography className="text-lg font-semibold max-h-[19px] flex text-tundoraGray mb-1">
            R$33,00
          </Typography>
        </div>
        <div className="flex-shrink-0 relative w-32 h-[85px] overflow-hidden bg-gray-200 rounded-[4px]">
          IMAGE
        </div>
      </div>
    </div>
  )
}

export default MenuItem