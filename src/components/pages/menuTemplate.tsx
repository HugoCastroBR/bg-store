import React, { useState } from 'react'
import { useCallback, useEffect } from 'react'
import Banner from '../atoms/banner'
import Card from '../atoms/card'
import SearchInput from '../molecules/searchInput'
import CartContainer from '../organims/cartContainer'
import MenuContainer from '../organims/menuContainer'
import FullButton from '../atoms/fullButton'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'
import { getRestaurantItems, getRestaurantDetails } from '../../services/api/restaurant'
import useStore from '../../hooks/useStore'
import { setRestaurant, setRestaurantItems } from '../../store/action'
import { Restaurant, RestaurantItems } from '../../types/restaurant'

const MenuTemplate = () => {

  const { t } = useTranslation()
  const { states, dispatch } = useStore()
  
  const [search, setSearch] = useState('')


  const loadRestaurantDetails = useCallback(async () => {
    const data = await getRestaurantDetails()
    const items = await getRestaurantItems()
    dispatch(setRestaurant(data as Restaurant))
    dispatch(setRestaurantItems(items as RestaurantItems))
    document.body.style.setProperty('--color-primary', data.webSettings.primaryColour)
    document.body.style.setProperty('--color-nav-background', data.webSettings.navBackgroundColour)
  }, []);

  useEffect(() => {
    loadRestaurantDetails()
  }, []);


  return (
    <>
      <div aria-label="Banner da página" className='w-full'>
        <Banner
          image={states.restaurant?.webSettings?.bannerImage || ''}
          label={states.restaurant?.name || ''}
        />
      </div>
      <div
        className='fixed top-0 left-0 right-0 z-40 flex items-start justify-center w-full h-screen md:hidden bg-gray-50'
      >
        <CartContainer 
          {...states.basket}
        />
      </div>

      <main className="flex flex-col items-center w-full h-full max-w-[1024px] bg-white sm:bg-transparent">
        <section
          aria-label="Barra de pesquisa"
          className="w-full h-auto py-4 sm:py-[6px] px-4 sm:px-0"
        >
          <SearchInput 
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <Card
          className="max-w-[1024px] min-h-screen w-full py-0 px-0 sm:py-8 sm:px-10 flex justify-between bg-gray-50"
          role="region"
          aria-labelledby="menu-section"
        >
          <section id="menu-section" aria-label="Conteúdo do menu" className="w-full">
            <MenuContainer 
              search={search}
            />
          </section>

          <Card
            className="hidden w-full shadow-none md:flex max-w-80 sm:shadow-card h-max"
            role="region"
            aria-labelledby="cart-section"
          >
            <CartContainer 
              {...states.basket}
            />
          </Card>
        </Card>
        <div className='fixed top-[calc(100vh-72px)] left-0 right-0 h-screen z-50 block md:hidden'>
          <FullButton className='md:w-[432px] w-[345px] h-12 rounded-[40px] mb-4 bg-burgerBrown '>
            <Typography className="text-lg font-medium text-white">
              {t("cart.yourBasket")} &nbsp;•&nbsp; 1 {t("cart.item")}
            </Typography>
          </FullButton>
        </div>
      </main>
    </>
  )
}

export default MenuTemplate
