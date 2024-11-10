import React from 'react'
import './App.css';
import Header from './components/organims/header';
import MenuTemplate from './components/templates/menuTemplate';


function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-screen min-h-screen text-xl font-normal bg-galleryWhite App ">
        <MenuTemplate />
      </main>
    </>
  );
}

export default App;
