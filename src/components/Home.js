import React from 'react'
import About from './about'
import Footer from './Footer'
export default function Home() {
  return (
    <>
    <div className='container23'>
        <div className='header'>
        <h1 style={{paddingTop: '220px'}}>Hari's Quote machine</h1>
        <h4>To make a thought ful world ,add Some thoughts!!!</h4>
       
       <button style={{marginTop:'30px',marginLeft:'47vw'}}>|   Get Started   |</button>
      
        </div>
    </div>
    <About/>
    <Footer/>
    </>
  )
}
