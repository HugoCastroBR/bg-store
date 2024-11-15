import React from 'react'
import { useTranslation } from 'react-i18next'

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  const { t } = useTranslation()

  return (
    <form role="search" aria-label={t('searchInput.ariaLabel')}>
      <div className="w-full h-11 border border-regentGray rounded-[8px] overflow-hidden flex bg-white">
        <div className="flex items-center justify-center w-12 h-full">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8C16.5 9.84871 15.8729 11.551 14.8199 12.9056L20.2071 18.2929L18.7929 19.7071L13.4056 14.3199C12.051 15.3729 10.3487 16 8.5 16ZM14.5 8C14.5 11.3137 11.8137 14 8.5 14C5.18629 14 2.5 11.3137 2.5 8C2.5 4.68629 5.18629 2 8.5 2C11.8137 2 14.5 4.68629 14.5 8Z" fill="#8A94A4" />
          </svg>
        </div>
        <input
          type="search"
          className="w-full h-full font-normal focus:outline-none font-roboto placeholder:font-roboto placeholder:font-normal placeholder:text-mineShaftGray"
          placeholder={t('searchInput.placeholder')}
          aria-label={t('searchInput.ariaLabel')}
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default SearchInput
