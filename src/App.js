import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Search from './Components/Search/Search'
import Header from './Components/Header/Header';




const App = () => {

  return (
    <div className='App'>
      <Header />
      <Search />
      <h3></h3>
    </div>
  )
} 

export default App
