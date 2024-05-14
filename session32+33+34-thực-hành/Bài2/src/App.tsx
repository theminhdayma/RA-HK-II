import React from 'react'
import Header from './components/Header'
import Product from './components/Product'

export default function App() {
  return (
    <div className='full-backgroud'>
      <Header/>
      <div className='content'>
        <div className='row'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>  
        <div className='row'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div> 
      </div>
      <br /><br /><br />
      <br /><br /><br />
    </div>
  )
}
