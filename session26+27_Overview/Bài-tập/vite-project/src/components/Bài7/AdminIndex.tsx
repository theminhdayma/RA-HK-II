import React from 'react'
import "./AdminIndex.css"
import "./Menu"
import "./Footer"
import "./Main"
import "./Header"
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'

export default function AdminIndex() {
  return (
    <div className='headered'>
      <Header></Header>
      <div className='bodyed'>
        <Menu></Menu>
        <div className='content'>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
