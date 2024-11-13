import React from 'react';
import Typography from '../atoms/typography';

interface IUnderLineButtonProps {
  children: React.ReactNode;
  selected?: boolean;
  classname?: string;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: 'primary' | 'secondary';
}

const UnderLineButton = (props: IUnderLineButtonProps) => {
  const { children, selected, classname, onClick, ariaLabel,variant } = props;
  

  if (variant === 'primary' || variant === undefined) {
    return (
      <button
        onClick={onClick}
        className={`text-white h-full border-white w-[232px] 
          ${selected ? 'border-b-[5px]' : 'border-b-0'} 
          ${classname}`}
        aria-pressed={selected}
        aria-label={ariaLabel}
      >
        <Typography className="font-normal text-center text-white">
          {children}
        </Typography>
      </button>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={`text-white h-full border-burgerBrown 
        ${selected ? 'border-b-2' : 'border-b-0'} 
        ${classname}`}
      aria-pressed={selected}
      aria-label={ariaLabel}
    >
      <Typography className={`text-base ${selected? 'font-semibold' : 'font-normal '} text-center text-codGray`}>
        {children}
      </Typography>
    </button>
  );
};

export default UnderLineButton;
