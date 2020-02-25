import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React, { useState, useCallback } from 'react'
import Header from '~/components/Header'
import HomeAutocomplete from '~/components/HomeAutocomplete'
import HomeSearchDialog from '~/components/HomeSearchDialog'
import { HomeSearch, Wrapper } from './styles'

export const PROPERTIES = {
  city: 'Cidade',
  neighborhood: 'Bairro',
  year: 'Ano/Série',
}

export const DATA = {
  city: ['São José dos Campos', 'São Paulo'],
  neighborhood: ['Jardim Aquárius', 'Jardim Satélite'],
  year: ['Educação Infantil', 'Ensino Fundamental 1', 'Ensino Fundamental 2', 'Ensino Médio'],
}

export default function({ elevation }) {
  const [data, UseData] = useState({})
  const [prop, UseProp] = useState('city')
  const [toggle, UseToggle] = useState(false)

  const HandleToggle = useCallback(
    property => {
      const value = !toggle

      UseToggle(value)

      if (property && value) {
        setTimeout(() => {
          document.querySelector('.home-search-dialog__home-autocomplete input').focus()
        }, 211)

        UseProp(property)
      }
    },
    [toggle, prop]
  )

  const HandleToggleProp = useCallback(property => () => HandleToggle(property), [toggle, prop])

  const SetData = useCallback(
    property => event => {
      UseData({ ...data, [property]: event.target.value })
    },
    [data, prop, toggle]
  )

  return (
    <HomeSearch className="home-search">
      <Container maxWidth="lg" className="home-search__container">
        <Wrapper elevation={elevation} className="home-search__wrapper">
          <HomeAutocomplete
            value={data.city}
            placeholder="Cidade"
            className="home-autocomplete--first"
            handleClick={HandleToggleProp('city')}
            handleChange={SetData('city')}
          />
          <HomeAutocomplete
            value={data.neighborhood}
            placeholder="Bairro"
            handleClick={HandleToggleProp('neighborhood')}
            handleChange={SetData('neighborhood')}
          />
          <HomeAutocomplete
            value={data.year}
            placeholder="Ano/Série"
            handleClick={HandleToggleProp('year')}
            handleChange={SetData('year')}
          />
          <Button className="home-search__action" variant="contained" disableElevation disableRipple>
            <Typography className="home-search__action-text" variant="body1" component="span">
              Buscar bolsas
            </Typography>
          </Button>
          <HomeSearchDialog open={toggle} onClose={HandleToggle}>
            <Header />
            <HomeAutocomplete
              placeholder={PROPERTIES[prop]}
              className="home-search-dialog__home-autocomplete"
              icon="fa-search"
              handleChange={SetData(prop)}
              handleClose={() => UseToggle(!toggle)}
              data={DATA[prop]}
              isShowOptions
            />
          </HomeSearchDialog>
        </Wrapper>
      </Container>
    </HomeSearch>
  )
}
