'use server'
import React, { useEffect, useState } from 'react'
import Banner from '../atoms/banner'
import Card from '../atoms/card'
import SearchInput from '../molecules/searchInput'
import CartContainer from '../organims/cartContainer'
import MenuContainer from '../organims/menuContainer'
import ItemDetails from '../organims/itemDetails'
import FullButton from '../atoms/fullButton'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'
import getRestaurantDetails from '../../services/api/restaurant'

const MenuTemplate = () => {

  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false)
  const { t } = useTranslation()

  const loadRestaurantDetails = async () => {
    const restaurant = await getRestaurantDetails()
    console.log(restaurant)
  }

  const data = getRestaurantDetails().then(data => {
    console.log(data)
  })
  console.log(data)
  
  return (
    <>
      {
        isItemDetailsOpen && <ItemDetails />
      }
      <div aria-label="Banner da página">
        <Banner />
      </div>
      <div
        className='z-40 fixed top-0 left-0 right-0 h-screen md:hidden w-full flex justify-center items-start bg-gray-50'
      >
        <CartContainer />
      </div>

      <main className="flex flex-col items-center w-full h-full max-w-[1024px] bg-white sm:bg-transparent">
        <section
          aria-label="Barra de pesquisa"
          className="w-full h-auto py-4 sm:py-[6px] px-4 sm:px-0"
        >
          <SearchInput />
        </section>

        <Card
          className="max-w-[1024px] min-h-screen w-full py-0 px-0 sm:py-8 sm:px-10 flex justify-between bg-gray-50"
          role="region"
          aria-labelledby="menu-section"
        >
          <section id="menu-section" aria-label="Conteúdo do menu" className="w-full">
            <MenuContainer />
          </section>

          <Card
            className="hidden w-full shadow-none md:flex max-w-80 sm:shadow-card h-max"
            role="region"
            aria-labelledby="cart-section"
          >
            <CartContainer />
          </Card>
          

        </Card>
        <div className='fixed top-[calc(100vh-72px)] left-0 right-0 h-screen z-50 block md:hidden'>
          <FullButton className='md:w-[432px] w-[345px] h-12 rounded-[40px] mb-4 bg-burgerBrown '>
            <Typography className="text-white text-lg font-medium">
              {t("cart.yourBasket")} &nbsp;•&nbsp; 1 {t("cart.item")}
            </Typography>
          </FullButton>
        </div>
      </main>
    </>
  )
}

export default MenuTemplate
