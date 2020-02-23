import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import HomeAutocomplete from '~/components/HomeAutocomplete'
import { HomeSearch, Wrapper } from './styles'

export default function({ elevation }) {
  return (
    <HomeSearch className="home-search">
      <Container maxWidth="lg" className="home-search__container">
        <Wrapper elevation={elevation} className="home-search__wrapper">
          <HomeAutocomplete placeholder="Cidade" className="home-autocomplete--first" />
          <HomeAutocomplete placeholder="Bairro" />
          <HomeAutocomplete placeholder="Ano/Série" />
          <Button className="home-search__action" variant="contained" disableElevation disableRipple>
            <Typography className="home-search__action-text" variant="body1" component="span">
              Buscar bolsas
            </Typography>
          </Button>
        </Wrapper>
      </Container>
    </HomeSearch>
  )
}
