import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import QuoteGenerator from './components/Quotes'
import PopularQuotes from './components/PopularQuotes'
import Learn from './components/Learn'
import AddQuote from './components/AddQuote'

export default function App() {
  return (
    <div>
       <BrowserRouter>
          
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/quotes' element={<QuoteGenerator/>}/>
              <Route exact path='/pquotes' element={<PopularQuotes/>}/>
              <Route exact path='/learn' element={<Learn/>}/>
              <Route exact path='/add' element={<AddQuote/>}/>
            </Routes>
         
       </BrowserRouter>
    </div>
  )
}
