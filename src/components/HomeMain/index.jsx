import Container from '@material-ui/core/Container'
import React from 'react'
import HomeSteps from '~/components/HomeSteps'
import { HomeMain } from './styles'

export default function() {
  return (
    <HomeMain className="home-main">
      <Container maxWidth="lg" className="home-main__container">
        <HomeSteps />
      </Container>
    </HomeMain>
  )
}
