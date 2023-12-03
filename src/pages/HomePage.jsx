import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import View from '../components/View'
import DropWown from '../components/DropWown'
import Iformation from '../components/Iformation'

const HomePage = () => {
  return (
    <>
      <DropWown />
      <Carousel />
      <Iformation/>
      <Card />
      <View />
      
    </>
  )
}

export default HomePage