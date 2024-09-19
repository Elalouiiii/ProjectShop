import React from 'react'
import Slider from './slider/Slider'
import Header from './Header'
import ListCards from '../pages/ListCards'
import Footer from './Footer'


export default function Main() {
  return (
    <div>
      <Header />
      <Slider />
      <ListCards />
      <Footer />

    </div>
  )
}
