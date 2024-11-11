import React from "react"
import Typography from "../atoms/typography"

export default function Component() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/65 overflow-hidden z-40">
      <div className="relative w-full h-full max-w-[480px] max-h-[720px] bg-white flex flex-col">
        {/* Close button */}
        <button className="absolute right-4 top-4 z-50 rounded-full bg-white w-7 h-7 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z" fill="#4F372F" />
          </svg>

        </button>

        {/* Image and title section */}
        <div className="flex flex-col w-full h-[426px] bg-gray-100 flex-shrink-0">
          <div className="relative w-full h-[320px] bg-gray-300">
            <img
              src="/placeholder.svg"
              alt="Product IMAGE  "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="minh-h-[106px] bg-red-100 flex justify-start items-start flex-col p-4" >
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
          <div className="absolute inset-0 overflow-y-auto">
            <div className="p-4 pb-[200px]">
              {/* Your scrollable content here */}
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* Add more content as needed */}
            </div>
          </div>

          {/* Fixed bottom section with blur effect */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 h-[122px]">
            <div className="">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold">$11.75</span>
              </div>

              <div className="flex items-center justify-center ">
                <button className="w-12 h-12 rounded-full  border-gray-300 flex items-center justify-center text-xl">
                  -
                </button>
                <span className="text-xl font-semibold">1</span>
                <button className="w-12 h-12 rounded-full  border-gray-300 flex items-center justify-center text-xl">
                  +
                </button>
              </div>
              <button className="w-full  bg-primary text-primary-foreground rounded-lg font-semibold">
                Add to Order • $11.75
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}