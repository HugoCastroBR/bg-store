import React from "react"
import Typography from "../atoms/typography"
import ItemDetailsCategoryOption from "../molecules/itemDetailsCategoryOption"

const ItemDetails = () => {


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/65 overflow-hidden z-40">
      <div className="relative w-screen sm:w-[480px] h-screen sm:h-[720px] bg-white flex flex-col">
        {/* Close button */}
        <button className="absolute right-4 top-12 sm:top-4 z-50 rounded-full bg-white w-7 h-7 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z" fill="#4F372F" />
          </svg>

        </button>

        {/* Image and title section */}
        <div className="flex flex-col w-full h-[426px] flex-shrink-0">
          <div className="relative w-full h-[320px] bg-gray-200">
            <img
              src="/placeholder.svg"
              alt="Product IMAGE  "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="minh-h-[106px]  flex justify-start items-start flex-col p-4" >
            <Typography className="text-2xl font-bold text-codGray mb-2 text-start">
              Product Title
            </Typography>
            <Typography className="text-base font-normal text-tundoraGray text-start ">
              100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.
            </Typography>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="relative flex-1 overflow-hidden">

          <ItemDetailsCategoryOption/>

          {/* Fixed bottom section with blur effect */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-[8px] h-[122px]">
            <div className=" flex flex-col justify-evenly items-center h-full ">
              <div className="flex items-center justify-between w-[143px] h-8 ">
                <button
                  className="w-8 h-8 rounded-full  bg-[#DADADA] flex items-center justify-center "
                >
                  <Typography className="text-4xl text-[#5F5F5F] mb-0.5">
                    -
                  </Typography>
                </button>
                <span className="text-xl font-semibold">1</span>
                <button
                  className="w-8 h-8 rounded-full  bg-burgerBrown flex items-center justify-center text-xl text-white"
                >
                  <Typography className="text-3xl text-white mb-0.5">
                    +
                  </Typography>
                </button>
              </div>
              <button
                className=" bg-burgerBrown w-[432px] h-12 rounded-[40px] mb-4">
                <Typography
                  className="text-white text-lg font-medium"
                >
                  Add to Order &nbsp;•&nbsp; $11.75
                </Typography>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemDetails