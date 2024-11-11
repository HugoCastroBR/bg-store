import React from 'react'

interface ICardProps {
  children: React.ReactNode
  className?: string
  ariaLabel?: string 
  role?: string
}

const Card = (props: ICardProps) => {
  return (
    <div
      className={`bg-white p-4 ${props.className}`}
      aria-label={props.ariaLabel || 'Card de conteúdo'} role={props.role}
    >
      {props.children}
    </div>
  )
}

export default Card
