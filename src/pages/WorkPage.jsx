// src/pages/WorkPage.jsx
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import DividerLayout from '../layouts/DividerLayout'

function WorkPage() {
  return (
    <MainLayout>
      <DividerLayout 
        leftComponent={<Card />}
        rightComponent={<Carousel />}
      />
    </MainLayout>
  )
}

export default WorkPage