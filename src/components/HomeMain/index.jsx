import React from 'react'
import HomeReference from '~/components/HomeReference'
import HomeSteps from '~/components/HomeSteps'
import { HomeMain } from './styles'

export default function() {
  return (
    <HomeMain className="home-main">
      <HomeSteps />
      <HomeReference />
    </HomeMain>
  )
}
