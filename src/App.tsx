import React, { useEffect, useLayoutEffect } from 'react'
import './App.css';
import Header from './components/organims/header';
import MenuTemplate from './components/pages/menuTemplate';


function App() {

  return (
    <div
      className="flex flex-col items-center justify-center w-screen overflow-x-hidden"
    >
      <Header />
      <main className="flex flex-col items-center w-full min-h-screen text-xl font-normal font-roboto bg-galleryWhite App ">
        <MenuTemplate />
      </main>
    </div>
  );
}

export default App;
