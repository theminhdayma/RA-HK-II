import React from 'react'
import "./UserLayout.css"
import "./Article"
import "./Cart"
import "./Header02"
import "./Menu02"
import "./Navigation"
import Header02 from './Header02'
import Navigation from './Navigation'
import Menu02 from './Menu02'
import Article from './Article'
import Cart from './Cart'

export default function UserLayout() {
    const cartList = [];
  for (let i = 0; i < 4; i++) {
    cartList.push(<Cart key={i} />);
  }
  return (
    <div className='background'>
        <Header02></Header02>
        <Navigation></Navigation>
        <div className='body02'>
            <Menu02></Menu02>
            <div className='content02'>
                <div className='row'>{cartList}</div>
                <div className='row'>{cartList}</div>
                <div className='row'>{cartList}</div>
                <div className='row'>{cartList}</div>
            </div>
            <Article></Article>
        </div>
    </div>
  )
}
