import React from 'react'
import Banner from '../atoms/banner'
import Card from '../atoms/card'
import SearchInput from '../molecules/searchInput'
import CartContainer from '../organims/cartContainer'
import MenuContainer from '../organims/menuContainer'
import ItemDetails from '../organims/itemDetails'

const MenuTemplate = () => {
  return (
    <>
      <ItemDetails />
      <div aria-label="Banner da página">
        <Banner />
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
      </main>
    </>
  )
}

export default MenuTemplate
