import React from 'react'

interface ICardProps {
  children: React.ReactNode
  className?: string
}

const Card = (props: ICardProps) => {
  return (
    <div
      className={`bg-white ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default Card