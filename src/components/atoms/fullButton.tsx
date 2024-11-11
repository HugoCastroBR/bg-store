import React from 'react'

interface IFullButtonProps {
  children: React.ReactNode
  className?: string
}
const FullButton = (props: IFullButtonProps) => {
  return (
    <button
      className=" bg-burgerBrown"
      {...props}
      >
      {props.children}
    </button>

  )
}

export default FullButton