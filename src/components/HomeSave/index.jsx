import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React, { useState, useCallback } from 'react'
import Header from '~/components/Header'
import HomeAutocomplete from '~/components/HomeAutocomplete'
import HomeSchoolSaveCard from '~/components/HomeSchoolSaveCard'
import HomeSearchDialog from '~/components/HomeSearchDialog'
import { HomeSave } from './styles'

export const DATA = ['São José dos Campos', 'São Paulo', 'Rio de Janeiro']

export default function() {
  const [data, UseData] = useState('')
  const [toggle, UseToggle] = useState(false)

  const HandleToggle = useCallback(() => {
    const value = !toggle

    UseToggle(value)

    if (value) {
      setTimeout(() => {
        document.querySelector('.home-search-dialog__home-autocomplete input').focus()
      }, 211)
    }
  }, [toggle])

  const SetData = useCallback(
    event => {
      UseData(event.target.value)
    },
    [data, toggle]
  )

  return (
    <HomeSave className="home-save">
      <Container maxWidth="lg" className="home-save__container">
        <Typography variant="h5" component="h2">
          <strong>
            Economize até 80% na mensalidade da escola de seus filhos Educação Infantil, Ensino Fundamental e Ensino
            Médio
          </strong>
        </Typography>
        <HomeAutocomplete
          value={data}
          label="Mostrando escolas perto de"
          placeholder="Sua cidade"
          handleClick={HandleToggle}
          handleChange={SetData}
          isShowOptions={false}
          isShowInfo={false}
        />
        <HomeSearchDialog open={toggle} onClose={HandleToggle}>
          <Header />
          <HomeAutocomplete
            placeholder="Sua cidade"
            className="home-search-dialog__home-autocomplete"
            icon="fa-search"
            handleChange={SetData}
            handleClose={() => UseToggle(!toggle)}
            data={DATA}
            isShowOptions
          />
        </HomeSearchDialog>
        {[1, 2].map(() => (
          <HomeSchoolSaveCard
            name="Escola Recanto Do Diver"
            type="Rede privada"
            address="Rua Tibério, 265"
            city="Vila Romana"
            state="São Paulo"
            options={['Educação Infantil']}
            discount={71}
            price="R$ 504,02"
          />
        ))}
      </Container>
    </HomeSave>
  )
}
