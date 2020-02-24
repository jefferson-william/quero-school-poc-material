import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import LogoEpoca from '~/assets/images/logo-epoca.png'
import LogoFolha from '~/assets/images/logo-folha.png'
import LogoGlobo from '~/assets/images/logo-globo.png'
import LogoVeja from '~/assets/images/logo-veja.png'
import { HomeReference } from './styles'

export default function() {
  return (
    <HomeReference className="home-reference">
      <Container maxWidth="lg" className="home-reference__container">
        <Typography variant="h5" component="h2">
          <strong>Tudo fica mais fácil, pois somos referência em educação no Brasil</strong>
        </Typography>
        <Typography variant="body1">
          Publicações e prêmios estão destacando nossos resultados e diferenciais:
        </Typography>
      </Container>
      <ul>
        <li>
          <img src={LogoGlobo} alt="Logo Globo" />
        </li>
        <li>
          <img src={LogoFolha} alt="Logo Folha" />
        </li>
      </ul>
      <ul>
        <li>
          <img src={LogoVeja} alt="Logo Veja" />
        </li>
        <li>
          <img src={LogoEpoca} alt="Logo Época" />
        </li>
      </ul>
    </HomeReference>
  )
}
