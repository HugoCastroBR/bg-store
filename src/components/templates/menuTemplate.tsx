import React from 'react'
import Banner from '../atoms/banner'
import Card from '../atoms/card'
import SearchInput from '../molecules/searchInput'
import CategorySelector from '../organims/categorySelector'
import MenuCategoryContainer from '../molecules/menuCategoryContainer'

const MenuTemplate = () => {
  return (
    <>
      <Banner />
      <div
        className='flex flex-col items-center  w-full h-full max-w-[1024px] bg-white sm:bg-transparent'
      >
        <div
          className='w-full h-auto py-4 sm:py-[6px] px-4 sm:px-0'
        >
          <SearchInput />
        </div>
        <Card
          className='max-w-[1024px] min-h-screen w-full py-0 px-0 sm:py-8 sm:px-10 flex justify-between bg-gray-50'
        >
          <Card
            className='max-w-[600px] min-h-[400px] h-auto w-full flex flex-col shadow-none sm:shadow-card pb-6'
          >
            <CategorySelector />
            <MenuCategoryContainer />
            <MenuCategoryContainer />

          </Card>
          <Card
            className='hidden md:flex w-full min-h-[129px] pb-6 max-w-80 shadow-none sm:shadow-card h-auto'
          >
            <h1>Card 2</h1>
            
          </Card>
        </Card>
      </div>
    </>
  )
}

export default MenuTemplate